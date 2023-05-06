import axios from "axios";

//주문에 필요한 정보 받아오기
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

//주문 정보 DB에 삽입
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

//결제 정보 DB에 삽입
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

//결제 실패 정보 업데이트
export const updatePayFail = (ordFailData) => {
  console.log("updatePaymentInfo => " + ordFailData);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "shop/failPayment",
        data: ordFailData,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
