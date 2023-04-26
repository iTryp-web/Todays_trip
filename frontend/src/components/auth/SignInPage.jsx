import {
  LoginBlock,
  LoginFormBlock,
  LogoBlock,
  SignDiv,
  SocialBlock,
} from "../../styles/SignStyle";
import { Logo } from "../../styles/FormStyle";
import { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
import { checkInfoDB, sessionListDB } from "../../service/memberLogic";
import { loginGoogle, onAuthChange } from "../../service/authLogic";
import { KAKAO_AUTH_URL } from "./KakaoLogin";

const GlobalStyle = createGlobalStyle`
  body{
    background-color : #fafafa
  }
`;

const SignInPage = ({ authLogic }) => {
  const navigate = useNavigate();
  const ssg = sessionStorage;
  const auth = authLogic.getUserAuth();
  //구글 로그인(정보 없으면 회원가입)
  const loginG = async () => {
    try {
      console.log("로그인시도");
      const user = await onAuthChange(auth);
      console.log(user);
      //사용자가 있으면 - userId가 있다
      //구글 로그인으로 사용자 정보를 가지고 있을 때
      //user정보가 있으면 sessionStorage에 담는다 - email
      if (user) {
        console.log("user정보가 있을때");
        //세션스토리지에 이메일 주소가 등록됨 - 단 구글로그인이 되어있는 상태일때만
        //ssg.setItem('email',user.email)
        const res = await sessionListDB({ user_id: user.uid });
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
        }
        //오라클서버의 회원집합에 uid가 존재하지 않으면
        const result = await loginGoogle(
          authLogic.getUserAuth(),
          authLogic.getGoogleAuthProvider()
        );
        let params;
        params = {
          user_id: result.uid,
        };
        let response = { data: 0 };
        response = await checkInfoDB(params);
        const data = JSON.stringify(response.data);
        const jsonDoc = JSON.parse(data);
        if (!jsonDoc) {
          navigate("/auth/SNSSignUp");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.log("구글 로그인 오류입니다");
    }

    const loginK = () => {
      window.location.href = KAKAO_AUTH_URL;
    };
    return (
      <>
        <GlobalStyle />
        <SignDiv>
          <LoginFormBlock>
            <LogoBlock to="/">
              <Logo>오늘의 여행</Logo>
            </LogoBlock>
            <LoginBlock>
              <input className="email" type="text" placeholder="이메일" />
              <input
                className="password"
                type="password"
                placeholder="비밀번호"
              />
              <button>로그인</button>
              <div className="smallButton">
                <span onClick={() => navigate("/findEmail")}>
                  비밀번호 재설정
                </span>
                <span onClick={() => navigate("/signup")}>회원가입</span>
              </div>
            </LoginBlock>
            <SocialBlock>
              <span>SNS계정으로 간편 로그인/회원가입</span>
              <div className="socialButton">
                <img
                  src="images/google-icon.png"
                  alt="구글"
                  onClick={() => {
                    loginG();
                  }}
                />
                <img
                  src="images/kakao-icon.png"
                  alt="네이버"
                  onClick={() => {
                    loginK();
                  }}
                />
                <img src="images/naver-icon.png" alt="카카오" />
              </div>
            </SocialBlock>
            <p>로그인에 문제가 있으신가요?</p>
          </LoginFormBlock>
        </SignDiv>
      </>
    );
  };
};
export default SignInPage;
