import useGo from "hooks/useGo";
import styles from "./styles.module.scss";

const RestaurantCard = ({ id, name, logoUrl, deliveryTime, shipping }) => {
  const go = useGo();

  return (
    <div className={styles.container} onClick={() => go.restaurant(id)}>
      {name ? (
        <>
          <img
            src={logoUrl}
            alt={`Foto do restaurante ${name}`}
            className={styles.image}
          />
          <div className={styles.infoContainer}>
            <h3 className={styles.title}>{name}</h3>
            <div className={styles.values}>
              <p className={styles.textLeft}>{`${
                deliveryTime - 10
              } - ${deliveryTime} min`}</p>
              <p className={styles.textRight}>Frete R$ {shipping.toFixed(2)}</p>
            </div>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default RestaurantCard;
