import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "../include/Toast";
import { setToastMsg } from "../../redux/toastStatus/action";

const EmailVerifyCode = ({ setModalAuthIsOpen, setVerifyEmail }) => {
  const status = useSelector(store => store.toastStatus.status)
  console.log(status)
  const dispatch = useDispatch()
  
  const [codeInput, setCodeInput] = useState("");
  const [codetext, setCodeText] = useState("");

  const Code = (e) => {
    setCodeInput(e.target.value);
    console.log(e.target.value);
  };
  const checkCode = async (e) => {
    e.preventDefault();
    const code = codeInput;
    console.log(code);
    await axios
      .post("http://localhost:8000/service/verifyCode", { code: code })
      .then((response) => {
        console.log(response.data);
        const result = response.data;
        if (result == 1) {
          dispatch(setToastMsg('인증 성공.'));
          setCodeText("");
          setModalAuthIsOpen(false);
          setVerifyEmail(true);
          
        } else {
          setCodeText("인증 번호가 일치하지 않습니다.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {status && <Toast />}
      <h4>이메일 인증 코드</h4>
      <hr />
      <input
        id="code"
        className="code"
        placeholder="인증번호를 입력해주세요"
        value={codeInput}
        style={{
          border: "1px solid lightgray",
        }}
        onChange={Code}
      ></input>
      <button className="confirm" onClick={checkCode}>
        확인
      </button>
      {codetext !== "" && (
        <p
          style={{
            marginLeft: "0.5%",
            marginTop: "10px",
            marginBottom: "1px",
            color: "#f77",
            fontSize: "13px",
          }}
        >
          {`${codetext}`}
        </p>
      )}
    </>
  );
};

export default EmailVerifyCode;
