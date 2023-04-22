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

/* 어드민 신고 상태 수정 */
export const adminStatusUpdateDB = (report) => {
  console.log(report)
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "admin/statusUpdate",
        data: report,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/* 어드민 회원 작성 글, 댓글 조회 */
export const adminUserDetailDB = (detail) => {
  console.log(detail);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "admin/userDetail",
        params: detail,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};


/* 어드민 탈퇴 상태 수정 */
export const adminResignUpdateDB = (resign) => {
  console.log(resign)
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "admin/resignUpdate",
        data: resign,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};