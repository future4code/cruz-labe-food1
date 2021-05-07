import {useState, createContext} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [items, setItems] = useState([])
  const [error, setError] = useState(false)
  console.table(items)

  const add = product => {
    let newCartItems = [...items]
    const index = newCartItems.findIndex(item => item.id === product.id)

    if (index >= 0) newCartItems[index].quantity += 1
    else newCartItems = [...newCartItems, {...product, quantity: 1}]

    setItems(newCartItems)
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

  const amount = product => items.find(item => item.id === product.id)?.quantity

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

// const cart = useContext(CartContext)

// cria o context e export
// cria o component com o provider e as operacoes export ele

// objecto para usar
// cart.items = retorna todos os items
// cart.add(item) = adicionar novo item
// cart.remove(item) = remove o item
