import axios from "axios";

export const getOrderPage = (userId) => {
  console.log(userId);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "shop/orderPage",
        data: userId,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
