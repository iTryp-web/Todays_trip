import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FnLink, FnNavDiv, FnNavbar } from "../../styles/SupportStyle";

/* useState 훅을 사용해 '전체'가 초기값인 selected state와 setSelected 함수를 정의 */
const NavBar = () => {
  const [selected, setSelected] = useState("전체");

  /* handleClick 함수를 정의 */
  /* 클릭된 아이템을 인자로 받아 selected state를 업데이트 */
  const handleClick = (item) => {
    setSelected(item);
  };

  return (
    <FnNavDiv>
      <FnNavbar>
        <FnLink
          to="/support/all"
          className={selected === "전체" ? "fnSelectedLink" : "fnLink"}
          onClick={() => handleClick("전체")}
        >
          전체
        </FnLink>
        <FnLink
          to="/support/refund"
          className={selected === "환불" ? "fnSelectedLink" : "fnLink"}
          onClick={() => handleClick("환불")}
        >
          환불
        </FnLink>
        <FnLink
          to="/support/member-info"
          className={selected === "회원정보" ? "fnSelectedLink" : "fnLink"}
          onClick={() => handleClick("회원정보")}
        >
          회원정보
        </FnLink>
        <FnLink
          to="/support/payment"
          className={selected === "결제" ? "fnSelectedLink" : "fnLink"}
          onClick={() => handleClick("결제")}
        >
          결제
        </FnLink>
        <FnLink
          to="/support/login"
          className={selected === "로그인" ? "fnSelectedLink" : "fnLink"}
          onClick={() => handleClick("로그인")}
        >
          로그인
        </FnLink>
        <FnLink
          to="/support/service"
          className={selected === "서비스" ? "fnSelectedLink" : "fnLink"}
          onClick={() => handleClick("서비스")}
        >
          서비스
        </FnLink>
      </FnNavbar>
    </FnNavDiv>
  );
};

export default NavBar;
