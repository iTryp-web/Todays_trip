import axios from "axios";

export const couponInsertDB = (member) => {
  return new Promise((resolve, reject) => {
    console.log(member);
    try {
      const response = axios({
        method: "post", // @RequestBody
        url: process.env.REACT_APP_SPRING_IP + "coupon/couponInsert",
        data: member, // post방식 data
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
export const referrerCouponInsertDB = (member) => {
  return new Promise((resolve, reject) => {
    console.log(member);
    try {
      const response = axios({
        method: "post", // @RequestBody
        url: process.env.REACT_APP_SPRING_IP + "coupon/referrerCouponInsert",
        data: member, // post방식 data
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
