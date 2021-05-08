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
import RadioButton from 'components/RadioButton'
import Button from 'components/Button'

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
      <h4>Frete R$ 6,00</h4>
      <h3>Total: {cart.sum().toFixed(2)}</h3>
        <br />
      <CategoryTitle title='Forma de pagamento' />
      <RadioButton ></RadioButton>
        <Button label = "Comprar">      
        </Button>

    </div>
  )
}

const AddressRestaurant = props => {
  return 'ADRESS RESTAURANTE'
}

export default Cart
