import { useHistory } from "react-router-dom";

const useGo = () => {
  const history = useHistory();

  const home = () => history.push("/");
  const login = () => history.push("/login");
  const signup = () => history.push("/signup");
  const adress = () => history.push("adress");
  const profile = () => history.push("/profile");
  const editInfo = () => history.push("/editinfo");
  const editAdress = () => history.push("/editadress");
  const restaurant = (id) => history.push({ pathname: `restaurant/${id}` });
  const cart = () => history.push("/cart");
  const back = () => history.goBack();

  return {
    home,
    login,
    signup,
    adress,
    profile,
    editInfo,
    editAdress,
    restaurant,
    cart,
    back,
  };
};

export default useGo;
