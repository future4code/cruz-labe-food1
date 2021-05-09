import {useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import * as api from 'services/api'
import styles from './styles.module.scss'
import ItemCard from 'components/ItemCard'
import Category from 'components/CategoryTitle'
import RestaurantCard from 'components/RestaurantCard'
import Header from 'components/Header'
import BottomTabNav from 'components/BottomTabNav'
import {CartContext} from 'contexts/cart'
const RestaurantDetail = props => {
  const {id} = useParams()
  const [restaurant, setRestaurant] = useState({})
  const cart = useContext(CartContext)

  useEffect(() => {
    const getData = async () => {
      const r = await api.getRestaurantDetail(id)
      console.log(r)
      if (r.message) return console.log('Falhou: ', r.message)

      setRestaurant(r.restaurant)
    }
    getData()
  }, [id])

  useEffect(() => {
    restaurant?.name && cart.setRestaurant(restaurant)
  }, [cart, restaurant])

  const productsByCategory = products => {
    if (!products?.length) return
    console.log('products: ', products)
    const categorys = products.reduce((category, product) => {
      if (!category.includes(product.category)) {
        return [...category, product.category]
      }
      return category
    }, [])

    const sum = categorys.map(i => ({
      category: i,
      products: products.filter(j => j.category === i),
    }))

    return sum.map(item => (
      <div>
        <Category title={item.category} />
        <ul>
          {item.products.map(p => (
            <ItemCard {...p} />
          ))}
        </ul>
      </div>
    ))
  }

  return (
    <div className={styles.container}>
      <Header title='Restaurante' showArrow />
      <RestaurantCard {...restaurant} />
      {productsByCategory(restaurant.products)}
    </div>
  )
}

export default RestaurantDetail
