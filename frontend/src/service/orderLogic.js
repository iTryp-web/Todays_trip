import axios from "axios";

export const getOrderPage = (user) => {
  console.log("getOrderPage => " + user);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "shop/orderPage",
        params: user,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const setOrderTable = (orderData) => {
  console.log("setOrderTable => " + orderData);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "shop/orderUpdate",
        data: orderData,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const updatePaymentInfo = (paymentData) => {
  console.log("updatePaymentInfo => " + paymentData);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "shop/payment",
        data: paymentData,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
