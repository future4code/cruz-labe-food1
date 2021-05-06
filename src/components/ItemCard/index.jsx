import styles from "./styles.module.scss";

const ItemCard = ({ category, description, id, name, photoUrl, price }) => {
  return (
    <>
      {name ? (
        <div className={styles.container}>
          <img src={photoUrl} alt={name} />

          <div>
            <h4>{name}</h4>
            <p>{description}</p>

            <div>
              <p>
                R$
                {price.toFixed(2).replace(".", ",")}
              </p>
              <button>+</button>
            </div>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
};

export default ItemCard;
