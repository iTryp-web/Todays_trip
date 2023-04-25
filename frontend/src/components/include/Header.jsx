import React from 'react'
import { Link } from 'react-router-dom';
import { NavLinkStyle, HeaderBlock } from '../../styles/HeaderStyle';
import { MdSearch } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const menuClick = () => {

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
          { sessionStorage.getItem("user_id") === undefined || sessionStorage.getItem("user_id") === null ? 
          <div className="buttons">
            <Link to="/signin" className="signin button">
              로그인
            </Link>
            <Link to="/signup" className="signup button">
              회원가입
            </Link>
            <button className="seller-button">판매자 가입</button>
          </div>
          :
          <div className="buttons">
            {sessionStorage.getItem("user_nickname")} 님 환영합니다.
          </div>
          }
        </div>
      </HeaderBlock>
    </>
  )
}

export default Header