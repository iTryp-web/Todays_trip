import React from "react";
import {
  LoginFormBlock,
  SignDiv,
  SocialBlock,
  SocialJoinBlock,
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
          <input classname="email" type="text" placeholder="이메일" />
        </LoginFormBlock>
      </SignDiv>
    </>
  );
};

export default SignUpPage;
