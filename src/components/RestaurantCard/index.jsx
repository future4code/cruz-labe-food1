import {useGo} from 'hooks'
import styles from './styles.module.scss'
import cx from 'classnames'

const RestaurantCard = ({
  id,
  name,
  logoUrl,
  deliveryTime,
  shipping,
  category,
  address,
  showDetail,
}) => {
  const go = useGo()
  const containerClass = cx(styles.container, {[styles.details]: showDetail})

  return (
    <div className={containerClass} onClick={() => go.restaurant(id)}>
      {name ? (
        <>
          <img
            src={logoUrl}
            alt={`Foto do restaurante ${name}`}
            className={styles.image}
          />
          <div className={styles.infoContainer}>
            <h3 className={styles.title}>{name}</h3>
            {showDetail && <p className={styles.category}>{category}</p>}
            <div className={styles.values}>
              <p>{`${deliveryTime - 10} - ${deliveryTime} min`}</p>
              <p>Frete R$ {shipping.toFixed(2)}</p>
            </div>
            {showDetail && <p className={styles.address}>{address}</p>}
          </div>
        </>
      ) : (
        'Loading...'
      )}
    </div>
  )
}

export default RestaurantCard
