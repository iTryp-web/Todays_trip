import React, { useState } from "react";
import { onAuthChange } from "../../service/authLogic";
import { checkInfoDB, memberInsertDB } from "../../service/memberLogic";
import {
  Div,
  GoogleBlock,
  IfBox,
  InputBox,
  JoinButton,
} from "../../styles/SignStyle";
import Header from "../include/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToastMsg } from "../../redux/toastStatus/action";
import Toast from "../include/Toast";

const SNSSignUp = ({ authLogic, kakaoData, naverData }) => {

  const status = useSelector(store => store.toastStatus.status)
  console.log(status)
  const dispatch = useDispatch()

  const navigate = useNavigate();
  const [nameInput, setNameInput] = useState("");
  const [nickNameInput, setNickNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [nicknametext, setNicknameText] = useState("");
  const [nicknameInputColor, setNicknameInputColor] = useState("lightgray");
  const [nicknameShadowColor, setNicknameShadowColor] = useState("none");
  const [checkNick, setCheckNick] = useState("false");
  const [checkPh, setCheckPh] = useState("false");
  const [phonetext, setPhoneText] = useState("");
  const [phoneInputColor, setPhoneInputColor] = useState("lightgray");
  const [phoneInputShadowColor, setPhoneInputShadowColor] = useState("none");
  const [nameInputColor, setNameInputColor] = useState("lightgray");
  const [nameInputShadowColor, setNameInputShadowColor] = useState("none");
  const [nametext, setNameText] = useState("");
  const [checkNm, setCheckNm] = useState(false);

  const handleNickNameChange = (e) => {
    setNickNameInput(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhoneInput(e.target.value);
  };

  const handleNameChange = (e) => {
    setNameInput(e.target.value);
    const name = e.target.value;
    if (name.length == 0) {
      setNameText("필수항목입니다.");
      setNameInputColor("#f77");
      setNameInputShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
    } else {
      setCheckNm(true);
      setNameInputShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
      setNameInputColor("#4996f3");
      setNameText("");
    }
  };

  //닉네임 중복검사
  const checkNickName = async () => {
    const nickNameRegex = /^\S+$/;
    const validNickInput = nickNameRegex.test(nickNameInput)
    let params;
    params = { user_nickname: nickNameInput };
    console.log(params);

    let response = { data: 0 };
    response = await checkInfoDB(params);
    console.log(response.data);

    const data = JSON.stringify(response.data);
    console.log(data);
    const jsonDoc = JSON.parse(data);

    if (jsonDoc && nickNameInput.length > 0 && validNickInput) {
      console.log(jsonDoc[0].USER_NICKNAME);
      setNicknameText("중복된 닉네임 입니다");
      setNicknameInputColor("#f77");
      setNicknameShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
    } else if (nickNameInput.length == 0) {
      setNicknameText("필수항목입니다.");
      setNicknameInputColor("#f77");
      setNicknameShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
    }else if(!validNickInput){
      setNicknameText("빈칸을 포함 할 수 없습니다.");
      setNicknameInputColor("#f77");
      setNicknameShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
    }
    //닉네임 중복아니어서 사용가능할때
    else {
      setNicknameText("");
      setNicknameInputColor("#4996f3");
      setNicknameShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
      setNicknameText("");
      dispatch(setToastMsg('사용 가능합니다.'));
      setCheckNick(true);
    }
  };

  const handleNickNameFocus = () => {
    setNicknameInputColor("#4996f3");
    setNicknameShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
  };

  const handleNickNameBlur = () => {
    if (nicknameInputColor !== "#f77") {
      setNicknameInputColor("lightgray");
      setNicknameShadowColor("");
    }
  };

  const checkPhone = async () => {
    const regPhExp = new RegExp("^01([0|1|6|7|8|9])[0-9]{7,8}$");
    const phValidInput = regPhExp.test(phoneInput);

    let params;
    params = {
      user_phone: phoneInput,
    };
    console.log(params);

    let response = { data: 0 };
    response = await checkInfoDB(params);
    console.log(response.data);

    const data = JSON.stringify(response.data);
    console.log(data);
    const jsonDoc = JSON.parse(data);

    if (jsonDoc && phoneInput.length > 0 && phValidInput) {
      console.log(jsonDoc[0].USER_PHONE);
      setPhoneText("이미 가입되어 있는 번호입니다");
      setPhoneInputColor("#f77");
      setPhoneInputShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
    } else if (phoneInput.length == 0) {
      setPhoneText("필수항목입니다.");
      setPhoneInputColor("#f77");
      setPhoneInputShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
    } else if (!phValidInput) {
      setPhoneInputShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
      setPhoneInputColor("#f77");
      setPhoneText("형식이 올바르지 않습니다.");
    } else {
      setPhoneInputShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
      setPhoneInputColor("#4996f3");
      setPhoneText("");
      dispatch(setToastMsg('사용 가능합니다.'));
      setCheckPh(true);
    }
  };
  const handlePhoneFocus = () => {
    setPhoneInputColor("#4996f3");
    setPhoneInputShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
  };
  //이름 shadow handler
  const handlePhoneBlur = () => {
    if (phoneInputColor !== "#f77") {
      setPhoneInputColor("lightgray");
      setPhoneInputShadowColor("");
    }
  };
  const handleNameFocus = () => {
    setNameInputColor("#4996f3");
    setNameInputShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
  };
  //이름 shadow handler
  const handleNameBlur = () => {
    if (nameInputColor !== "#f77") {
      setNameInputColor("lightgray");
      setNameInputShadowColor("");
    }
  };

  //구글 회원가입
  const location = useLocation();
  [naverData] = useState(location.state?.naverData);
  [kakaoData] = useState(location.state?.kakaoData);
  const signup = async ({ kakaoData, naverData }) => {
    const auth = authLogic.getUserAuth();
    const user = await onAuthChange(auth);
    console.log("SNS 회원가입 구현");
    try {
      const datas = {
        user_id: user?.uid
          ? user.uid
          : kakaoData?.id || naverData?.response?.id, // 수정: user가 null일 경우를 대비하여 옵셔널 체이닝 연산자를 사용하여 uid에 접근
        user_pw: "",
        user_nickname: nickNameInput,
        user_name: nameInput,
        user_phone: phoneInput,
        user_email: user?.email
          ? user.email
          : kakaoData?.kakao_account?.email || naverData?.response?.email, // 수정: user가 null일 경우를 대비하여 옵셔널 체이닝 연산자를 사용하여 email에 접근
        provider : '카카오'
        };
      console.log(datas);
      const response = await memberInsertDB(datas);
      console.log(response);
      if (response.data !== 1) {
        return "DB 오류: 관리자에게 연락바랍니다.";
      }
      sessionStorage.clear();
      navigate("/");
      return "회원가입되었습니다. 감사합니다.";
    } catch (error) {
      console.log(error + " 오류: 관리자에게 연락바랍니다.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(checkNick);
    console.log(checkPh);
    console.log(checkNm);
    if (
      nickNameInput !== null &&
      phoneInput !== null &&
      checkNick == true &&
      checkPh == true &&
      checkNm == true
    ) {
      signup({ kakaoData, naverData });
      alert("회원가입이 완료되었습니다. 로그인 해주세요!")
    } 
     else {
      dispatch(setToastMsg('필수 항목을 완료해주세요.'));
    }
  };

  return (
    <>
      <Header />
      {status && <Toast />}
      <Div>
        <GoogleBlock>
          <InputBox>
            <p>이름을 입력해주세요</p>
            <label>
              <input
                type="text"
                value={nameInput}
                placeholder="이름"
                onFocus={handleNameFocus}
                onBlur={handleNameBlur}
                onChange={handleNameChange}
                style={{
                  border: "1px solid " + nameInputColor,
                  boxShadow: nameInputShadowColor,
                }}
              ></input>
              {nametext !== "" && (
                <p
                  style={{
                    marginLeft: "0.5%",
                    marginTop: "0px",
                    marginBottom: "1px",
                    color: "#f77",
                    fontSize: "13px",
                  }}
                >
                  {`${nametext}`}
                </p>
              )}
            </label>
            <p>닉네임을 입력해주세요</p>
            <label>
              <input
                type="text"
                value={nickNameInput}
                placeholder="닉네임"
                onFocus={handleNickNameFocus}
                onBlur={handleNickNameBlur}
                onChange={handleNickNameChange}
                style={{
                  border: "1px solid " + nicknameInputColor,
                  boxShadow: nicknameShadowColor,
                }}
              ></input>
              <button onClick={checkNickName}>중복검사</button>
              {nicknametext !== "" && (
                <p
                  style={{
                    marginLeft: "0.5%",
                    marginTop: "0px",
                    marginBottom: "1px",
                    color: "#f77",
                    fontSize: "13px",
                  }}
                >
                  {`${nicknametext}`}
                </p>
              )}
            </label>
            <p>휴대전화번호를 입력해주세요</p>
            <label>
              <input
                type="text"
                value={phoneInput}
                placeholder="휴대전화번호"
                onFocus={handlePhoneFocus}
                onBlur={handlePhoneBlur}
                onChange={handlePhoneChange}
                style={{
                  border: "1px solid " + phoneInputColor,
                  boxShadow: phoneInputShadowColor,
                }}
              ></input>
              <button onClick={checkPhone}>중복검사</button>
              {phonetext !== "" && (
                <p
                  style={{
                    marginLeft: "0.5%",
                    marginTop: "10px",
                    marginBottom: "1px",
                    color: "#f77",
                    fontSize: "13px",
                  }}
                >
                  {`${phonetext}`}
                </p>
              )}
            </label>
            <JoinButton type="submit" onClick={handleSubmit}>
              회원가입 완료
            </JoinButton>
            <IfBox>
              <p className="p1">회원가입에 문제가 있다면?</p>
              <p className="p2">고객센터 문의하기(1544-9970)</p>
            </IfBox>
          </InputBox>
        </GoogleBlock>
      </Div>
    </>
  );
};

export default SNSSignUp;
