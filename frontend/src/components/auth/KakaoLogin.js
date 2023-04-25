import axios from "axios";
import React from "react";
import { useEffect } from "react";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;

const KakaoLogin = () => {
  let kcode = new URL(window.location.href).searchParams.get("code");
  console.log(kcode);
  const getToken = async (kcode) => {
    console.log("getToken실행");
    const grant_type = "authorization_code";

    const res = await axios.post(
      `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&code=${kcode}`,
      {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    );
    const token = res.data.access_token;
    console.log(token);
    getKakaoUserData(token);
  };

  const getKakaoUserData = async (token) => {
    const kakaoUser = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(kakaoUser.data);
    return await kakaoUser.data;
  };
  

  if (kcode) {
    getToken(kcode);
  }

  return (
    <>
      <p>카카오로그인</p>
    </>
  );
};

export default KakaoLogin;
