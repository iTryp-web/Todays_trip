import React from "react";
import Header from "../include/Header";
import {
  ConfirmButton,
  Div,
  EmailInputBox,
  FindEmailBlock,
  IfBox,
} from "../../styles/SignStyle";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../include/Toast";
import axios from "axios";
import { setToastMsg } from "../../redux/toastStatus/action";
import { findUserDB, resetPassWordDB } from "../../service/memberLogic";

const FindUserPage = () => {
  const status = useSelector((store) => store.toastStatus.status);
  console.log(status);
  const dispatch = useDispatch();
  const [findInput, setFindInput] = useState("");
  const [tdtUser, setTdtUser] = useState("");
  const handleFocus = () => {};
  const handleBlur = () => {};

  const findUser = async (e) => {
    e.preventDefault(e);
    const userEmail = findInput;
    const findData = { user_email: userEmail };
    const user = await findUserDB(findData);
    console.log(user.data);

    let isGoogleUser = false;
    let isNaverUser = false;
    let isKakaoUser = false;
    let isTDTUser = false;

    for (let i = 0; i < user.data.length; i++) {
      const provider = user.data[i].PROVIDER;
      if (provider === "Google") {
        isGoogleUser = true;
      } else if (provider === "Naver") {
        isNaverUser = true;
      } else if (provider === "Kakao") {
        isKakaoUser = true;
      } else if (provider === "TDT") {
        isTDTUser = true;
      }
    }
    if (findInput === "") {
      dispatch(setToastMsg("이메일을 입력해주세요."));
    } else if (user.data === 0) {
      dispatch(setToastMsg("가입되지 않은 회원입니다."));
    } else if (isTDTUser) {
      setTdtUser(userEmail);
      dispatch(setToastMsg("이메일로 임시비밀번호 받기 버튼을 눌러주세요"));
    } else if (isGoogleUser && isNaverUser) {
      dispatch(
        setToastMsg(
          "구글과 네이버로 회원가입된 계정입니다. 구글 또는 네이버 로그인 해주세요."
        )
      );
    } else if (isGoogleUser && isKakaoUser) {
      dispatch(
        setToastMsg(
          "구글과 카카오로 회원가입된 계정입니다. 구글 또는 카카오 로그인 해주세요."
        )
      );
    } else if (isNaverUser && isKakaoUser) {
      dispatch(
        setToastMsg(
          "네이버와 카카오로 회원가입된 계정입니다. 네이버 또는 카카오 로그인 해주세요."
        )
      );
    } else if (isGoogleUser && isNaverUser && isKakaoUser) {
      dispatch(
        setToastMsg(
          "구글,네이버,카카오로 회원가입된 계정입니다. 구글,네이버,카카오 중 하나로 로그인 해주세요."
        )
      );
    } else if (isGoogleUser) {
      dispatch(
        setToastMsg("구글로 회원가입된 계정입니다. 구글 로그인 해주세요.")
      );
    } else if (isNaverUser) {
      dispatch(
        setToastMsg("네이버로 회원가입된 계정입니다. 네이버 로그인 해주세요.")
      );
    } else if (isKakaoUser) {
      dispatch(
        setToastMsg("카카오로 회원가입된 계정입니다. 카카오 로그인 해주세요.")
      );
    }
  };

  const ResetPw = async (e) => {
    e.preventDefault();
    const userEmail = tdtUser;
    console.log(tdtUser);
    console.log(userEmail);
    if (userEmail) {
      try {
        const response = await axios.post(
          "http://localhost:8000/service/resetmail",
          { email: userEmail }
        );
        const newPw = response.data;
        console.log(newPw); // 받은 임시 비밀번호 출력
        dispatch(setToastMsg("임시 비밀번호가 발송되었습니다."));
        const data = { user_id: userEmail, user_pw: newPw };
        const resetResponse = await resetPassWordDB(data);
        console.log("임시 비밀번호로 변경 성공");
        console.log(resetResponse);
        setFindInput("");
        setTdtUser("");
      } catch (error) {
        console.log(error);
      }
    } else {
      dispatch(setToastMsg("이메일 찾기를 먼저 해주세요"));
    }
  };

  const handleInputChange = (e) => {
    setFindInput(e.target.value);
  };
  return (
    <>
      {status && <Toast />}
      <Header />
      <Div>
        <FindEmailBlock>
          <EmailInputBox>
            <p>가입한 이메일 주소를 입력해주세요</p>
            <label>
              <input
                type="text"
                value={findInput}
                placeholder="이메일"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInputChange}
              ></input>
              <button onClick={(e) => findUser(e)}>확인</button>
            </label>
            <ConfirmButton onClick={(e) => ResetPw(e)}>
              이메일로 임시비밀번호 받기
            </ConfirmButton>
            <IfBox>
              <p className="p1">회원가입 시 입력한 정보가 기억나지 않는다면?</p>
              <p className="p2">고객센터 문의하기(1544-9970)</p>
            </IfBox>
          </EmailInputBox>
        </FindEmailBlock>
      </Div>
    </>
  );
};

export default FindUserPage;
