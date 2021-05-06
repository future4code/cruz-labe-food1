import styles from "./styles.module.scss";
import Header from "components/Header";
import BottomTabNav from "components/BottomTabNav";

const NotFound = () => {
  return (
    <div>
      <Header label="Ops..." />
      <h1 className={styles.title}>
        Não achei o que você queria, tente outra coisa amiguin
      </h1>
      <BottomTabNav />
    </div>
  );
};

export default NotFound;
