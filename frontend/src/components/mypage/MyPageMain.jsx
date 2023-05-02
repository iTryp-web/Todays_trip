import React from "react";
import { MenuElement, MyPageContainer, QElements, QuickMenu, UserInfo } from "../../styles/MypageStyle";
import { useNavigate } from "react-router-dom";

const MyPageMain = () => {
  const navigate = useNavigate();
  return (
    <>
      <MyPageContainer>
        <UserInfo></UserInfo>
        <QuickMenu>
          <QElements>
            <MenuElement>
              <button onClick={navigate("/")}>Element1</button>
            </MenuElement>
            <MenuElement>
              <button onClick={navigate("/")}>Element2</button>
            </MenuElement>
          </QElements>
          <QElements>
            <MenuElement>
              <button onClick={navigate("/")}>Element3</button>
            </MenuElement>
            <MenuElement>
              <button onClick={navigate("/")}>Element4</button>
            </MenuElement>
          </QElements>
        </QuickMenu>
      </MyPageContainer>
    </>
  );
};

export default MyPageMain;
