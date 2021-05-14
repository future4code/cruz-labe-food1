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
import {ThemeContext} from 'contexts/theme'
import RadioButton from 'components/RadioButton'
import Button from 'components/Button'
import AddressRestaurant from 'components/AddressRestaurant'
import Category from 'components/CategoryTitle'
import RestaurantCard from 'components/RestaurantCard'
import {formatPrice} from 'utils/helpers'
import {useGo} from 'hooks/useGo'
import Loading from 'components/Loading'
import Alert from 'components/Alert'
import RadioGroup from 'components/RadioGroup'

// const

const Cart = props => {
  const cart = useContext(CartContext)
  console.log({cart})
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

    if (!cart.items.length) {
      setErrorOrder({message: 'Nenhum item no carrinho'})
      return
    }

    if (!cart.restaurant.current) {
      setErrorOrder({message: 'Nenhum restaurante selecionado'})
      return
    }

    const products = cart.items.map(i => ({id: i.id, quantity: i.quantity}))
    console.log('items:', products)
    const id = cart.restaurant.current.id

    const r = await finishOrder({id, data: {products, paymentMethod}})
    if (!errorOrder && r?.totalPrice) {
      cart.clear()
      setTimeout(go.home, 3000)
    }
  }
  const paymentOptions = [
    {label: 'Dinheiro', value: 'money'},
    {label: 'Cartão de crédito', value: 'creditcard'},
  ]

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <UserAddress address={user.address} title='Endereço de entrega' />
      )}

      {!cart.items.length && (
        <div className={styles.emptyCart}>
          <p>Sem itens no carrinho</p>
          <p>
            Escolhe um bom restaurante e comece a adicionar pratos deliciosos
            para degustar hoje mesmo em pouquissimo tempo!
          </p>
        </div>
      )}

      {cart.restaurant.current && (
        <AddressRestaurant {...cart.restaurant.current} />
      )}

      <div className={styles.cardContainer}>
        {cart.items.map(item => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
      <div className={styles.purchaseInfo}>
        <p>Frete {formatPrice(cart.restaurant.current.shipping)}</p>
        <div>
          <p>Subtotal</p>
          <p>{formatPrice(cart.sum())}</p>
        </div>
        <CategoryTitle title='Forma de pagamento' />
        {/* <RadioButton {...{paymentMethod, setPaymentMethod}}></RadioButton> */}
        <RadioGroup
          name='paymentMethod'
          value={paymentMethod}
          change={setPaymentMethod}
          options={paymentOptions}
        />
        <Button
          label='Confirmar'
          action={purchase}
          disabled={!cart.items.length}
          loading={loadingOrder}
        />
      </div>
      {errorOrder && <Alert {...errorOrder} setIsError={setErrorOrder} />}
      {order?.totalPrice && (
        <Alert success message='Solicitação cadastrada, Só aguardar!' />
      )}
    </div>
  )
}

export default Cart
