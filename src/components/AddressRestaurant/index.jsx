import {useGo} from 'hooks'
import styles from './styles.module.scss'

const AddressRestaurant = ({id, name, address, deliveryTime}) => {
  const go = useGo()

  return (
    <div className={styles.container} onClick={() => go.restaurant(id)}>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.address}>{address}</p>
      <p className={styles.time}>
        {`${deliveryTime - 10} - ${deliveryTime} min`}
      </p>
    </div>
  )

  // return (
  //     <div>
  //         ENDEREÇO DO RESTAURANTE2
  //     </div>

  // )
}

export default AddressRestaurant
