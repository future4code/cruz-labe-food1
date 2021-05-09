import {CartProvider} from './cart'
import {ThemeProvider} from './theme'

const GlobalState = ({children}) => (
  <CartProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </CartProvider>
)

export default GlobalState
