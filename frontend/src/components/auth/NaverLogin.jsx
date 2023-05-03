import axios from "axios";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { checkInfoDB, sessionListDB } from "../../service/memberLogic";

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
  process.env.REACT_APP_NAVER_CLIENT_ID
}&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}&state=${Math.random()
  .toString(36)
  .substr(3, 14)}`;

const NaverLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");

  const getToken = async (code) => {
    try {
      const response = await axios({
        method: "POST",
        url: `/oauth2.0/token`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: `grant_type=authorization_code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&client_secret=${process.env.REACT_APP_NAVER_CLIENT_SECRET}&code=${code}&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}`,
      });
      const token = response.data.access_token;
      console.log(token);
      getUserInfo(token);
    } catch (error) {
      console.error("Failed to get access token:", error);
    }
  };
  const getUserInfo = async (token) => {
    const naverUser = await axios({
      method: "GET",
      url: "/v1/nid/me",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const naverData = naverUser.data;
    console.log(naverUser);
    console.log(naverUser.data);

    try {
      const ssg = sessionStorage;
      let params;
      params = {
        user_id: naverUser.data.response.id,
      };
      let response = { data: 0 };
      response = await checkInfoDB(params);
      const data = JSON.stringify(response.data);
      const jsonDoc = JSON.parse(data);
      if (!jsonDoc) {
        navigate("/auth/SNSSignUp", { state: { naverData: naverData } });
      } else {
        const res = await sessionListDB({ user_id: naverUser.data.response.id });
        console.log(res.data);
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
          ssg.setItem("user_provider",jsonDoc[0].PROVIDER);
          navigate("/");
        }
      }
    } catch (error) {
      console.log("네이버 로그인 오류입니다.");
    }
  };

  if (code) {
    getToken(code);
  }

  return (
    <>
      <p>네이버 로그인</p>
    </>
  );
};

export default NaverLogin;
