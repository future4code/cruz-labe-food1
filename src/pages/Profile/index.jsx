import styles from "./styles.module.scss";
import BottomTabNav from "components/BottomTabNav";
import Header from "components/Header";
import { useEffect, useState } from "react";
import api from "services/api";
import UserInfo from "components/UserInfo";
import UserAdress from "components/UserAdress";
import CategoryTitle from "components/CategoryTitle";
import HistoryCard from "components/HistoryCard";
// import { useRequest } from "./hooks";

const Profile = () => {
  const [user, setUser] = useState({});
  const [history, setHistory] = useState([]);
  // const history = useRequest(api.getHistory);

  useEffect(() => {
    const getData = async () => {
      const r = await api.getProfile();
      console.log(r);
      if (r?.message) {
        return console.log("Falhou", r.message);
      }
      setUser(r.user);
    };
    getData();
  }, []);

  useEffect(() => {
    console.log("history: ", api.getHistory());
  }, []);

  return (
    <div className={styles.container}>
      <Header title="Meu perfil" />
      <UserInfo {...user} />
      <UserAdress address={user.address} title="Endereço cadastrado" />
      <CategoryTitle title="Histórico de pedidos" />
      {history.map((order) => (
        <HistoryCard {...order} />
      ))}

      <BottomTabNav />
    </div>
  );
};

export default Profile;
