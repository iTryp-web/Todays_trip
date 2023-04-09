import React from "react";
import {
  EmailDiv,
  EmailInput,
  LoginFormBlock,
  SignDiv,
  SocialBlock,
} from "../../styles/SignStyle";

const SignUpPage = () => {
  return (
    <>
      <SignDiv>
        <LoginFormBlock>
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
          <EmailDiv>
            <EmailInput id="email" type="text" placeholder="이메일" />@
            <select name="email">
              <option value="">선택해주세요</option>
              <option value="select">선택해주세요</option>
              <option value="select">선택해주세요</option>
              <option value="select">선택해주세요</option>
              <option value="select">선택해주세요</option>
            </select>
          </EmailDiv>
        </LoginFormBlock>
      </SignDiv>
    </>
  );
};

export default SignUpPage;
