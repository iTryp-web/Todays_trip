import axios from "axios";

/* 메인페이지 전체 목록 조회 */
export const mainListDB = (main) => {
  console.log(main)
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "main/mainList",
        params: main,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};