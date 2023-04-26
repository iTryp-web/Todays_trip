import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { NavLinkStyle, HeaderBlock } from '../../styles/HeaderStyle';
import { MdSearch } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect } from 'react';
import { KAKAO_AUTH_LOGOUT_URL } from '../auth/KakaoLogin';

const Header = ({authLogic}) => {
  const navigate = useNavigate()
  // 로그인할때 세션스토리지에 담았다가 꺼낼 것!
  // 아이디, 닉네임 담을 변수
  const [userId] = useState(window.sessionStorage.getItem('user_id'))
  const [userNickname] = useState(window.sessionStorage.getItem('user_nickname'))

  const menuClick = () => {

  }

  const logout = () => {

    authLogic.getUserAuth().signOut();
    console.log('logout')
    window.sessionStorage.clear();
    window.location.reload()
    window.location.href = KAKAO_AUTH_LOGOUT_URL;
  }
  
  return (
    <>
      <HeaderBlock>
      <AiOutlineMenu className="menu-icon" onClick={() => menuClick()} />
        <Link to="/" className="logo">
          오늘의 여행
        </Link>
        <nav>
          <NavLinkStyle 
            to="/market"
            className={({ isActive }) => isActive && "active"}
          >
            마켓
          </NavLinkStyle>
          <NavLinkStyle
            to="/board/all?page=1"
            className={({ isActive }) => isActive && "active"}
          >
            커뮤니티
          </NavLinkStyle>
          <NavLinkStyle
            to="/support/all"
            className={({ isActive }) => isActive && "active"}
          >
            고객센터
          </NavLinkStyle>
        </nav>
        <div className="button-block">
          <div className="search">
            <MdSearch className="search-icon" />
            <input className="search-input" placeholder="검색" />
          </div>
          <Link to="/cart" className="cart">
            <BsCart className="cart-icon" />
          </Link>
          <div className="buttons">
            {userId ? (
              <div className="signout" onClick={() => logout()}>
                로그아웃
              </div>
            ) : (
              <Link to="/signin" className="signin button">
                로그인
              </Link>
            )}
            <Link to="/signup" className="signup button">
              회원가입
            </Link>
{/*             <button className="seller-button">판매자 가입</button> */}
          </div>
        </div>
      </HeaderBlock>
    </>
  )
}

export default Header