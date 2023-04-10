import React from "react";
import { Link } from "react-router-dom";
import { HeaderBlock } from "../../styles/HeaderStyle";

const HeaderIcon = () => {
  return (
    <>
      <HeaderBlock>
        <Link to="/" className="logo">
          오늘의 여행
        </Link>
      </HeaderBlock>
    </>
  );
};

export default HeaderIcon;
