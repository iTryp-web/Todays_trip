import React from "react";
import { useState } from "react";
import { NavSup, BtnSup } from "../../styles/SupportStyle";

const QnaNav = () => {
  return function Navbar() {
    const [activeBtn, setActiveBtn] = useState("전체");

    const handleClick = (btnName) => {
      setActiveBtn(btnName);
    };

    const buttons = ["전체", "결제", "환불", "판매자등록", "환불", "서비스"];

    return (
      <NavSup>
        {buttons.map((buttonName) => (
          <BtnSup
            key={buttonName}
            active={buttonName === activeBtn}
            onClick={() => handleClick(buttonName)}
          >
            {buttonName}
          </BtnSup>
        ))}
      </NavSup>
    );
  };
};

export default QnaNav;
