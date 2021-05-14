import styles from './styles.module.scss'
import {CartContext} from 'contexts/cart'
import {useContext} from 'react'
import {formatPrice} from 'utils/helpers'
import classNames from 'classnames'
import Loading from 'components/Loading'

const ItemCard = product => {
  const cart = useContext(CartContext)
  const {description, name, photoUrl, price, restaurant} = product
  return (
    <>
      {name ? (
        <div className={styles.container}>
          <img className={styles.image} src={photoUrl} alt={name} />

          <h3 className={styles.title}>{name}</h3>
          <p className={styles.desc}>{description}</p>
          <p className={styles.price}> {formatPrice(price)} </p>

          <span className={styles.minus} onClick={() => cart.remove(product)}>
            -
          </span>
          <span className={styles.amount}>{cart.amount(product)}</span>
          <span
            className={styles.plus}
            onClick={() => cart.add(product, restaurant)}
          >
            +
          </span>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default ItemCard
