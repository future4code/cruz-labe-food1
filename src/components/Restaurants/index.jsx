import RestaurantCard from 'components/RestaurantCard'
import styles from './styles.module.scss'

const Restaurants = ({list, isLoading}) => (
  <div className={styles.container}>
    {list.map(r => (
      <RestaurantCard key={r.id} {...r} />
    ))}
  </div>
)

export default Restaurants
