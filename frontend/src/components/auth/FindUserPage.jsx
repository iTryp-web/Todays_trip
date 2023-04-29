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
import { resetPassWordDB } from "../../service/memberLogic";

const FindUserPage = () => {
  const status = useSelector((store) => store.toastStatus.status);
  console.log(status);
  const dispatch = useDispatch();
  const [findInput, setFindInput] = useState("");

  const handleFocus = () => {};
  const handleBlur = () => {};

  const ResetPw = async (e) => {
    e.preventDefault();
    const userEmail = findInput;

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
      console.log(resetResponse);
      console.log("임시 비밀번호로 변경 성공");
    } catch (error) {
      console.log(error);
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
              <button>확인</button>
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
