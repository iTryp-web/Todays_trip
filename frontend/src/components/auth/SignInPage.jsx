import { LoginBlock, LoginFormBlock, LogoBlock, SignDiv, SocialBlock } from "../../styles/SignStyle";
import { Logo } from "../../styles/FormStyle";
import { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
import { checkInfoDB } from "../../service/memberLogic";
import { loginGoogle } from "../../service/authLogic";

const GlobalStyle = createGlobalStyle`
  body{
    background-color : #fafafa
  }
`


const SignIn = ({authLogic}) => {
  const navigate = useNavigate()
  const loginG = async() =>{
    //구글 로그인
    try {
      console.log('로그인시도')
      const result = await loginGoogle(authLogic.getUserAuth(),authLogic.getGoogleAuthProvider())
      window.sessionStorage.setItem('userId',result.uid)
      let params;
      params = {
        user_id : result.uid
      }
      let response = {data : 0};
      response = await checkInfoDB(params);
      const data = JSON.stringify(response.data);
      const jsonDoc = JSON.parse(data);
      if(!jsonDoc){
        navigate("/auth/GoogleSignUp")
      }else{
        navigate("/")
        window.location.reload()
      }
   } catch (error) {
      console.log("로그인 오류입니다")
   }
  }
  return (
    <>
    <GlobalStyle/ >
      <SignDiv>
      <LoginFormBlock>
        <LogoBlock to="/">
          <Logo>오늘의 여행</Logo>
        </LogoBlock>
        <LoginBlock>
          <input className="email" type="text" placeholder="이메일" />
          <input className="password" type="password" placeholder="비밀번호" />
          <button>로그인</button>
          <div className="smallButton">
            <span onClick={()=>navigate("/findEmail")}>비밀번호 재설정</span>
            <span onClick={()=>navigate("/signup")}>회원가입</span>
          </div>
        </LoginBlock>
        <SocialBlock>
          <span>SNS계정으로 간편 로그인/회원가입</span>
          <div className="socialButton">
          <img src="images/google-icon.png" alt="구글" onClick={()=>{loginG();}}/>
          <img src="images/kakao-icon.png" alt="네이버" />
          <img src="images/naver-icon.png" alt="카카오" />
          </div>
        </SocialBlock>
        <p>로그인에 문제가 있으신가요?</p>
      </LoginFormBlock>
      </SignDiv>
    </>
  );
};

export default SignIn;
