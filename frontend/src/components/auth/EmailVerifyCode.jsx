import axios from "axios";
import React from "react";
import { useState } from "react";

const EmailVerifyCode = ({ setModalAuthIsOpen }) => {
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
          alert("인증성공");
          setCodeText("");
          setModalAuthIsOpen(false);
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
