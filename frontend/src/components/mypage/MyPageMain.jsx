import React from "react";
import { DescSpace, MIcon, MenuElement, MyPageContainer, NameSpace, QElements, QuickMenu, TextBox, UserInfo } from "../../styles/MypageStyle";
import { useNavigate } from "react-router-dom";

const MyPageMain = () => {
  const navigate = useNavigate();
  const userName = sessionStorage.getItem("user_nickname")
  const userId = sessionStorage.getItem("user_id")
  return (
    <>
      <MyPageContainer>
        <UserInfo>
          <img src="/images/mypage/profile.png" alt="" width={"200px"}/>
          <NameSpace>{userName}</NameSpace>
          <DescSpace>일반 회원</DescSpace>
        </UserInfo>
        <QuickMenu>
          <QElements>
            <MenuElement onClick={() => navigate("/mypage/board")}>
              <TextBox>
              <h4 style={{ fontWeight: "bold" }}>작성글 목록</h4>
              <h1 style={{ fontWeight: "bold", color: "#f7f9fa"  }}>My Posts</h1>
              </TextBox>
              <MIcon src="/images/mypage/1.png"/>
            </MenuElement>
            <MenuElement onClick={() => navigate("/mypage/userCheck")}>
              <TextBox>
              <h4 style={{ fontWeight: "bold" }}>내 정보 수정</h4>
              <h1 style={{ fontWeight: "bold", color: "#f7f9fa" }}>Edit Me</h1>
              </TextBox>
              <MIcon src="/images/mypage/2.png"/>
            </MenuElement>
            <MenuElement onClick={() => navigate("/mypage/orderlist")}>
              <TextBox>
              <h4 style={{ fontWeight: "bold" }}>주문목록</h4>
              <h1 style={{ fontWeight: "bold", color: "#f7f9fa"  }}>My Order</h1>
              </TextBox>
              <MIcon src="/images/mypage/icon-bill.png"/>
            </MenuElement>
          </QElements>
        </QuickMenu>
      </MyPageContainer>
    </>
  );
};

export default MyPageMain;
