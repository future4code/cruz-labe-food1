import styles from './styles.module.scss'
import {CartContext} from 'contexts/cart'
import {useContext} from 'react'
import {formatPrice} from 'utils/helpers'

const ItemCard = product => {
  const cart = useContext(CartContext)
  const {description, name, photoUrl, price} = product
  return (
    <>
      {name ? (
        <div className={styles.container}>
          <img src={photoUrl} alt={name} />

          <div>
            <h4>{name}</h4>
            <p>{description}</p>
            <p> {formatPrice(price)} </p>
          </div>

          <div className={styles.buttons}>
            <button onClick={() => cart.remove(product)}>-</button>
            <div>{cart.amount(product)}</div>
            <button onClick={() => cart.add(product)}>+</button>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  )
}

export default ItemCard
