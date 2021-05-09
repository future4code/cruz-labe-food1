import {useState, createContext} from 'react'

export const CartContext = createContext({})

export const CartProvider = ({children}) => {
  const [items, setItems] = useState([])
  const [error, setError] = useState(false)

  const add = product => {
    let cartItems = [...items]
    const index = cartItems.findIndex(item => item.id === product.id)

    if (index >= 0) cartItems[index].quantity += 1
    else cartItems = [...cartItems, {...product, quantity: 1}]

    setItems(cartItems)
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
  }

  const amount = product =>
    items.find(item => item.id === product.id)?.quantity || 0

  const sum = () =>
    items.reduce((sum, item) => (sum += item.price * item.quantity), 0)

  const clear = () => setItems([])

  return (
    <CartContext.Provider
      value={{items, error, add, remove, sum, amount, clear}}
    >
      {children}
    </CartContext.Provider>
  )
}
