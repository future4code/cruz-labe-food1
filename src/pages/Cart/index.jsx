import styles from './styles.module.scss'
import BottomTabNav from "components/BottomTabNav";

const Cart = () => {
  return (
    <div>
      <h1 className={styles.title}>Cart page</h1>
      <BottomTabNav />
    </div>
  )
}

export default Cart