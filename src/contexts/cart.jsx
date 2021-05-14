import {useEffect} from 'react'
import {useRef} from 'react'
import {useState, createContext} from 'react'

export const CartContext = createContext({})

export const CartProvider = ({children}) => {
  const [items, setItems] = useState([])
  const [error, setError] = useState(false)
  const restaurant = useRef(false)

  useEffect(() => {
    const localCart = localStorage.getItem('cart')
    const localRest = localStorage.getItem('rest')
    if (localCart && localRest && !items.length && !restaurant.current) {
      setItems(JSON.parse(localCart))
      restaurant.current = JSON.parse(localRest)
    }
  }, [items.length])

  const add = (product, selectedRest) => {
    if (!restaurant.current) restaurant.current = {...selectedRest}
    if (selectedRest.id !== restaurant.current.id) {
      return setError(`Existe pedido ativo do ${restaurant.current.name}`)
    }

    let cartItems = [...items]
    const index = cartItems.findIndex(item => item.id === product.id)

    if (index >= 0) cartItems[index].quantity += 1
    else cartItems = [...cartItems, {...product, quantity: 1}]

    setItems(cartItems)
    localStorage.setItem('cart', JSON.stringify(cartItems))
    localStorage.setItem('rest', JSON.stringify(restaurant.current))
  }

  const remove = product => {
    let cartItems = [...items]
    const index = cartItems.findIndex(item => item.id === product.id)

    if (index >= 0) {
      const itemToRemove = cartItems[index]
      if (itemToRemove.quantity > 1) itemToRemove.quantity -= 1
      else cartItems.splice(index, 1)
    } else {
      return setError('Item nao existe no carrinho')
    }

    setItems(cartItems)
    if (!cartItems.length) {
      restaurant.current = false
      localStorage.removeItem('cart')
      localStorage.removeItem('rest')
    }
  }

  const amount = product =>
    items.find(item => item.id === product.id)?.quantity || 0

  const sum = () => {
    if (!restaurant.current) return 0
    const productsSum = items.reduce(
      (sum, item) => (sum += item.price * item.quantity),
      0
    )
    return productsSum + restaurant.current.shipping
  }

  const clear = () => {
    setItems([])
    restaurant.current = false
    localStorage.removeItem('cart')
    localStorage.removeItem('rest')
  }

  return (
    <CartContext.Provider
      value={{
        items,
        error,
        setError,
        restaurant,
        add,
        remove,
        sum,
        amount,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
