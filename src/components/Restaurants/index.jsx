import styles from "./styles.module.scss";
import RestaurantCard from "components/RestaurantCard";

const Restaurants = ({ restaurants }) => {
  console.log("rest", restaurants);
  return (
    <div className={styles.container}>
      {restaurants.map((r) => (
        <RestaurantCard key={r.id} {...r} />
      ))}
    </div>
  );
};

export default Restaurants;
