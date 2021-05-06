import styles from './styles.module.scss'
import BottomTabNav from "components/BottomTabNav";

const Cart = () => {

  const { items, add, remove, itemsQuantity, setItemsQuantity } = useContext(CartContext);



  return (
    <div>
      <h1 className={styles.title}>Cart page</h1>
        {items.map((item) => {
          <div className={cardFood}
            // props={item.id}
          >
            CARD DE COMIDA
          </div>
        })}
      <BottomTabNav />
    </div>
  )
}

export default Cart