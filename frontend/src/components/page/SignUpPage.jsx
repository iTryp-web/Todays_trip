import React, { useState } from "react";
import {
  EmailBlock,
  PasswordBlock,
  SignDiv,
  SignUpBlock,
  SocialBlock,
} from "../../styles/SignStyle";
import HeaderIcon from "../include/HeaderIcon";

const SignUpPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    if (e.target.value) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  const EmailButton = () => {
    console.log("버튼클릭");
  };
  return (
    <>
      <HeaderIcon/>
      <SignDiv>
        <SignUpBlock>
          <h3>회원가입</h3>
          <SocialBlock>
            <span>SNS계정으로 간편하게 회원가입</span>
            <div className="socialButton">
              <img src="images/google-icon.png" alt="구글" />
              <img src="images/kakao-icon.png" alt="네이버" />
              <img src="images/naver-icon.png" alt="카카오" />
            </div>
          </SocialBlock>
          <hr />
          <h5>이메일</h5>
          <EmailBlock>
            <input
              id="email"
              value={inputValue}
              onChange={handleInputChange}
              type="text"
              placeholder="&nbsp;이메일"
            />
            <span>&nbsp;@&nbsp;</span>
            <select name="email">
              <option value="">&nbsp;선택해주세요</option>
              <option value="select">선택해주세요</option>
              <option value="select">선택해주세요</option>
              <option value="select">선택해주세요</option>
              <option value="select">선택해주세요</option>
            </select>
            <button
              disabled={!isButtonActive}
              onClick={EmailButton}
              style={{
                backgroundColor: inputValue ? "white" : "#f7f8fa",
                border: inputValue
                  ? "1px solid #4996f3"
                  : "1px solid lightgray",
                color: inputValue ? "#4996f3" : "lightgray",
              }}
            >
              이메일 인증하기
            </button>
          </EmailBlock>
          <h5>비밀번호</h5>
          <PasswordBlock>


          </PasswordBlock>
        </SignUpBlock>
      </SignDiv>
    </>
  );
};

export default SignUpPage;
