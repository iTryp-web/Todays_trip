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
  const [idInput, setIdInput] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [pwInput, setPwInput] = useState("");
  const [boxColor, setBoxColor] = useState("black");
  const [text, setText] = useState("");
  const handleIdInputChange = (e) => {
    const regIdExp = new RegExp("^[a-zA-Z][0-9a-zA-Z]{3,7}$");
    const idValidInput = regIdExp.test(e.target.value);
    console.log(idValidInput)
    setIdInput(e.target.value);
    setBoxColor(idValidInput!==false);
    setText(idValidInput !== true);
    setIsButtonActive(idValidInput && e.target.value !== "");
  };
  const handlePwInputChange =(e)=>{
    const regPwExp = new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")
    


  }

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
          <h6 style={{ color: boxColor ? "black" : "red" }}>이메일</h6>
          <EmailBlock>
            <input
              id="email"
              value={idInput}
              onChange={handleIdInputChange}
              type="text"
              placeholder="&nbsp;&nbsp;이메일"
              style={{ border: boxColor ? "1px solid #4996f3" : "1px solid red" }}
            />
            <span>&nbsp;@&nbsp;</span>
            <select
              name="email"
              style={{ border: boxColor ? "1px solid #4996f3" : "1px solid red" }}
            >
              <option value="">&nbsp;&nbsp;선택해주세요</option>
              <option value="select">&nbsp;&nbsp;naver.com</option>
              <option value="select">&nbsp;&nbsp;hanmail.net</option>
              <option value="select">&nbsp;&nbsp;daum.net</option>
              <option value="select">&nbsp;&nbsp;gmail.com</option>
              <option value="select">&nbsp;&nbsp;nate.com</option>
              <option value="select">&nbsp;&nbsp;hotmail.com</option>
              <option value="select">&nbsp;&nbsp;outlook.com</option>
              <option value="select">&nbsp;&nbsp;icloud.com</option>
              <option value="select">&nbsp;&nbsp;직접입력</option>
            </select>
            {text != "" && (
              <span style={{ marginLeft: "10px", color: "red", fontSize : "12px"}}>
                이메일 형식이 올바르지 않습니다.
              </span>
            )}
            <button
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
            </button>
          </EmailBlock>
          <h6>비밀번호</h6>
          <PasswordBlock>
            <p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요</p>
            <input
              id="password"
              value={pwInput}
              type="text"
              placeholder="&nbsp;&nbsp;비밀번호"
            ></input>
          </PasswordBlock>
        </SignUpBlock>
      </SignDiv>
    </>
  );
};

export default SignUpPage;
