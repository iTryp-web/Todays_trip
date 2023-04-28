import React from "react";
import Header from "../include/Header";
import { ConfirmButton, Div, EmailInputBox, FindEmailBlock, IfBox } from "../../styles/SignStyle";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../include/Toast";

const FindUserPage = () => {
  const status = useSelector(store => store.toastStatus.status)
  console.log(status)
  const dispatch = useDispatch()
  const [findInput, setFindInput] = useState("");

  const handleFocus = () => {};
  const handleBlur = () => {};

  const handleInputChange = (e) => {
   setFindInput(e.target.value)
   const myEmail = e.target.value

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
        <ConfirmButton>
         이메일로 인증코드 받기
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
