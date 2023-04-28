import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { GoSearch } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginGoogle, onAuthChange } from "../../service/authLogic";
import {
  checkInfoDB,
  memberInsertDB,
  sessionListDB,
} from "../../service/memberLogic";
import {
  AuthButton,
  EmailBlock,
  ModalCode,
  ModalWrapper,
  NamenPhoneBlock,
  PWnNickBlock,
  ReferBlock,
  SignUpBlock,
  SignUpDiv,
  SocialBlock,
  SubmitButton,
  TermsBlock,
} from "../../styles/SignStyle";
import Term1 from "../Term/Term1";
import Term2 from "../Term/Term2";
import Term3 from "../Term/Term3";
import HeaderIcon from "../include/HeaderIcon";
import EmailVerifyCode from "./EmailVerifyCode";
import { KAKAO_AUTH_URL } from "./KakaoLogin";
import NaverLogin, { NAVER_AUTH_URL } from "./NaverLogin";
import { setToastMsg } from "../../redux/toastStatus/action";
import Toast from "../include/Toast";

const SignUpPage = () => {
  const userAuth = useSelector((state) => state.userAuth);
  //const auth = authLogic.getUserAuth(); 변경
  const auth = userAuth.auth;
  const navigate = useNavigate();
  const status = useSelector(store => store.toastStatus.status)
  console.log(status)
  const dispatch = useDispatch()

  const [memInfo, setMemInfo] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    nickname: "",
  });

  const [verifyEmail, setVerifyEmail] = useState(false);
  const [idInput, setIdInput] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [selectDomain, setSelectDomain] = useState("");
  const [writeDomain, setWriteDomain] = useState("");
  const [pwInput, setPwInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [pwCheckInput, setPwCheckInput] = useState("");
  const [nicknameInput, setNicknameInput] = useState("");
  const [referrerInput, setReferrerInput] = useState("");
  const [textIdColor, setTextIdColor] = useState("black");
  const [textNameColor, setTextNameColor] = useState("black");
  const [textPhoneColor, setTextPhoneColor] = useState("black");
  const [textPwColor, setTextPwColor] = useState("black");
  const [textPwCheckColor, setTextPwCheckColor] = useState("black");
  const [textNicknameColor, setTextNickNameColor] = useState("black");
  const [textReferrerColor, setTextReferrerColor] = useState("black");
  const [textTermColor, setTextTermColor] = useState("black");
  const [idtext, setIdText] = useState("");
  const [nametext, setNameText] = useState("");
  const [phonetext, setPhoneText] = useState("");
  const [pwtext, setPwText] = useState("");
  const [termtext, setTermText] = useState("");
  const [pwChecktext, setPwCheckText] = useState("");
  const [nicknametext, setNicknameText] = useState("");
  const [referrertext, setReferrerText] = useState("");
  const [pwCheck, setPwCheck] = useState(false)

  //이메일 input박스 얇은 테두리색깔
  const [emailInputColor, setEmailInputColor] = useState("lightgray");
  //이메일 input박스 shadow테두리 색깔
  const [emailInputShadowColor, setEmailInputShadowColor] = useState("none");
  //이메일 select박스 얇은 테두리색깔
  const [emailSelectColor, setEmailSelectColor] = useState("lightgray");
  //이메일 select박스 shadow테두리 색깔
  const [emailSelectShadowColor, setEmailSelectShadowColor] = useState("none");
  //이름 input박스 얇은 테두리색깔
  const [nameInputColor, setNameInputColor] = useState("lightgray");
  //이름 input박스 shadow 테두리 색깔
  const [nameInputShadowColor, setNameInputShadowColor] = useState("none");
  //휴대전화번호 input박스 얇은 테두리색깔
  const [phoneInputColor, setPhoneInputColor] = useState("lightgray");
  //휴대전화번호 input박스 shadow 테두리 색깔
  const [phoneInputShadowColor, setPhoneInputShadowColor] = useState("none");
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
  const [modalAuthIsOpen, setModalAuthIsOpen] = useState(false);
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

  //입력값 저장하기
  const changeMemInfo = (e) => {
    console.log("changeMemInfo");
    const id = e.currentTarget.id;
    console.log(id);
    const value = e.target.value;
    console.log(value);
    setMemInfo({ ...memInfo, [id]: value });
  };

  //닉네임 중복확인
  //useRef는 useEffect에서 이전상태나 프롭스를 비교하는 작업에 사용
  //처음 null값은 인식 안하고 다음 null값부터 처리하기위해 사용했음
  //nicknameInputRef에 이전 닉네임값을 저장
  const nicknameInputRef = useRef(null);
  useEffect(() => {
    const overlap = async () => {
      console.log("닉네임 중복확인");
      //이전닉네임값
      const prevNicknameInput = nicknameInputRef.current;
      const nickNameRegex = /^\S+$/;
      const validNickInput = nickNameRegex.test(nicknameInput)
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
        } else if (nicknameInput.length == 0) {
          setNicknameText("필수항목입니다.");
          setNicknameInputColor("#f77");
          setNicknameShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
          setTextNickNameColor("#f77");
        }
        else if(!validNickInput){
          setNicknameText("빈칸을 포함 할 수 없습니다.");
          setNicknameInputColor("#f77");
          setNicknameShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
        }
        //닉네임 중복아니어서 사용가능할때
        else {
          setNicknameText("");
          setNicknameInputColor("#4996f3");
          setNicknameShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
          setTextNickNameColor("black");
        }
      }
      nicknameInputRef.current = nicknameInput;
    };
    overlap();
  }, [nicknameInput]);

  //이메일(id) 중복확인 && 유효성 체크
  const idInputRef = useRef(null);
  useEffect(() => {
    const overlap = async () => {
      const regIdExp = new RegExp("^[a-zA-Z][0-9a-zA-Z]{1,15}$");
      const idValidInput = regIdExp.test(idInput);

      //이전닉네임값
      const prevIdInput = idInputRef.current;
      let params;
      params = {
        user_id: memInfo["writeEmail"]
          ? memInfo["email"] + "@" + memInfo["writeEmail"]
          : memInfo["email"] + "@" + memInfo["selectEmail"],
        type: "overlap",
      };
      console.log(params);

      let response = { data: 0 };
      response = await checkInfoDB(params);
      console.log(response.data);

      const data = JSON.stringify(response.data);
      console.log(data);
      const jsonDoc = JSON.parse(data);

      //이전아이디값이 null이아니고 idInput이 null이 아닐때만 작동
      //아이디 존재해서 사용불가능할때
      if (idInput !== null && prevIdInput !== null) {
        if (jsonDoc && idInput.length > 0 && idValidInput) {
          console.log(jsonDoc[0].USER_ID);
          setIdText("이미 가입되어 있는 회원입니다");
          setEmailInputColor("#f77");
          setEmailSelectColor("#f77");
          setEmailInputShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
          setEmailSelectShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
          setTextIdColor("#f77");
          setIsButtonActive(false);
        } else if (idInput.length == 0) {
          setIdText("필수항목입니다.");
          setEmailInputColor("#f77");
          setEmailSelectColor("#f77");
          setEmailSelectShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
          setEmailInputShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
          setTextIdColor("#f77");
          setIsButtonActive(false);
        } else if (idValidInput) {
          if (writeDomain.length === 0 && selectDomain === "manual") {
            setEmailInputShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
            setEmailInputColor("#f77");
            setEmailSelectColor("#f77");
            setTextIdColor("#f77");
            setEmailSelectShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
            setIdText("이메일 형식이 올바르지 않습니다.");
            setIsButtonActive(false);
          } else if (selectDomain === "") {
            setEmailInputShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
            setEmailInputColor("#f77");
            setEmailSelectColor("#f77");
            setTextIdColor("#f77");
            setEmailSelectShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
            setIdText("이메일 형식이 올바르지 않습니다.");
            setIsButtonActive(false);
          } else {
            setEmailInputShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
            setEmailSelectShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
            setEmailInputColor("#4996f3");
            setEmailSelectColor("#4996f3");
            setTextIdColor("black");
            setIdText("");
            setIsButtonActive(true);
          }
        } else if (!idValidInput) {
          setEmailInputShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
          setEmailInputColor("#f77");
          setEmailSelectColor("#f77");
          setTextIdColor("#f77");
          setEmailSelectShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
          setIdText("이메일 형식이 올바르지 않습니다.");
          setIsButtonActive(false);
        }
      }
      idInputRef.current = idInput;
    };
    overlap();
  }, [idInput, writeDomain, selectDomain]);

  //휴대전화번호 중복검사 && 유효성 검사
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
        } else if (phoneInput.length == 0) {
          setPhoneText("필수항목입니다.");
          setPhoneInputColor("#f77");
          setPhoneInputShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
          setTextPhoneColor("#f77");
        } else if (!phValidInput) {
          setPhoneInputShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
          setPhoneInputColor("#f77");
          setTextPhoneColor("#f77");
          setPhoneText("형식이 올바르지 않습니다.");
        } else {
          setPhoneInputShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
          setPhoneInputColor("#4996f3");
          setTextPhoneColor("black");
          setPhoneText("");
        }
      }
      phoneInputRef.current = phoneInput;
    };
    overlap();
  }, [phoneInput]);

  //이메일 회원 가입
  //소셜 X 일반 이메일 이용자 회원가입
  const signup = async () => {
    console.log("이메일 회원가입 구현");
    try {
      const userEmail = memInfo.writeEmail
        ? memInfo.email + "@" + memInfo.writeEmail
        : memInfo.email + "@" + memInfo.selectEmail;
      console.log(userEmail);
      const datas = {
        user_id: userEmail,
        user_pw: memInfo.password,
        user_nickname: memInfo.nickname,
        user_name: memInfo.name,
        user_phone: memInfo.phone,
        user_email: userEmail,
        provider : "TDT"
      };
      console.log(datas);
      const response = await memberInsertDB(datas);
      console.log(response);
      if (response.data !== 1) {
        return "DB 오류: 관리자에게 연락바랍니다.";
      }
      sessionStorage.clear();
      navigate("/");
    } catch (error) {
      console.log(error + " 오류: 관리자에게 연락바랍니다.");
    }
  }; //end of 회원가입 구현

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
    setSelectDomain(value);
    console.log(value);
    //직접입력선택시 option에서 input박스로 바뀜
    if (value === "manual") {
      setInputVisible(true);
    } else {
      setInputVisible(false);
    }
  };
  //이름 input handler
  const handleName = (e) => {
    const Name = e.target.value;
    setNameInput(Name);
    if (Name === "") {
      setNameInputColor("#f77");
      setNameInputShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
      setTextNameColor("#f77");
      setNameText("필수 입력 항목입니다");
    } else {
      setNameInputColor("#4996f3");
      setNameInputShadowColor("0 0 0 2px rgba(73,150,243,0.5)");
      setTextNameColor("black");
      setNameText("");
    }
  };
  //휴대전화번호 input handler
  const handlePhone = (e) => {
    const Phone = e.target.value;
    setPhoneInput(Phone);
  };
  //직접입력 선택시 생기는 x버튼 클릭시 발생 이벤트
  const xButtonClick = () => {
    setInputVisible(false);
  };
  //직접입력했을때 입력값 가져오기
  const handleWriteEmail = (e) => {
    setWriteDomain(e.target.value);
    console.log(e.target.value);
  };
  //이메일(아이디) input handler
  const handleIdInputChange = (e) => {
    setIdInput(e.target.value);
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
  //이름 focus handler
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

  //이메일 인증 구현
  const EmailButton = async (e) => {
    e.preventDefault();
    const userEmail = memInfo.writeEmail
      ? memInfo.email + "@" + memInfo.writeEmail
      : memInfo.email + "@" + memInfo.selectEmail;

    await axios
      .post("http://localhost:8000/service/mail", { email: userEmail })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //모달창 handler
  const handleModal0 = (e) => {
    e.preventDefault();
    setModalAuthIsOpen(true);
    if (modalAuthIsOpen) {
      setModalAuthIsOpen(false);
    }
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
    if (
      idInput !== null &&
      pwInput !== null &&
      phoneInput !== null &&
      pwInput !== null &&
      nicknameInput !== null &&
      pwCheckInput !== null &&
      nameInput !== null &&
      isRequiredChecked == true &&
      verifyEmail == true &&
      pwCheck == true &&
      idInput !== '' &&
      pwInput !== '' &&
      phoneInput !== '' &&
      nicknameInput !== '' &&
      pwCheckInput !== '' &&
      nameInput !== ''
    ) {
      signup();
      alert("회원가입이 완료되었습니다.");
    } else if (verifyEmail == false) {
      dispatch(setToastMsg('이메일 인증을 완료해주세요.'));
    } else if (
      !idInput ||
      !pwInput ||
      !phoneInput ||
      !pwInput ||
      !pwCheckInput ||
      !nicknameInput ||
      !nameInput ||
      !isRequiredChecked ||
      !pwCheck ||
      idInput === '' ||
      pwInput === '' ||
      phoneInput === '' ||
      nicknameInput === '' ||
      pwCheckInput === '' ||
      nameInput === ''
    ) {
      dispatch(setToastMsg('필수항목을 채워주세요.'));
    } else {
      dispatch(setToastMsg('회원가입 오류입니다. 관리자에게 문의해주세요.'));
    }
  };

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
      setPwCheck(true)
    } else {
      setPwCheckInputColor("#f77");
      setPwCheckShadowColor("0 0 0 2px rgba(255,119,119,0.5)");
      setTextPwCheckColor("#f77");
      setPwCheckText("비밀번호가 일치하지 않습니다.");
      setPwCheck(false)
    }
  }, [pwInput, pwCheckInput]);

  const ssg = sessionStorage;

  //구글 로그인(정보 없으면 회원가입)
  const loginG = async () => {
    try {
      let user = await onAuthChange(auth);
      if (!user) {
        // await loginGoogle(authLogic.getUserAuth(), authLogic.getGoogleAuthProvider()) 변경
        await loginGoogle(userAuth.auth, userAuth.googleProvider);
        // const auth1 = authLogic.getUserAuth(); 변경
        const auth1 = userAuth.auth;
        const user1 = await onAuthChange(auth1);
        user = user1;
      }
      //사용자가 있으면 - userId가 있다
      //구글 로그인으로 사용자 정보를 가지고 있을 때
      //user정보가 있으면 sessionStorage에 담는다 - email
      console.log("user정보가 있을때");
      //세션스토리지에 이메일 주소가 등록됨 - 단 구글로그인이 되어있는 상태일때만
      //ssg.setItem('email',user.email)
      const res = await sessionListDB({ user_id: user.uid });
      //오라클서버의 회원집합에 uid가 존재하면 - 세션 스토리지에 값을 담자
      if (res.data !== 0) {
        //스프링 부트 - RestMemberController - memberList에서 넘어오는 정보
        const temp = JSON.stringify(res.data);
        const jsonDoc = JSON.parse(temp);
        ssg.setItem("user_name", jsonDoc[0].USER_NAME);
        ssg.setItem("user_nickname", jsonDoc[0].USER_NICKNAME);
        ssg.setItem("user_email", jsonDoc[0].USER_EMAIL);
        ssg.setItem("user_id", jsonDoc[0].USER_ID);
        ssg.setItem("user_role", jsonDoc[0].ROLE);
      }
      //오라클서버의 회원집합에 uid가 존재하지 않으면
      // const result = await loginGoogle(authLogic.getUserAuth(), authLogic.getGoogleAuthProvider()) 변경
      let params;
      params = {
        user_id: user.uid,
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
    } catch (error) {
      console.log("로그인 오류입니다");
    }
  };

  //카카오 로그인
  const loginK = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  //네이버 로그인
  const loginN = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <>
      <HeaderIcon />
      {status && <Toast />}
      <SignUpDiv>
        <SignUpBlock>
          <h4>회원가입</h4>
          <SocialBlock>
            <span>SNS계정으로 간편하게 회원가입</span>
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
                alt="카카오"
                onClick={() => {
                  loginK();
                }}
              />
              <img
                src="images/naver-icon.png"
                alt="네이버"
                id="naverIdLogin"
                onClick={() => {
                  loginN();
                }}
              />
            </div>
          </SocialBlock>
          <hr />
          <h6 style={{ color: textIdColor }}>이메일</h6>
          <EmailBlock>
            <span>
              <input
                id="email"
                value={idInput}
                onChange={(e) => {
                  handleIdInputChange(e);
                  changeMemInfo(e);
                }}
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
                    id="writeEmail"
                    className="inputDomain"
                    placeholder="입력해주세요"
                    style={{
                      border: "1px solid " + emailSelectColor,
                      boxShadow: emailSelectShadowColor,
                    }}
                    onChange={(e) => {
                      handleWriteEmail(e);
                      changeMemInfo(e);
                    }}
                    onFocus={handleEmailSelectFocus}
                    onBlur={handleEmailSelectBlur}
                  />
                ) : (
                  <select
                    id="selectEmail"
                    name="email"
                    style={{
                      border: "1px solid " + emailSelectColor,
                      boxShadow: emailSelectShadowColor,
                    }}
                    onFocus={handleEmailSelectFocus}
                    onBlur={handleEmailSelectBlur}
                    onChange={(e) => {
                      handleDomainSelect(e);
                      changeMemInfo(e);
                    }}
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
            onClick={(e) => {
              EmailButton(e);
              handleModal0(e);
            }}
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
          <ModalCode isOpen={modalAuthIsOpen} ariaHideApp={false}>
            <EmailVerifyCode
              setModalAuthIsOpen={setModalAuthIsOpen}
              setVerifyEmail={setVerifyEmail}
            />
          </ModalCode>
          <NamenPhoneBlock>
            <h6 style={{ color: textNameColor }}>이름</h6>
            <input
              id="name"
              className="name"
              placeholder="실명을 입력해주세요"
              value={nameInput}
              style={{
                border: "1px solid " + nameInputColor,
                boxShadow: nameInputShadowColor,
              }}
              onChange={(e) => {
                handleName(e);
                changeMemInfo(e);
              }}
              onFocus={handleNameFocus}
              onBlur={handleNameBlur}
            ></input>
            {nametext !== "" && (
              <p
                style={{
                  marginLeft: "0.5%",
                  marginTop: "10px",
                  marginBottom: "1px",
                  color: "#f77",
                  fontSize: "13px",
                }}
              >
                {`${nametext}`}
              </p>
            )}
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
          <ReferBlock>
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
          </ReferBlock>
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
          <SubmitButton type="submit" onClick={handleSubmit}>
            회원가입하기
          </SubmitButton>
          <p className="lastP">
            이미 아이디가 있으신가요?
            <a href="/signin">로그인</a>
          </p>
        </SignUpBlock>
      </SignUpDiv>
    </>
  );
};
export default SignUpPage;
