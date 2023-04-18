import axios from "axios";

export const getOrderPage = (user_id) => {
  console.log("getOrderPage => " + user_id);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "shop/orderPage",
        params: user_id,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
