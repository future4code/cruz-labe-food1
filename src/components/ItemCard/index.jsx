import styles from './styles.module.scss'
import {CartContext} from 'contexts/cart'
import {useContext} from 'react'

const ItemCard = product => {
  const cart = useContext(CartContext)
  // cart.items
  // cart.add()
  // cart.remove()
  // cart.clear()
  const {category, description, id, name, photoUrl, price} = product
  return (
    <>
      {name ? (
        <div className={styles.container}>
          <img src={photoUrl} alt={name} />

          <div>
            <h4>{name}</h4>
            <p>{description}</p>
            <p>
              R$
              {price.toFixed(2).replace('.', ',')}
            </p>
          </div>

          <div className={styles.buttons}>
            <button onClick={() => cart.remove(product)}>-</button>
            <div>{() => cart.amount(product)}</div>
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
