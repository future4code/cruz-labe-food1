import {formatDate, getDate, formatPrice} from 'utils/helpers'
import styles from './styles.module.scss'

const HistoryCard = ({totalPrice, restaurantName, createdAt, expiresAt}) => {
  return (
    restaurantName && (
      <div className={styles.container}>
        <h3 className={styles.title}>{restaurantName}</h3>
        <time className={styles.date} dateTime={getDate(createdAt)}>
          {formatDate(createdAt)}
        </time>
        <p className={styles.value}>SUBTOTAL {formatPrice(totalPrice)}</p>
      </div>
    )
  )
}

export default HistoryCard
