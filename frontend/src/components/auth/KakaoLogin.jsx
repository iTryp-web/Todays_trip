import axios from "axios";
import React from "react";
import { checkInfoDB } from "../../service/memberLogic";
import { useNavigate } from "react-router-dom";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;

const KakaoLogin = () => {
  const navigate = useNavigate();
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

    const kakaoData = kakaoUser.data;
    console.log(kakaoUser);
    console.log(kakaoUser.data);
    console.log(kakaoUser.data.id);
    console.log(kakaoUser.data.kakao_account.email);

    try {
      console.log("회원정보 비교");
      let params;
      params = {
        user_id: kakaoUser.data.id,
      };
      console.log(params);
      let response = { data: 0 };
      response = await checkInfoDB(params);
      console.log(response);
      const data = JSON.stringify(response.data);
      console.log(data);
      const jsonDoc = JSON.parse(data);
      console.log(jsonDoc);
      if (!jsonDoc) {
        navigate("/auth/SNSSignUp", { state:{kakaoData: kakaoData }});
      }
    } catch (error) {}
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
