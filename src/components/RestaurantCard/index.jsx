const RestaurantCard = ({ image, name, deliveryTime, deliveryPrice }) => {
  return (
    <div className={styles.container}>
      <img
        src={image}
        alt={`Foto do restaurante ${name}`}
        className={styles.image}
      />
      <div className={styles.infoContainer}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.textLeft}>{deliveryTime}</p>
        <p className={styles.textRight}>{deliveryPrice}</p>
      </div>
    </div>
  );
};
