import {CartContext} from 'contexts/cart'
import {useContext, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useRequestData} from 'hooks'
import * as api from 'services/api'
import Header from 'components/Header'
import BottomTabNav from 'components/BottomTabNav'
import ItemCard from 'components/ItemCard'
import UserAdress from 'components/UserAdress'
import CategoryTitle from 'components/CategoryTitle'
import styles from './styles.module.scss'
import { ThemeContext } from 'contexts/theme'
import { useEffect } from 'react'
import RadioButton from 'components/RadioButton'
import Button from 'components/Button'
import AddressRestaurant from 'components/AddressRestaurant'
import Category from 'components/CategoryTitle'
import RestaurantCard from 'components/RestaurantCard'


// const

const Cart = props => {
  const {id} = useParams()
  const [restaurant, setRestaurant] = useState({})

  console.log(props, id)
  console.log('AQUI', restaurant)

  // useEffect(() => {
  //   const getData = async () => {
  //     const r = await api.getRestaurantDetail(id)
  //     console.log(r)
  //     if (r.message) return console.log('Falhou: ', r.message)

  //     setRestaurant(r.restaurant)
  //   }
  //   getData()
  // }, [id])

  const cart = useContext(CartContext)
  const theme = useContext(ThemeContext)

  const [user, isLoading, isError] = useRequestData(
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
        <UserAdress address={user.address} title='Endereço de entrega' />
      )}

      <AddressRestaurant  {...restaurant} />
      {/* <AddressRestaurant></AddressRestaurant> */}
      {/* <AddressRestaurant  /> */}
      {/* <RestaurantCard {...restaurant} /> */}

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

// const AddressRestaurant = props => {
//   return 'ADRESS RESTAURANTE'
// }

export default Cart
