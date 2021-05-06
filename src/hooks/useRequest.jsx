import axios from 'axios'
import {apiURL} from 'constants/project'
// import { useEffect, useState } from "react";

const baseURL = apiURL

const rappi4 = axios.create({baseURL})

// REQUEST DATA
// export const useRequestData = (path, initialState) => {
//   const [data, setData] = useState(initialState);
//   const user = JSON.parse(localStorage.getItem("user"));

//   const getData = () => {
//     axios
//       .get(`${baseURL}${path}`, {
//         headers: {
//           auth: user.token,
//         },
//       })
//       .then((response) => {
//         console.log(response.data);
//         setData(response.data)
//       })
//       .catch((err) => console.log(err.message))
//   }

//   useEffect(() => {
//    getData()
//   }, []);

//   return [data, getData];
// };
