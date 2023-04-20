import axios from "axios";

/* 커뮤니티 전체 목록 조회 */
export const boardListDB = (support) => {
  console.log(support)
  return new Promise((resolve, reject) => {
    try {
      // axios 비동기요청 처리(ajax - fetch[브라우저, 클라이언트사이드] - axios[NodeJS-오라클 서버연동, 서버사이드])
      const response = axios({ // 3000번 서버에서 8000서버로 요청함 - 네트워크(다른서버-CORS이슈, 지연발생)
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "board/boardList",
        params: support, // 스프링 부트와 연동시 @RequestParam 사용
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

/* 커뮤니티 글 수정 */
export const boardUpdateDB = (board) => {
  console.log(board)
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "board/boardUpdate",
        data: board,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

// 커뮤니티 이미지 추가
export const uploadImageDB = (file) => {
  console.log(file);
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "board/uploadImage",
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

/* 댓글 수정 */
export const replyUpdateDB = (board) => {
  console.log(board)
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "board/replyUpdate",
        data: board,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
