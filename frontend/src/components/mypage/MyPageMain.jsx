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
            <MenuElement onClick={() => navigate("/mypage/orderlist")}>
              주문 목록
            </MenuElement>
            <MenuElement onClick={() => navigate("/mypage/board")}>
              작성글 목록
            </MenuElement>
          </QElements>
          <QElements>
            <MenuElement onClick={() => navigate("/mypage/userCheck")}>
              회원정보 수정
            </MenuElement>
            <MenuElement onClick={() => navigate("/cart")}>
              장바구니
            </MenuElement>
          </QElements>
        </QuickMenu>
      </MyPageContainer>
    </>
  );
};

export default MyPageMain;
