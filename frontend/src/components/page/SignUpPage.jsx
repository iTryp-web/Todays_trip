import React, { useState } from "react";
import {
  AuthButton,
  EmailBlock,
  PWnNickBlock,
  SignDiv,
  SignUpBlock,
  SocialBlock,
} from "../../styles/SignStyle";
import HeaderIcon from "../include/HeaderIcon";

const SignUpPage = () => {
  const [idInput, setIdInput] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [pwInput, setPwInput] = useState("");
  const [pwCheckInput, setPwCheckInput] = useState("");
  const [nicknameInput, setNicknameInput] = useState("");
  const [textColor, setTextColor] = useState("black");
  const [text, setText] = useState("");

  //이메일 input박스 얇은 테두리색깔
  const [emailInputColor, setEmailInputColor] = useState("lightgray");
  //이메일 input박스 shadow테두리 색깔
  const [emailInputShadowColor, setEmailInputShadowColor] = useState("none");
  //이메일 select박스 얇은 테두리색깔
  const [emailSelectColor, setEmailSelectColor] = useState("lightgray");
  //이메일 select박스 shadow테두리 색깔
  const [emailSelectShadowColor, setEmailSelectShadowColor] = useState("none");
  //Domainselect박스에서 직접입력 선택할때 select박스를 input박스로 바꾸기
  const [inputVisible, setInputVisible] = useState(false);


  //Domainselect박스 handler
  const handleDomainSelect = (e) => {
    const value = e.target.value;
    console.log(value);
    //직접입력선택시 option에서 input박스로 바뀜
    if (value === "manual") {
      setInputVisible(true);
    } else {
      setInputVisible(false);
    }
  };
  //직접입력 선택시 생기는 x버튼 클릭시 발생 이벤트
  const xButtonClick = () => {
    setInputVisible(false);
  };
  //직접입력했을때 입력값 가져오기
  const handleWriteEmail = (e) => {
    console.log(e.target.value);
  };

  //이메일(아이디) input handler
  const handleIdInputChange = (e) => {
    //아이디 정규식
    const regIdExp = new RegExp("^[a-zA-Z][0-9a-zA-Z]{3,7}$");
    setIdInput(e.target.value);
    const idValidInput = regIdExp.test(idInput);
    setIsButtonActive(idValidInput && e.target.value !== "");

    //정규식이 true일때
    if (idValidInput) {
      setEmailInputShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
      setEmailInputColor("#4996f3");
      setEmailSelectColor("#4996f3");
      setTextColor("black");
      setText("");
    }
    //정규식이 false일때
    if (!idValidInput) {
      setEmailInputShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
      setEmailInputColor("#f77");
      setEmailSelectColor("#f77");
      setTextColor("#f77");
      if(e.target.value===""){
        setText("필수 입력 항목입니다.");
      }else{
        setText("이메일 형식이 올바르지 않습니다.")
      }
    }
  };
  const handlePwInput = (e) => {
    const regPwExp = new RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$");
    setPwInput(e.target.value);
    const pwValidInput = regPwExp.test(pwInput)

    if(pwValidInput){


    }
    if(!pwValidInput){


    }
  };

  const handlePwCheckInput = (e) => {};

  const handleNicknameInput = (e) => {


  };

  //email input focus handler
  const handleEmailFocus = () => {
    setEmailInputColor("#4996f3");
    setEmailInputShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
  };

  //email select focus handler
  const handleEmailSelectFocus = () => {
    setEmailSelectColor("#4996f3");
    setEmailSelectShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
  };

  //email input박스 밖에 선택했을때 원래색(lightgray)으로 돌려놓기
  const handleEmailBlur = () => {
    if (emailInputColor !== "#f77") {
      setEmailInputColor("lightgray");
      setEmailInputShadowColor("");
    }
  };

  //email select박스 밖에 선택했을때 원래색(lightgray)으로 돌려놓기
  const handleEmailSelectBlur = () => {
    if (emailSelectColor !== "#f77") {
      setEmailSelectColor("lightgray");
      setEmailSelectShadowColor("");
    }
  };

  const EmailButton = () => {
    console.log("버튼클릭");
  };
  return (
    <>
      <HeaderIcon />
      <SignDiv>
        <SignUpBlock>
          <h4>회원가입</h4>
          <SocialBlock>
            <span>SNS계정으로 간편하게 회원가입</span>
            <div className="socialButton">
              <img src="images/google-icon.png" alt="구글" />
              <img src="images/kakao-icon.png" alt="네이버" />
              <img src="images/naver-icon.png" alt="카카오" />
            </div>
          </SocialBlock>
          <hr />
          <h6 style={{ color: textColor }}>이메일</h6>
          <EmailBlock>
            <span>
              <input
                id="email"
                value={idInput}
                onChange={handleIdInputChange}
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
                type="text"
                placeholder="&nbsp;&nbsp;이메일"
                style={{
                  border: "1px solid " + emailInputColor,
                  boxShadow: emailInputShadowColor,
                }}
              />
            </span>
            <span>&nbsp;@&nbsp;</span>
            <span className="email-input_domain">
              <label>
                {inputVisible ? (
                  <input
                    className="inputDomain"
                    placeholder="  입력해주세요"
                    style={{
                      border: "1px solid " + emailSelectColor,
                      boxShadow: emailSelectShadowColor,
                    }}
                    onChange={handleWriteEmail}
                    onFocus={handleEmailSelectFocus}
                    onBlur={handleEmailSelectBlur}
                  />
                ) : (
                  <select
                    name="email"
                    style={{
                      border: "1px solid " + emailSelectColor,
                      boxShadow: emailSelectShadowColor,
                    }}
                    onFocus={handleEmailSelectFocus}
                    onBlur={handleEmailSelectBlur}
                    onChange={handleDomainSelect}
                  >
                    <option value="default">&nbsp;&nbsp;선택해주세요</option>
                    <option value="naver.com">&nbsp;&nbsp;naver.com</option>
                    <option value="hanmail.net">&nbsp;&nbsp;hanmail.net</option>
                    <option value="daum.net">&nbsp;&nbsp;daum.net</option>
                    <option value="gmail.com">&nbsp;&nbsp;gmail.com</option>
                    <option value="nate.com">&nbsp;&nbsp;nate.com</option>
                    <option value="hotmail.com">&nbsp;&nbsp;hotmail.com</option>
                    <option value="outlook.com">&nbsp;&nbsp;outlook.com</option>
                    <option value="icloud.com">&nbsp;&nbsp;icloud.com</option>
                    <option value="manual">&nbsp;&nbsp;직접입력</option>
                  </select>
                )}
                {inputVisible ? (
                  <button type="button" onClick={xButtonClick}>
                    <svg className="icon" width="10" height="10">
                      <path d="M5 4L8.5.3l1 1.1L6.2 5l3.5 3.6-1 1L5 6.1 1.4 9.6l-1-1L3.9 5 .4 1.5l1.1-1L5 3.8z"></path>
                    </svg>
                  </button>
                ) : (
                  ""
                )}
              </label>
            </span>
            {text != "" && (
              <p style={{ marginLeft: "10px",marginTop: "10px", marginBottom:"1px",color: "#f77", fontSize: "13px" }}
              > {`${text}`}
              </p>
            )}
          </EmailBlock>
          <AuthButton
            disabled={!isButtonActive}
            onClick={EmailButton}
            style={{
              backgroundColor: isButtonActive ? "white" : "#f7f8fa",
              border: isButtonActive
                ? "1px solid #4996f3"
                : "1px solid lightgray",
              color: isButtonActive ? "#4996f3" : "lightgray",
            }}
          >
            이메일 인증하기
          </AuthButton>
          <PWnNickBlock>
            <h6>비밀번호</h6>
            <p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
            <input
              id="password"
              value={pwInput}
              type="text"
              placeholder="  비밀번호"
              onChange={handlePwInput}
            />
            <h6>비밀번호 확인</h6>
            <input
              id="passwordCheck"
              value={pwCheckInput}
              type="text"
              placeholder="  비밀번호 확인"
              onChange={handlePwCheckInput}
            />
            <h6>닉네임</h6>
            <p>다른 유저와 겹치지 않도록 입력해주세요.(2~15자)</p>
            <input
              id="nickname"
              value={nicknameInput}
              type="text"
              placeholder="  별명(2~15자)"
              onChange={handleNicknameInput}/>
          </PWnNickBlock>
          {text != "" && (
              <p style={{ marginLeft: "10px",marginTop: "10px", marginBottom:"1px",color: "#f77", fontSize: "13px" }}
              > {`${text}`}
              </p>
            )}
        </SignUpBlock>
      </SignDiv>
    </>
  );
};

export default SignUpPage;
