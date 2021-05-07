import {CartProvider} from './cart'
import {ThemeProvider} from './theme'

const GlobalState = ({children}) => {
  return (
    <CartProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </CartProvider>
  )
}

export default GlobalState
