import axios from "axios";

/*내 작성글 리스트 */
export const myPageBoardDB = (user) => {
  console.log(user);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "mypage/boardList",
        data: user,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/*내 댓글 리스트 */
export const myPageRepleDB = (user) => {
  console.log(user);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "mypage/repleList",
        data: user,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/*내 리뷰 리스트 */
export const myPageReviewDB = (user) => {
  console.log(user);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "mypage/reviewList",
        data: user,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/*내 좋아요 리스트 */
export const myPagelikeDB = (user) => {
  console.log(user);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "mypage/likeList",
        data: user,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/*내 QNA 리스트 */
export const myPageQnaDB = (user) => {
  console.log(user);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "mypage/qnaList",
        data: user,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/* 주문 목록 불러오기 */
export const myOrderListDB = (user) => {
  console.log(user);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "mypage/orderList",
        data: user,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/* 주문 상세 목록 불러오기 */
export const myOrderDetailDB = (detail) => {
  console.log(detail);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "mypage/orderDetail",
        data: detail,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/* 리뷰 등록 */
export const myReviewDB = (review) => {
  console.log(review);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "mypage/reviewInsert",
        data: review,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
