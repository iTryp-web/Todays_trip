import React, { useState } from "react";
import {
  AuthButton,
  EmailBlock,
  ModalWrapper,
  PWnNickBlock,
  RefferBlock,
  SignUpBlock,
  SignUpDiv,
  SocialBlock,
  SubmitButton,
  TermsBlock,
} from "../../styles/SignStyle";
import HeaderIcon from "../include/HeaderIcon";
import { useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Term1 from "../member/Term1";
import Term2 from "../member/Term2";
import Term3 from "../member/Term3";

const SignUpPage = () => {
  const [idInput, setIdInput] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [pwInput, setPwInput] = useState("");
  const [pwCheckInput, setPwCheckInput] = useState("");
  const [nicknameInput, setNicknameInput] = useState("");
  const [referrerInput, setReferrerInput] = useState("");
  const [textIdColor, setTextIdColor] = useState("black");
  const [textPwColor, setTextPwColor] = useState("black");
  const [textPwCheckColor, setTextPwCheckColor] = useState("black");
  const [textNicknameColor, setTextNickNameColor] = useState("black");
  const [textReferrerColor, setTextReferrerColor] = useState("black");
  const [textTermColor, setTextTermColor] = useState("black");
  const [idtext, setIdText] = useState("");
  const [pwtext, setPwText] = useState("");
  const [termtext, setTermText] = useState("");
  const [pwChecktext, setPwCheckText] = useState("");
  const [nicknametext, setNicknameText] = useState("");
  const [referrertext, setReferrerText] = useState("");

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
  //패스워드 input박스 얇은 테두리 색깔
  const [pwInputColor, setPwInputColor] = useState("lightgray");
  //패스워드 input박스 shadow 테두리 색깔
  const [pwInputShadowColor, setPwInputShadowColor] = useState("none");
  //패스워드 체크 input박스 얇은 테두리 색깔
  const [pwCheckInputColor, setPwCheckInputColor] = useState("lightgray");
  //패스워드 체크 input박스 shadow 테두리 색깔
  const [pwCheckShadowColor, setPwCheckShadowColor] = useState("none");
  //닉네임 input박스 얇은 테두리 색깔
  const [nicknameInputColor, setNicknameInputColor] = useState("lightgray");
  //닉네임 input박스 shadow 테두리 색깔
  const [nicknameShadowColor, setNicknameShadowColor] = useState("none");
  //
  const [referrerInputColor, setReferrerInputColor] = useState("lightgray");
  //
  const [referrerShadowColor, setReferrerShadowColor] = useState("none");
  //
  const [termBoxColor, setTermBoxColor] = useState("lightgray");
  //
  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const [modal3IsOpen, setModal3IsOpen] = useState(false);
  //체크박스 전체체크 상태
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  //개별 체크박스 상태(초기값 false)
  const [checkItems, setCheckItems] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
  });
  //필수항목 체크 여부
  const [isRequiredChecked, setIsRequiredChecked] = useState(false);

  //개별 체크박스 handler
  const handleSingleCheck = (e) => {
    const { id, checked } = e.target;
    setCheckItems((prevState) => ({ ...prevState, [id]: checked }));

    const allChecked = Object.values({
      ...checkItems,
      [id]: checked,
    }).every(Boolean);
    setIsCheckedAll(allChecked);
  };

  //전체 체크박스 handler
  const handleCheckAll = (e) => {
    const { checked } = e.target;
    setIsCheckedAll(checked);
    setCheckItems((prevState) => ({
      ...prevState,
      check1: checked,
      check2: checked,
      check3: checked,
      check4: checked,
    }));
  };
  //필수항목 체크여부에 따른 화면 이펙트처리
  useEffect(() => {
    const isAllChecked =
      checkItems.check1 && checkItems.check2 && checkItems.check3;
    const isNotChecked =
      !checkItems.check1 && !checkItems.check2 && !checkItems.check3;
    setIsRequiredChecked(isAllChecked);

    if (isNotChecked) {
      setTextTermColor("black");
      setTermBoxColor("lightgray");
    } else if (isAllChecked) {
      setTextTermColor("black");
      setTermBoxColor("lightgray");
      setTermText("");
    } else {
      setTextTermColor("#f77");
      setTermBoxColor("#f77");
      setTermText("필수 항목에 동의해주세요.");
    }
  }, [checkItems]);

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
    const idValue = e.target.value;
    setIdInput(e.target.value);
    const idValidInput = regIdExp.test(idValue);
    setIsButtonActive(idValidInput && e.target.value !== "");

    //정규식이 true일때
    if (idValidInput) {
      setEmailInputShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
      setEmailInputColor("#4996f3");
      setEmailSelectColor("#4996f3");
      setTextIdColor("black");
      setIdText("");
    }
    //정규식이 false일때
    if (!idValidInput) {
      setEmailInputShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
      setEmailInputColor("#f77");
      setEmailSelectColor("#f77");
      setTextIdColor("#f77");
      if (e.target.value === "") {
        setIdText("필수 입력 항목입니다.");
      } else {
        setIdText("이메일 형식이 올바르지 않습니다.");
      }
    }
  };
  //비밀번호 유효성에 따라 style변경
  const handlePwInputChange = (e) => {
    const regPwExp = new RegExp("^(?=.*[a-zA-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$");
    const pwValue = e.target.value;
    setPwInput(e.target.value);
    const pwValidInput = regPwExp.test(pwValue);

    console.log(pwInput);
    //정규식이 true이면
    if (pwValidInput) {
      setPwInputShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
      setPwInputColor("#4996f3");
      setTextPwColor("black");
      setPwText("");
    }
    //정규식이 false이면
    if (!pwValidInput) {
      setPwInputShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
      setPwInputColor("#f77");
      setTextPwColor("#f77");
      if (e.target.value === "") {
        setPwText("필수 입력 항목입니다.");
      } else {
        setPwText("비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다.");
      }
    }
  };

  const handlePwCheckInput = (e) => {
    setPwCheckInput(e.target.value);
  };

  const handleNicknameInput = (e) => {
    setNicknameInput(e.target.value);
  };

  const handleReferrerInput = (e) => {
    setReferrerInput(e.target.value);
  };

  //==================focus, blur handler 시작===================//
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
  //비밀번호 focus handler
  const handlePwInputFocus = () => {
    setPwInputColor("#4996f3");
    setPwInputShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
  };

  //비밀번호 input 외부 선택했을때 다시 돌려놓기
  const handlePwInputBlur = () => {
    if (pwInputColor !== "#f77") {
      setPwInputColor("lightgray");
      setPwInputShadowColor("");
    }
  };

  const handlePwCheckFocus = () => {
    setPwCheckInputColor("#4996f3");
    setPwCheckShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
  };

  const handlePwCheckBlur = () => {
    if (pwCheckInputColor !== "#f77") {
      setPwCheckInputColor("lightgray");
      setPwCheckShadowColor("");
    }
  };

  const handleNicknameFocus = () => {
    setNicknameInputColor("#4996f3");
    setNicknameShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
  };

  const handleNicknameBlur = () => {
    if (nicknameInputColor !== "#f77") {
      setNicknameInputColor("lightgray");
      setNicknameShadowColor("");
    }
  };

  const handleReferrerFocus = () => {
    setReferrerInputColor("#4996f3");
    setReferrerShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
  };

  const handleReferrerBlur = () => {
    if (referrerInputColor !== "#f77") {
      setReferrerInputColor("lightgray");
      setReferrerShadowColor("");
    }
  };
  //==================focus, blur handler 끝 ====================//

  const EmailButton = () => {
    console.log("버튼클릭");
  };

  const handleModal1 = (e) => {
    e.preventDefault();
    setModal1IsOpen(true);
    if (modal1IsOpen) {
      setModal1IsOpen(false);
    }
  };
  const handleModal2 = (e) => {
    e.preventDefault();
    setModal2IsOpen(true);
    if (modal2IsOpen) {
      setModal2IsOpen(false);
    }
  };
  const handleModal3 = (e) => {
    e.preventDefault();
    setModal3IsOpen(true);
    if (modal3IsOpen) {
      setModal3IsOpen(false);
    }
  };

  //회원가입 버튼 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  //비밀번호 같은값인지 체크
  useEffect(() => {
    if (pwCheckInput === "") {
      setPwCheckInputColor("lightgray");
      setPwCheckShadowColor("none");
    } else if (pwCheckInput !== "" && pwInput === pwCheckInput) {
      setPwCheckInputColor("lightgray");
      setPwCheckShadowColor("");
      setTextPwCheckColor("black");
      setPwCheckText("");
    } else {
      setPwCheckInputColor("#f77");
      setPwCheckShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
      setTextPwCheckColor("#f77");
      setPwCheckText("비밀번호가 일치하지 않습니다.");
    }
  }, [pwInput, pwCheckInput]);

  return (
    <>
      <HeaderIcon />
      <SignUpDiv>
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
          <h6 style={{ color: textIdColor }}>이메일</h6>
          <EmailBlock>
            <span>
              <input
                id="email"
                value={idInput}
                onChange={handleIdInputChange}
                onFocus={handleEmailFocus}
                onBlur={handleEmailBlur}
                type="text"
                placeholder="이메일"
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
                    placeholder="입력해주세요"
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
                    <option value selected disabled>
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
                    <svg className="icon" width="10" height="10">
                      <path d="M5 4L8.5.3l1 1.1L6.2 5l3.5 3.6-1 1L5 6.1 1.4 9.6l-1-1L3.9 5 .4 1.5l1.1-1L5 3.8z"></path>
                    </svg>
                  </button>
                ) : (
                  ""
                )}
              </label>
            </span>
            {idtext !== "" && (
              <p
                style={{
                  marginLeft: "0.5%",
                  marginTop: "10px",
                  marginBottom: "1px",
                  color: "#f77",
                  fontSize: "13px",
                }}
              >
                {`${idtext}`}
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
            <h6 style={{ color: textPwColor }}>비밀번호</h6>
            <p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
            <input
              id="password"
              value={pwInput}
              type="password"
              placeholder="비밀번호"
              style={{
                border: "1px solid " + pwInputColor,
                boxShadow: pwInputShadowColor,
              }}
              onChange={handlePwInputChange}
              onFocus={handlePwInputFocus}
              onBlur={handlePwInputBlur}
            />
            {pwtext !== "" && (
              <p
                style={{
                  marginLeft: "0.5%",
                  marginTop: "10px",
                  marginBottom: "1px",
                  color: "#f77",
                  fontSize: "13px",
                }}
              >
                {`${pwtext}`}
              </p>
            )}
            <h6 style={{ color: textPwCheckColor }}>비밀번호 확인</h6>
            <input
              id="passwordCheck"
              value={pwCheckInput}
              type="password"
              placeholder="비밀번호 확인"
              style={{
                border: "1px solid " + pwCheckInputColor,
                boxShadow: pwCheckShadowColor,
              }}
              onChange={handlePwCheckInput}
              onFocus={handlePwCheckFocus}
              onBlur={handlePwCheckBlur}
            />
            {pwChecktext !== "" && (
              <p
                style={{
                  marginLeft: "0.5%",
                  marginTop: "10px",
                  marginBottom: "1px",
                  color: "#f77",
                  fontSize: "13px",
                }}
              >
                {`${pwChecktext}`}
              </p>
            )}
            <h6 style={{ color: textNicknameColor }}>닉네임</h6>
            <p>다른 유저와 겹치지 않도록 입력해주세요.(2~15자)</p>
            <input
              id="nickname"
              value={nicknameInput}
              type="text"
              placeholder="별명(2~15자)"
              style={{
                border: "1px solid " + nicknameInputColor,
                boxShadow: nicknameShadowColor,
              }}
              onChange={handleNicknameInput}
              onFocus={handleNicknameFocus}
              onBlur={handleNicknameBlur}
            />
            {nicknametext !== "" && (
              <p
                style={{
                  marginLeft: "0.5%",
                  marginTop: "10px",
                  marginBottom: "1px",
                  color: "#f77",
                  fontSize: "13px",
                }}
              >
                {`${nicknametext}`}
              </p>
            )}
          </PWnNickBlock>
          <RefferBlock>
            <h6 style={{ color: textReferrerColor }}>추천인</h6>
            <label>
              <input
                id="referrer"
                value={referrerInput}
                type="text"
                onChange={handleReferrerInput}
                onFocus={handleReferrerFocus}
                onBlur={handleReferrerBlur}
                style={{
                  border: "1px solid " + referrerInputColor,
                  boxShadow: referrerShadowColor,
                }}
              />
              <button>
                <GoSearch className="search-icon" />
              </button>
            </label>
            {referrertext !== "" && (
              <p
                style={{
                  marginLeft: "0.5%",
                  marginTop: "10px",
                  marginBottom: "1px",
                  color: "#f77",
                  fontSize: "13px",
                }}
              >
                {`${referrertext}`}
              </p>
            )}
          </RefferBlock>
          <h6 style={{ color: textTermColor }}>약관동의</h6>
          <TermsBlock
            style={{
              border: "1px solid " + termBoxColor,
            }}
          >
            <label>
              <input
                id="checkboxAll"
                type="checkbox"
                onChange={handleCheckAll}
                checked={isCheckedAll}
              />
              <span className="span1">전체동의</span>
              <span className="span2">선택항목에 대한 동의 포함</span>
            </label>
            <hr />
            <label>
              <input
                id="check1"
                type="checkbox"
                onChange={handleSingleCheck}
                checked={checkItems.check1}
              />
              <span className="span3">만 14세 이상입니다</span>
            </label>
            <label>
              <input
                id="check2"
                type="checkbox"
                onChange={handleSingleCheck}
                checked={checkItems.check2}
              />
              <span className="span3">이용약관</span>
              <button className="mbutton1" onClick={handleModal1}>
                <IoIosArrowForward />
              </button>
              <ModalWrapper isOpen={modal1IsOpen} ariaHideApp={false}>
                <button className="mbutton4" onClick={handleModal1}>
                  <IoClose />
                </button>
                <Term1 />
              </ModalWrapper>
            </label>
            <label>
              <input
                id="check3"
                type="checkbox"
                onChange={handleSingleCheck}
                checked={checkItems.check3}
              />
              <span className="span3">개인정보수집 및 이용동의</span>
              <button className="mbutton2" onClick={handleModal2}>
                <IoIosArrowForward />
              </button>
              <ModalWrapper isOpen={modal2IsOpen} ariaHideApp={false}>
                <button className="mbutton4" onClick={handleModal2}>
                  <IoClose />
                </button>
                <Term2 />
              </ModalWrapper>
            </label>
            <label>
              <input
                id="check4"
                type="checkbox"
                onChange={handleSingleCheck}
                checked={checkItems.check4}
              />
              <span className="span4">개인정보 마케팅 활용 동의</span>
              <button className="mbutton3" onClick={handleModal3}>
                <IoIosArrowForward />
              </button>
              <ModalWrapper isOpen={modal3IsOpen} ariaHideApp={false}>
                <button className="mbutton4" onClick={handleModal3}>
                  <IoClose />
                </button>
                <Term3 />
              </ModalWrapper>
            </label>
          </TermsBlock>
          {termtext !== "" && (
            <p
              style={{
                marginLeft: "0.5%",
                marginTop: "10px",
                marginBottom: "1px",
                color: "#f77",
                fontSize: "13px",
              }}
            >
              {`${termtext}`}
            </p>
          )}
        {/* 구글 Recaptcha 적용?(시간나면) */}
        <SubmitButton
            type="submit"
            onClick = {handleSubmit}
          >회원가입하기
          </SubmitButton>
          <p className="lastP">이미 아이디가 있으신가요? 
            <a href="/signin">로그인</a>
          </p>
        </SignUpBlock>
      </SignUpDiv>
    </>
  );
};
export default SignUpPage;
