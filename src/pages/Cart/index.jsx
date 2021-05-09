import {CartContext} from 'contexts/cart'
import {useContext} from 'react'
import {useRequestData} from 'hooks'
import * as api from 'services/api'
import BottomTabNav from 'components/BottomTabNav'
import ItemCard from 'components/ItemCard'
import UserAddress from 'components/UserAddress'
import CategoryTitle from 'components/CategoryTitle'
import styles from './styles.module.scss'
import { ThemeContext } from 'contexts/theme'
import { useEffect } from 'react'

const Cart = () => {
  const cart = useContext(CartContext)
  const theme = useContext(ThemeContext)
  const [user, isLoading] = useRequestData(
    api.getProfile,
    {},
    {selectProp: 'user'}
  )

  useEffect(() => {
    theme.setHeaderOptions({ title: "Carrinho"})
  })


  return (
    <div className={styles.container}>
      {isLoading ? (
        'Loading'
      ) : (
        <UserAddress address={user.address} title='Endereço de entrega' />
      )}
      <AddressRestaurant className={styles.AddressRestaurant} />
      {cart.items.map(item => (
        <ItemCard key={item.id} {...item} />
      ))}
      <CategoryTitle title='Forma de pagamento' />
      <h3>Total: {cart.sum()}</h3>

      <h3> .... Aqui vem o Radius pagto</h3>
      <h3>Debito ou credito senhor?</h3>

      {/* <BottomTabNav /> */}
    </div>
  )
}

const AddressRestaurant = props => {
  return 'address RESTAURANTE'
}

export default Cart
