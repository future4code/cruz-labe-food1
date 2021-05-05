import axios from "axios";
import { apiURL as baseURL } from "constants/project";
import interceptor from "utils/interceptor";

const api = axios.create({ baseURL });
interceptor(api);

const base = async (args) => {
  console.log("args recebidos", args);
  const token = localStorage.getItem("token");
  try {
    const r = await api({ ...args, headers: { auth: token } });
    console.log("response", r);
    r.data.token && localStorage.setItem("token", r.data.token);
    return r.data;
  } catch (e) {
    // usar errorBoundary para mostrar erros em production
    console.error("error", e);
  }
};

export const login = async (data) =>
  base({ url: "login", method: "post", data });

export const signup = async (data) =>
  base({ url: "signup", method: "post", data });

export const address = async (data) =>
  base({ url: "address", method: "put", data });

export const getProfile = async () => base({ url: "profile" });

export const getRestaurants = async () => base({ url: "restaurants" });

export default { login, signup, address, getProfile, getRestaurants };
