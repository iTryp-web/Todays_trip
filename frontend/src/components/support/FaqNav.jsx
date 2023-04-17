import React, { useState } from "react";
import { fnDefaultLabel, fnStyle } from "../../styles/SupportStyle";
import styled from "styled-components";

const NavWrapper = styled.div`
  ${fnStyle}
`;

const FaqNav = () => {
  const [selectedLabel, setSelectedLabel] = useState("전체");

  const handleLabelClick = (e) => {
    const label = e.target.textContent;
    setSelectedLabel(label);
  };



  return (
    <>
      <NavWrapper>
        <nav>
          <label
            className={selectedLabel === "전체" ? "fnSelectedLabel" : "fnLabel"}
            htmlFor="전체"
          >
            <input id="전체" type="checkbox" className="fnInput" name="fnInput" />
            <span className="fnSpan" onClick={handleLabelClick}>
              전체
            </span>
          </label>
          <label
            className={
              selectedLabel === "환불" ? "fnSelectedLabel" : "fnLabel"
            }
            htmlFor="환불"
          >
            <input id="환불" type="checkbox" className="fnInput" name="fnInput"/>
            <span className="fnSpan" onClick={handleLabelClick}>
              환불
            </span>
          </label>
          <label
            className={selectedLabel === "결제" ? "fnSelectedLabel" : "fnLabel"}
            htmlFor="결제"
          >
            <input id="결제" type="checkbox" className="fnInput" name="fnInput"/>
            <span className="fnSpan" onClick={handleLabelClick}>
              결제
            </span>
          </label>
        </nav>
      </NavWrapper>
    </>
  );
};

export default FaqNav;
