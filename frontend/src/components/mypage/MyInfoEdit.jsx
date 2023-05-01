/* global daum */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeaderIcon from "../include/HeaderIcon";
import Toast from "../include/Toast";
import {
  AddressBlock,
  EditBlock,
  EditDiv,
  EditEmailBlock,
  NamenPhoneBlock,
  PWnNickBlock,
  SearchBlock,
  SubmitButton,
} from "../../styles/SignStyle";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { checkInfoDB, memberUpdateDB } from "../../service/memberLogic";
import { GoSearch } from "react-icons/go";
import { setToastMsg } from "../../redux/toastStatus/action";

const MyInfoEdit = () => {
  const navigate = useNavigate();
  const status = useSelector((store) => store.toastStatus.status);
  console.log(status);
  const dispatch = useDispatch();
  const userName = window.sessionStorage.getItem("user_name");
  const userEmail = window.sessionStorage.getItem("user_email");
  const userId = window.sessionStorage.getItem("user_id");
  const [phoneInput, setPhoneInput] = useState("");
  const [phonetext, setPhoneText] = useState("");
  const [pwInput, setPwInput] = useState("");
  const [pwtext, setPwText] = useState("");
  const [pwCheckInput, setPwCheckInput] = useState("");
  const [pwChecktext, setPwCheckText] = useState("");
  const [nicknameInput, setNicknameInput] = useState("");
  const [nicknametext, setNicknameText] = useState("");
  const [pwCheck, setPwCheck] = useState(false);
  const [phoneCheck, setPhoneCheck] = useState(false);
  const [nickCheck, setNickCheck] = useState(false);

  const [textPwColor, setTextPwColor] = useState("black");
  const [textPwCheckColor, setTextPwCheckColor] = useState("black");
  const [textNicknameColor, setTextNickNameColor] = useState("black");

  const [memInfo, setMemInfo] = useState({
    password: "",
    phone: "",
    nickname: "",
  });

  const [post, setPost] = useState({
    zipcode: "",
    addr: "",
    addrDetail: "",
  });

  const [textPhoneColor, setTextPhoneColor] = useState("black");
  //휴대전화번호 input박스 얇은 테두리색깔
  const [phoneInputColor, setPhoneInputColor] = useState("lightgray");
  //휴대전화번호 input박스 shadow 테두리 색깔
  const [phoneInputShadowColor, setPhoneInputShadowColor] = useState("none");
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

  const [zipcodeInputColor, setZipcodeInputColor] = useState("lightgray");

  const [zipcodeInputShadowColor, setZipcodeInputShadowColor] =
    useState("none");

  const [addrDetailInputColor, setAddrDetailInputColor] = useState("lightgray");

  const [addrDetailInputShadowColor, setAddrDetailInputShadowColor] =
    useState("none");

  //휴대전화번호 focus handler
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
  const handleZipcodeFocus = () => {
    setZipcodeInputColor("#4996f3");
    setZipcodeInputShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
  };

  const handleZipcodeBlur = () => {
    if (zipcodeInputColor !== "#f77") {
      setZipcodeInputColor("lightgray");
      setZipcodeInputShadowColor("");
    }
  };
  const handleAddrDetailFocus = () => {
    setAddrDetailInputColor("#4996f3");
    setAddrDetailInputShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
  };

  const handleAddrDetailBlur = () => {
    if (addrDetailInputColor !== "#f77") {
      setAddrDetailInputColor("lightgray");
      setAddrDetailInputShadowColor("");
    }
  };

  const changeMemInfo = (e) => {
    console.log("changeMemInfo");
    const id = e.currentTarget.id;
    console.log(id);
    const value = e.target.value;
    console.log(value);
    setMemInfo({ ...memInfo, [id]: value });
  };

  //휴대전화번호 input handler
  const handlePhone = (e) => {
    const Phone = e.target.value;
    if (Phone === "") {
      setPhoneCheck(true);
    }
    setPhoneInput(Phone);
  };

  const handlePwCheckInput = (e) => {
    setPwCheckInput(e.target.value);
  };
  const handleNicknameInput = (e) => {
    setNicknameInput(e.target.value);
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
        setPwInputShadowColor("none");
        setPwInputColor("lightgray");
        setTextPwColor("black");
        setPwText("");
      } else {
        setPwText("비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다.");
      }
    }
  };

  //핸드폰 중복검사 + 유효성검사
  const phoneInputRef = useRef(null);
  useEffect(() => {
    const overlap = async () => {
      const regPhExp = new RegExp("^01([0|1|6|7|8|9])[0-9]{7,8}$");
      const phValidInput = regPhExp.test(phoneInput);

      const prevPhoneInput = phoneInputRef.current;
      let params;
      params = {
        user_phone: memInfo["phone"],
        type: "overlap",
      };
      console.log(params);

      let response = { data: 0 };
      response = await checkInfoDB(params);
      console.log(response.data);

      const data = JSON.stringify(response.data);
      console.log(data);
      const jsonDoc = JSON.parse(data);

      if (phoneInput !== null && prevPhoneInput !== null) {
        if (jsonDoc && phoneInput.length > 0 && phValidInput) {
          console.log(jsonDoc[0].USER_PHONE);
          setPhoneText("이미 가입되어 있는 번호입니다");
          setPhoneInputColor("#f77");
          setPhoneInputShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
          setTextPhoneColor("#f77");
          setPhoneCheck(false);
        } else if (phoneInput.length === 0) {
          setPhoneText("");
          setPhoneInputColor("lightgray");
          setPhoneInputShadowColor("none");
          setTextPhoneColor("black");
          setPhoneCheck(true); // Set phoneCheck to true if input is empty
        } else if (!phValidInput) {
          setPhoneInputShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
          setPhoneInputColor("#f77");
          setTextPhoneColor("#f77");
          setPhoneText("형식이 올바르지 않습니다.");
          setPhoneCheck(false);
        } else {
          setPhoneInputShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
          setPhoneInputColor("#4996f3");
          setTextPhoneColor("black");
          setPhoneText("");
          setPhoneCheck(true);
        }
      } else if (phoneInput === "") {
        setPhoneCheck(true); // Set phoneCheck to true if input is empty at the initial state
      }
      phoneInputRef.current = phoneInput;
    };
    overlap();
  }, [phoneInput]);

  //닉네임 중복검사
  const nicknameInputRef = useRef(null);
  useEffect(() => {
    const overlap = async () => {
      console.log("닉네임 중복확인");
      //이전닉네임값
      const prevNicknameInput = nicknameInputRef.current;
      const nickNameRegex = /^(?!\s)[^\s]{2,15}$/;
      const validNickInput = nickNameRegex.test(nicknameInput);
      let params;
      params = { user_nickname: memInfo["nickname"], type: "overlap" };
      console.log(params);

      let response = { data: 0 };
      response = await checkInfoDB(params);
      console.log(response.data);

      const data = JSON.stringify(response.data);
      console.log(data);
      const jsonDoc = JSON.parse(data);

      //이전닉네임값이 null이아니고 nicknameInput이 null이 아닐때만 작동
      //닉네임 존재해서 사용불가능할때
      if (nicknameInput !== null && prevNicknameInput !== null) {
        if (jsonDoc && nicknameInput.length > 0 && validNickInput) {
          console.log(jsonDoc[0].USER_NICKNAME);
          setNicknameText("사용 불가능한 닉네임 입니다");
          setNicknameInputColor("#f77");
          setNicknameShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
          setTextNickNameColor("#f77");
          setNickCheck(false);
        } else if (nicknameInput.length === 0) {
          setNicknameText("");
          setNicknameInputColor("lightgray");
          setNicknameShadowColor("none");
          setTextNickNameColor("black");
          setNickCheck(true);
        } else if (!validNickInput) {
          setNicknameText("조건을 만족하지 않습니다.");
          setNicknameInputColor("#f77");
          setNicknameShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
          setNickCheck(false);
        }
        //닉네임 중복아니어서 사용가능할때
        else {
          setNicknameText("");
          setNicknameInputColor("#4996f3");
          setNicknameShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
          setTextNickNameColor("black");
          setNickCheck(true);
        }
      } else if (nicknameInput === "") {
        setNickCheck(true);
      }
      nicknameInputRef.current = nicknameInput;
    };
    overlap();
  }, [nicknameInput]);

  //비밀번호 같은값인지 체크
  useEffect(() => {
    if (pwCheckInput === "" && pwInput === "") {
      setPwCheckText("");
      setTextPwCheckColor("black");
      setPwCheckInputColor("lightgray");
      setPwCheckShadowColor("none");
      setPwCheck(true);
    } else if (pwCheckInput === "" && pwInput !== "") {
      setPwCheckInputColor("lightgray");
      setPwCheckShadowColor("");
      setTextPwCheckColor("black");
      setPwCheckText("");
      setPwCheck(false);
    } else if (pwCheckInput !== "" && pwInput === pwCheckInput) {
      setPwCheckInputColor("lightgray");
      setPwCheckShadowColor("");
      setTextPwCheckColor("black");
      setPwCheckText("");
      setPwCheck(true);
    } else {
      setPwCheckInputColor("#f77");
      setPwCheckShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
      setTextPwCheckColor("#f77");
      setPwCheckText("비밀번호가 일치하지 않습니다.");
      setPwCheck(false);
    }
  }, [pwInput, pwCheckInput]);

  //우편번호 검색기
  const openZipcode = (e) => {
    e.preventDefault();
    new daum.Postcode({
      oncomplete: function (data) {
        let addr = "";
        if (data.userSelectedType === "R") {
          addr = data.roadAddress; //도로명
        } else {
          addr = data.jibunAddress; //지번
        }
        console.log(data);
        console.log(addr);
        setPost({ ...post, zipcode: data.zonecode, addr: addr });
        document.getElementById("zipcode").value = data.zonecode;
        document.getElementById("addr").value = addr;
        document.getElementById("addrDetail").focus();
      },
    }).open();
  };

  const ssg = sessionStorage;
  //회원정보 수정 완료
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("회원정보 수정 구현");
    try {
      const datas = {
        user_id: userId,
        user_nickname: memInfo.nickname,
        user_pw: memInfo.password,
        user_phone: memInfo.phone,
        user_zipcode: post.zipcode,
        user_address: post.addr,
        user_address_detail: post.addrDetail,
      };

      if (!phoneCheck || !nickCheck || !pwCheck) {
        dispatch(setToastMsg("변경하려는 정보의 조건을 맞춰주세요"));
        console.log(phoneCheck);
        console.log(nickCheck);
        console.log(pwCheck);
      } else {
        const response = await memberUpdateDB(datas);
        console.log(response);
        ssg.setItem("user_nickname", memInfo.nickname);
        if (response.data !== 1) {
          return "DB 오류: 관리자에게 연락바랍니다.";
        }
        alert("회원정보 수정 완료");
      }
    } catch (error) {
      console.log(error + " 오류: 관리자에게 연락바랍니다.");
    }
  };
  return (
    <>
      <HeaderIcon />
      {status && <Toast />}
      <EditDiv>
        <EditBlock>
          <h4>회원정보 수정</h4>
          <hr />
          <h6>이메일</h6>
          <EditEmailBlock>
            <span>
              <input
                id="email"
                defaultValue={userEmail}
                type="email"
                style={{
                  border: "1px solid lightgray",
                }}
                disabled={true}
              />
            </span>
          </EditEmailBlock>
          <NamenPhoneBlock>
            <h6>이름</h6>
            <input
              id="name"
              className="name"
              defaultValue={userName}
              style={{
                border: "1px solid lightgray",
              }}
              disabled={true}
            ></input>
            <h6 className="phone6" style={{ color: textPhoneColor }}>
              휴대전화번호
            </h6>
            <input
              id="phone"
              className="phone"
              placeholder="ex)0161234567/01012345678"
              value={phoneInput}
              style={{
                border: "1px solid " + phoneInputColor,
                boxShadow: phoneInputShadowColor,
              }}
              onChange={(e) => {
                handlePhone(e);
                changeMemInfo(e);
              }}
              onFocus={handlePhoneFocus}
              onBlur={handlePhoneBlur}
            ></input>
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
          </NamenPhoneBlock>
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
              onChange={(e) => {
                handlePwInputChange(e);
                changeMemInfo(e);
              }}
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
              onChange={(e) => {
                handleNicknameInput(e);
                changeMemInfo(e);
              }}
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
          <AddressBlock>
            <h6>우편번호</h6>
            <input
              id="zipcode"
              className="zipcode"
              placeholder="우편번호를 입력해주세요"
              type="text"
              value={memInfo.zipcode}
              style={{
                border: "1px solid " + zipcodeInputColor,
                boxShadow: zipcodeInputShadowColor,
              }}
              onChange={(e) => {
                changeMemInfo(e);
              }}
              onFocus={handleZipcodeFocus}
              onBlur={handleZipcodeBlur}
            ></input>
            <SearchBlock>
              <h6>주소</h6>
              <label>
                <input
                  id="addr"
                  value={post.addr}
                  type="text"
                  readOnly
                  placeholder="주소검색을 해주세요."
                  style={{
                    border: "1px solid lightgray",
                  }}
                />
                <button onClick={(e) => openZipcode(e)} >
                  <GoSearch className="search-icon"/>
                </button>
              </label>
            </SearchBlock>
            <h6>상세주소</h6>
            <input
              id="addrDetail"
              className="addrDetail"
              value={post.addrDetail}
              style={{
                border: "1px solid " + addrDetailInputColor,
                boxShadow: addrDetailInputShadowColor,
              }}
              readOnly={post.addr ? false : true}
              onChange={(e) => {
                setPost({ ...post, addrDetail: e.target.value });
              }}
              onFocus={handleAddrDetailFocus}
              onBlur={handleAddrDetailBlur}
            ></input>
          </AddressBlock>
          <SubmitButton type="submit" onClick={handleSubmit}>
            정보 수정하기
          </SubmitButton>
        </EditBlock>
      </EditDiv>
    </>
  );
};

export default MyInfoEdit;
