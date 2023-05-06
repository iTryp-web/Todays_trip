import axios from "axios";

//회원정보 조회, 로그인
export const memberListDB = (member) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "member/memberList",
        params: member,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

//중복검사, 이메일 찾기
export const checkInfoDB = (member) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "member/checkInfo",
        params: member,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const referrerDB = (member) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "member/referrer",
        params: member,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

//세션 저장용
export const sessionListDB = (member) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "member/sessionList",
        params: member,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const findUserDB = (member) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url: process.env.REACT_APP_SPRING_IP + "member/findUser",
        params: member,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

//회원가입
export const memberInsertDB = (member) => {
  return new Promise((resolve, reject) => {
    console.log(member);
    try {
      const response = axios({
        method: "post", // @RequestBody
        url: process.env.REACT_APP_SPRING_IP + "member/memberInsert",
        data: member, // post방식 data
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

//회원 정보 수정
export const memberUpdateDB = (member) => {
  return new Promise((resolve, reject) => {
    console.log(member);
    try {
      const response = axios({
        method: "post", // @RequestBody
        url: process.env.REACT_APP_SPRING_IP + "member/memberUpdate",
        data: member, // post방식 data
      });
      resolve(response); // 요청 처리 성공했을 때
    } catch (error) {
      reject(error); // 요청 처리 실패했을 때
    }
  });
};

//임시 비밀번호
export const resetPassWordDB = (member) => {
  return new Promise((resolve, reject) => {
    console.log(member);
    try {
      const response = axios({
        method: "post", // @RequestBody
        url: process.env.REACT_APP_SPRING_IP + "member/resetPassWord",
        data: member, // post방식 data
      });
      resolve(response); // 요청 처리 성공했을 때
    } catch (error) {
      reject(error); // 요청 처리 실패했을 때
    }
  });
};

//회원 탈퇴
export const memberDeleteDB = (member) => {
  return new Promise((resolve, reject) => {
    console.log(member);
    try {
      const response = axios({
        method: "post",
        url: process.env.REACT_APP_SPRING_IP + "member/memberDelete",
        data: member,
      });
      resolve(response); // 요청 처리 성공했을 때
    } catch (error) {
      reject(error); // 요청 처리 실패했을 때
    }
  });
};


