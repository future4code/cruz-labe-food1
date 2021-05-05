import classNames from "classnames";
import styles from "./styles.module.scss";
import { useHistory } from "react-router-dom";
import useGo from "hooks/useGo";

// const classes = classNames(styles.icon, styles.home);

const BottomTabNav = () => {
  const go = useGo();

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <button className={styles.home} onClick={go.home}></button>
        <button className={styles.cart} onClick={go.cart}></button>
        <button className={styles.avatar} onClick={go.profile}></button>
      </div>
    </div>
  );
};

export default BottomTabNav;
