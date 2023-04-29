import axios from "axios";

/*내 작성글 리스트 */
export const myPageBoardDB = (user_info) => {
  console.log(user_info);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "mypage/boardList",
        data: user_info,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/*내 댓글 리스트 */
export const myPageRepleDB = (user_info) => {
  console.log(user_info);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "mypage/repleList",
        data: user_info,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/*내 리뷰 리스트 */
export const myPageReviewDB = (user_info) => {
  console.log(user_info);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "mypage/reviewList",
        data: user_info,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/*내 좋아요 리스트 */
export const myPagelikeDB = (user_info) => {
  console.log(user_info);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "mypage/likeList",
        data: user_info,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/*내 QNA 리스트 */
export const myPageQNADB = (user_info) => {
  console.log(user_info);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "mypage/qnaList",
        data: user_info,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
