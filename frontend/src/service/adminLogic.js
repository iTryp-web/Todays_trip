import axios from "axios";

/* 어드민 새로운 문의, 신고, 신청 조회 */
export const adminOverviewDB = () => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "admin/overview",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
