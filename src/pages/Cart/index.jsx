import Header from "components/Header";
import styles from "./styles.module.scss";
import BottomTabNav from "components/BottomTabNav";
import CartContext from "contexts/cart";
import ItemCard from "components/ItemCard";
import UserAdress from "components/UserAdress";
import CategoryTitle from "components/CategoryTitle";
import { useEffect, useState } from "react";
import api from "services/api";
import { name } from "constants/project";

// const

const Cart = () => {
  // const { items, add, remove, itemsQuantity, setItemsQuantity } = useContext(CartContext);

  const [user, setUser] = useState({});

  useEffect(() => {
    const getData = async () => {
      const r = await api.getProfile();
      console.log(r);
      if (r?.message) {
        return console.log("Falhou", r.message);
      }
      setUser(r.user);
    };
    getData();
  }, []);

  return (
    <div>
      <Header title="Meu carrinho" />
      <UserAdress address={user.address} title="Endereço de entrega" />
      <AddressRestaurant className={styles.AddressRestaurant} />
      <ItemCard />
      {/* {items.map((item) => {
          <div className={cardFood}
            // props={item.id}
          >
            CARD DE COMIDA
          </div>
        })} */}

      <CategoryTitle title="Forma de pagamento" />

      <> .... Aqui vem o Radius pagto</>

      <BottomTabNav />
    </div>
  );
};

const AddressRestaurant = (props) => {
  return "ADRESS RESTAURANTE";
};

export default Cart;
