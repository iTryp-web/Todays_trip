import axios from "axios";

/* 커뮤니티 전체 목록 조회 */
export const boardListDB = (board) => {
  console.log(board)
  return new Promise((resolve, reject) => {
    try {
      // axios 비동기요청 처리(ajax - fetch[브라우저, 클라이언트사이드] - axios[NodeJS-오라클 서버연동, 서버사이드])
      const response = axios({ // 3000번 서버에서 8000서버로 요청함 - 네트워크(다른서버-CORS이슈, 지연발생)
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "board/boardList",
        params: board, // 스프링 부트와 연동시 @RequestParam 사용
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/* 커뮤니티 상세보기 */
export const boardDetailDB = (board) => {
  console.log(board)
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "board/boardDetail",
        params: board,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/* 커뮤니티 글쓰기 */
export const boardInsertDB = (board) => {
  console.log(board)
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "board/boardInsert",
        data: board,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/* 커뮤니티 글 삭제 */
export const boardDeleteDB = (board) => {
  console.log(board)
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "board/boardDelete",
        data: board,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/* 좋아요 확인 */
export const likeOnDB = (board) => {
  console.log(board)
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "board/likeOn",
        data: board,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/* 좋아요 취소 */
export const likeOffDB = (board) => {
  console.log(board)
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "board/likeOff",
        data: board,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/* 댓글달기 */
export const replyInsertDB = (board) => {
  console.log(board)
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "board/replyInsert",
        data: board,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

/* 댓글 삭제 */
export const replyDeleteDB = (board) => {
  console.log(board)
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "board/replyDelete",
        data: board,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};