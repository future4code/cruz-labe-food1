import styles from "./styles.module.scss";
import BottomTabNav from "components/BottomTabNav";
import Header from "components/Header";

const Profile = ({ user }) => {
  return (
    <div className={styles.container}>
      <Header title="Meu perfil" />
      <BottomTabNav />
      <p>User info</p>
      <p>User Adress</p>
      <p>User History</p>
    </div>
  );
};

export default Profile;
