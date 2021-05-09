import {CartContext} from 'contexts/cart'
import {useContext, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useRequestData} from 'hooks'
import * as api from 'services/api'
import Header from 'components/Header'
import BottomTabNav from 'components/BottomTabNav'
import ItemCard from 'components/ItemCard'
import UserAddress from 'components/UserAddress'
import CategoryTitle from 'components/CategoryTitle'
import styles from './styles.module.scss'
import { ThemeContext } from 'contexts/theme'
import { useEffect } from 'react'
import RadioButton from 'components/RadioButton'
import Button from 'components/Button'
import AddressRestaurant from 'components/AddressRestaurant'
import Category from 'components/CategoryTitle'
import RestaurantCard from 'components/RestaurantCard'
import {formatPrice} from 'utils/helpers'
import {useGo} from 'hooks/useGo'

// const

const Cart = props => {
  const cart = useContext(CartContext)
  const theme = useContext(ThemeContext)

  const [user, isLoading, isError] = useRequestData(
    api.getProfile,
    {},
    {selectProp: 'user'}
  )
  const [
    order,
    loadingOrder,
    errorOrder,
    finishOrder,
    setErrorOrder,
  ] = useRequestData(api.placeOrder, {}, {selectProp: 'order', wait: true})
  const [paymentMethod, setPaymentMethod] = useState('')
  const go = useGo()


  const purchase = async () => {
    console.log({cart})
    if (!paymentMethod) {
      setErrorOrder({message: 'Favor selecione o método de pagamento'})
      return
    }

    const products = cart.items.map(i => ({id: i.id, quantity: i.quantity}))
    console.log('items:', products)
    // const products = [...cart.items]
    const id = cart.restaurant.id

    await finishOrder({id, data: {products, paymentMethod}})
    if (!errorOrder) {
      go.home()
    } else {
      alert('Deu BO no pedido...')
    }
  }

  console.log({paymentMethod})

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

      <AddressRestaurant {...cart.restaurant} />

      {cart.items.map(item => (
        <ItemCard key={item.id} {...item} />
      ))}
      <h4>Frete {formatPrice(cart.restaurant.shipping)}</h4>
      <h3>Total: {formatPrice(cart.sum())}</h3>
      <CategoryTitle title='Forma de pagamento' />
      <RadioButton {...{paymentMethod, setPaymentMethod}}></RadioButton>
      <Button label='Comprar' action={purchase} />
      {loadingOrder && 'Finalizando pedido...'}

    </div>
  )
}

export default Cart
