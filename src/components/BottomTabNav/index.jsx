import classNames from "classnames";
import styles from "./styles.module.scss";
// const classes = classNames(styles.icon, styles.home);
import { useHistory } from 'react-router-dom'

export const goToHomePage = (history) => {
  history.push("/");
};

export const goToCartPage = (history) => {
  history.push("/cart");
};

export const goToProfilePage = (history) => {
  history.push("/profile");
};


const BottomTabNav = () => {

  const history = useHistory();


  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <button className={styles.home} onClick={() => goToHomePage(history)}></button>
        <button className={styles.cart} onClick={() => goToCartPage(history)}></button>
        <button className={styles.avatar} onClick={() => goToProfilePage(history)}></button>
      </div>
    </div>
  );
};

export default BottomTabNav;
