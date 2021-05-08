import {CartContext} from 'contexts/cart'
import {useContext, useState} from 'react'
import {useRequestData} from 'hooks'
import api from 'services/api'
import Header from 'components/Header'
import BottomTabNav from 'components/BottomTabNav'
import ItemCard from 'components/ItemCard'
import UserAdress from 'components/UserAdress'
import CategoryTitle from 'components/CategoryTitle'
import styles from './styles.module.scss'

// const

const Cart = () => {
  const cart = useContext(CartContext)
  const [user, isLoading, isError] = useRequestData(
    api.getProfile,
    {},
    {selectProp: 'user'}
  )

  console.log(cart)

  return (
    <div className={styles.container}>
      <Header title='Meu carrinho' showArrow />
      {isLoading ? (
        'Loading'
      ) : (
        <UserAdress address={user.address} title='Endereço de entrega' />
      )}
      <AddressRestaurant className={styles.AddressRestaurant} />
      {cart.items.map(item => (
        <ItemCard key={item.id} {...item} />
      ))}
      <CategoryTitle title='Forma de pagamento' />
      <h3>Total: {cart.sum().toFixed(2)}</h3>

      <h3> .... Aqui vem o Radius pagto</h3>
      <h3>Debito ou credito?</h3>

      <BottomTabNav />
    </div>
  )
}

const AddressRestaurant = props => {
  return 'ADRESS RESTAURANTE'
}

export default Cart
