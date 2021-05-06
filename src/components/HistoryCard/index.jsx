import styles from "./styles.module.scss";

const HistoryCard = ({ totalPrice, restaurantName, createdAt, expiresAt }) => {
  return (
    restaurantName && (
      <div className={styles.container}>
        <h3 className={styles.title}>Restaurante</h3>
        <time className={styles.date}>23 Outubro 2020</time>
        <p className={styles.value}>SUBTOTAL R$ 67,00</p>
      </div>
    )
  );
};

export default HistoryCard;
