import {formatTime, formatPrice} from 'utils/helpers'
import styles from './styles.module.scss'

const PurchaseProgress = order => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src='/icons/clock.svg'
        alt='imagem de um relógio'
      />
      <p className={styles.title}>Pedido em andamento</p>
      <p className={styles.name}>{order.restaurantName}</p>
      <p className={styles.value}>subtotal {formatPrice(order.totalPrice)}</p>
      <p className={styles.time}>
        {`${formatTime(order.expiresAt - 1000 * 60 * 10)} - 
        ${formatTime(order.expiresAt)}`}
      </p>
    </div>
  )
}

export default PurchaseProgress
