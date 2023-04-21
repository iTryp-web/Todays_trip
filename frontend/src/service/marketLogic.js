import axios from "axios";
/*마켓글 리스트 */
export const marketListDB = (market) => {
  console.log(market)
  return new Promise((resolve, reject) => {
    try {
      // axios 비동기요청 처리(ajax - fetch[브라우저, 클라이언트사이드] - axios[NodeJS-오라클 서버연동, 서버사이드])
      const response = axios({ // 3000번 서버에서 8000서버로 요청함 - 네트워크(다른서버-CORS이슈, 지연발생)
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "market/marketList",
        params: market, // 스프링 부트와 연동시 @RequestParam 사용
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
/* 마켓글 상세보기*/
export const marketDetailDB = (market) => {
  console.log(market)
  return new Promise((resolve, reject) => {
    try {
      // axios 비동기요청 처리(ajax - fetch[브라우저, 클라이언트사이드] - axios[NodeJS-오라클 서버연동, 서버사이드])
      const response = axios({ // 3000번 서버에서 8000서버로 요청함 - 네트워크(다른서버-CORS이슈, 지연발생)
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "market/marketDetail",
        params: market, // 스프링 부트와 연동시 @RequestParam 사용
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};


/* 판매글 글쓰기 */
export const marketInsertDB = (market) => {
  console.log(market)
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "market/marketInsert",
        data: market,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
/* 판매글 수정 */
export const marketUpdateDB = (market) => {
  console.log(market)
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "market/marketUpdate",
        data: market,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

// 판매글 이미지 추가
export const mUploadImageDB = (file) => {
  console.log(file);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "market/uploadImage",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        processData: false,
        contentType: false,
        data: file, // 스프링 부트와 연동시 @RequestBody 사용
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
/* 판매글 삭제 */
export const marketDeleteDB = (market) => {
  console.log(market)
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "market/marketDelete",
        data: market,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/*리뷰 리스트 */
export const reviewListDB = (market) => {
  return new Promise((resolve, reject) => {
    try {
      // axios 비동기요청 처리(ajax - fetch[브라우저, 클라이언트사이드] - axios[NodeJS-오라클 서버연동, 서버사이드])
      const response = axios({ // 3000번 서버에서 8000서버로 요청함 - 네트워크(다른서버-CORS이슈, 지연발생)
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "market/reviewList",
        params: market, // 스프링 부트와 연동시 @RequestParam 사용
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/* 리뷰쓰기 */
export const reviewInsertDB = (market) => {
  console.log(market)
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "market/reviewInsert",
        data: market,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/* 리뷰 삭제 */
export const reviewDeleteDB = (market) => {
  console.log(market)
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "market/reviewDelete",
        data: market,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/* 리뷰좋아요*/
export const likeDB = (market) => {
  console.log(market)
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "market/reviewLike",
        data: market,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
/* 좋아요 취소 */
export const dislikeDB = (market) => {
  console.log(market)
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "market/reviewDislike",
        data: market,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/* 신고 */
export const reportDB = (market) => {
  console.log(market)
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "market/mReport",
        data: market,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/*문의글 리스트 */
export const qnaListDB = (market) => {
  console.log(market)
  return new Promise((resolve, reject) => {
    try {
      // axios 비동기요청 처리(ajax - fetch[브라우저, 클라이언트사이드] - axios[NodeJS-오라클 서버연동, 서버사이드])
      const response = axios({ // 3000번 서버에서 8000서버로 요청함 - 네트워크(다른서버-CORS이슈, 지연발생)
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "market/qnaList",
        params: market, // 스프링 부트와 연동시 @RequestParam 사용
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/* 문의글쓰기 */
export const qnaInsertDB = (market) => {
  console.log(market)
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "market/qnaInsert",
        data: market,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/* 문의글 삭제 */
export const qnaDeleteDB = (market) => {
  console.log(market)
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "market/qnaDelete",
        data: market,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};