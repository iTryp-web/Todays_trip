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
            <MenuElement onClick={navigate("/orderlist")}>
            </MenuElement>
            <MenuElement onClick={navigate("/mypage/userCheck")}>
            </MenuElement>
          </QElements>
          <QElements>
            <MenuElement onClick={navigate("/orderlist")}>
            </MenuElement>
            <MenuElement onClick={navigate("/orderlist")}>
            </MenuElement>
          </QElements>
        </QuickMenu>
      </MyPageContainer>
    </>
  );
};

export default MyPageMain;
