import axios from "axios";
import React from "react";
import { checkInfoDB, sessionListDB } from "../../service/memberLogic";
import { useNavigate } from "react-router-dom";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
export const KAKAO_AUTH_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${process.env.REACT_APP_KAKAO_API_KEY}&logout_redirect_uri=${process.env.REACT_APP_KAKAO_LOGOUT_REDIRECT_URI}`;

const KakaoLogin = () => {
  const navigate = useNavigate();
  //카카오 코드 얻기
  let kcode = new URL(window.location.href).searchParams.get("code");
  //카카오 토큰 얻기
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
      const ssg = sessionStorage;
      let params;
      params = {
        user_id: kakaoUser.data.id,
      };
      let response = { data: 0 };
      response = await checkInfoDB(params);
      const data = JSON.stringify(response.data);
      const jsonDoc = JSON.parse(data);
      if (!jsonDoc) {
        navigate("/auth/SNSSignUp", { state: { kakaoData: kakaoData } });
      } else {
        const res = await sessionListDB({ user_id: kakaoUser.data.id });
        //오라클서버의 회원집합에 uid가 존재하면 - 세션 스토리지에 값을 담자
        if (res.data !== 0) {
          //스프링 부트 - RestMemberController - memberList에서 넘어오는 정보
          const temp = JSON.stringify(res.data);
          const jsonDoc = JSON.parse(temp);
          ssg.setItem("user_name", jsonDoc[0].USER_NAME);
          ssg.setItem("user_nickname", jsonDoc[0].USER_NICKNAME);
          ssg.setItem("user_email", jsonDoc[0].USER_EMAIL);
          ssg.setItem("user_id", jsonDoc[0].USER_ID);
          ssg.setItem("user_role", jsonDoc[0].ROLE);
          navigate("/");
        }
      }
    } catch (error) {
      console.log("카카오 로그인 오류입니다.");
    }
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
