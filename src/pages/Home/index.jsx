import Header from "components/Header";
import styles from "./styles.module.scss";
import { name } from "constants/project";
import Input from "components/Input";
import BottomTabNav from "components/BottomTabNav";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header title={name} showArrow showLogo />

      <Input
        type={"search"}
        id={"search"}
        value={""}
        name={""}
        onChange={""}
        placeholder={"pesquisa"}
        img="/icons/search.svg"
      />

      <BottomTabNav />
    </div>
  );
};

export default Home;
