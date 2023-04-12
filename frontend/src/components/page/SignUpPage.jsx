import React, { useState } from "react";
import {
  AuthButton,
  EmailBlock,
  PasswordBlock,
  SignDiv,
  SignUpBlock,
  SocialBlock,
} from "../../styles/SignStyle";
import HeaderIcon from "../include/HeaderIcon";

const SignUpPage = () => {
  const [idInput, setIdInput] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [pwInput, setPwInput] = useState("");
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
  //Domainselect박스에서 값 가져오기
  const [selectedValue, setSelectedValue] = useState("");
  //Domainselect박스에서 직접입력 선택할때 select박스를 input박스로 바꾸기
  const [inputVisible, setInputVisible] = useState(false);

  //Domainselect박스 handler
  const handleDomainSelect = (e) => {
    const value = e.target.value;

    if (value === "manual") {
      setInputVisible(true);
      setSelectedValue("");
    } else {
      setInputVisible(false);
      setSelectedValue(value);
    }
  };
  //직접입력 선택시 생기는 x버튼 클릭시 발생 이벤트
  const xButtonClick = () => {
    console.log("버튼클릭")
  }

  //이메일(아이디) 입력칸 handler
  const handleIdInputChange = (e) => {
    //아이디 정규식
    const regIdExp = new RegExp("^[a-zA-Z][0-9a-zA-Z]{3,7}$");
    const idValidInput = regIdExp.test(e.target.value);
    setIdInput(e.target.value);
    setIsButtonActive(idValidInput && e.target.value !== "");

    //정규식이 true일때
    if (idValidInput) {
      setEmailInputShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
      setEmailInputColor("#4996f3");
      setEmailSelectColor("#4996f3");
      setTextColor("black");
      setText(false);
    }
    //정규식이 false일때
    if (!idValidInput) {
      setEmailInputShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
      setEmailInputColor("red");
      setEmailSelectColor("red");
      setTextColor("red");
      setText(true);
    }
  };
  const handlePwInputChange = (e) => {
    const regPwExp = new RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$");
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

  //email input박스 밖에 선택했을때 원래색으로 돌려놓기
  const handleEmailBlur = () => {
    if (emailInputColor !== "red") {
      setEmailInputColor("lightgray");
      setEmailInputShadowColor("");
    }
  };

  //email select박스 밖에 선택했을때 원래색으로 돌려놓기
  const handleEmailSelectBlur = () => {
    if (emailSelectColor !== "red") {
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
                    onFocus={handleEmailSelectFocus}
                    onBlur={handleEmailSelectBlur}
                  />
                ) : (
                  <select
                    value={selectedValue}
                    name="email"
                    style={{
                      border: "1px solid " + emailSelectColor,
                      boxShadow: emailSelectShadowColor,
                    }}
                    onFocus={handleEmailSelectFocus}
                    onBlur={handleEmailSelectBlur}
                    onChange={handleDomainSelect}
                  >
                    <option value disabled>
                      &nbsp;&nbsp;선택해주세요
                    </option>
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
                    <svg
                      className="icon"
                      width="10"
                      height="10"
                    >
                      <path
                        d="M5 4L8.5.3l1 1.1L6.2 5l3.5 3.6-1 1L5 6.1 1.4 9.6l-1-1L3.9 5 .4 1.5l1.1-1L5 3.8z"
                      ></path>
                    </svg>
                  </button>
                ) : (
                  ""
                )}
              </label>
            </span>
            {/*  <div> */}

            {text != "" && (
              <span
                style={{ marginLeft: "10px", color: "red", fontSize: "12px" }}
              >
                이메일 형식이 올바르지 않습니다.
              </span>
            )}
            {/* </div> */}
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
          <h6>비밀번호</h6>
          <PasswordBlock>
            <p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요</p>
            <input
              id="password"
              value={pwInput}
              type="text"
              placeholder="&nbsp;&nbsp;비밀번호"
              onChange={handlePwInputChange}
            ></input>
          </PasswordBlock>
        </SignUpBlock>
      </SignDiv>
    </>
  );
};

export default SignUpPage;
