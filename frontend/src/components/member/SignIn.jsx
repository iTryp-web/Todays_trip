import Header from "../include/Header";
import { LoginBlock, LoginFormBlock, LogoBlock, SocialBlock } from "../../styles/SignStyle";
import { Logo } from "../../styles/FormStyle";




const SignIn = () => {
  return (
    <>
      <Header />
      <LoginFormBlock>
        <LogoBlock to="/">
          <Logo>오늘의 여행</Logo>
        </LogoBlock>
        <LoginBlock>
          <input className="email" type="text" placeholder="이메일" />
          <input className="password" type="password" placeholder="비밀번호" />
          <button>로그인</button>
          <div className="smallButton">
            <span>비밀번호 재설정</span>
            <span>회원가입</span>
          </div>
        </LoginBlock>
        <SocialBlock>
          <span>SNS계정으로 간편 로그인/회원가입</span>
          <div className="socialButton">
          <img src="images/google-icon.png" alt="구글" />
          <img src="images/kakao-icon.png" alt="네이버" />
          <img src="images/naver-icon.png" alt="카카오" />
          </div>
        </SocialBlock>
        <p>로그인에 문제가 있으신가요?</p>
        <p>비회원 주문 조회하기</p>
      </LoginFormBlock>
    </>
  );
};

export default SignIn;
