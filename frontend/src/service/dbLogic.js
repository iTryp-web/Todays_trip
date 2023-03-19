import axios from "axios";

export const testDB = (test) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "test/testList",
        params: test,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};