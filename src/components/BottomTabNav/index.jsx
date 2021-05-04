import classNames from "classnames";
import styles from "./styles.module.scss";

// const classes = classNames(styles.icon, styles.home);

const BottomTabNav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <a className={styles.home} href="#"></a>
        <a className={styles.cart} href="#"></a>
        <a className={styles.avatar} href="#"></a>
      </div>
    </div>
  );
};

export default BottomTabNav;
