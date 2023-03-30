import React from 'react'
import { Link } from 'react-router-dom';
import { NavLinkStyle, HeaderContentsBlock } from '../../styles/HeaderStyle';
import { MdSearch } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const menuClick = () => {

  }
  
  return (
    <>
      <HeaderContentsBlock>
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
            to="/board"
            className={({ isActive }) => isActive && "active"}
          >
            커뮤니티
          </NavLinkStyle>
          <NavLinkStyle
            to="/experts"
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
          <Link to="cart" className="cart">
            <BsCart className="cart-icon" />
          </Link>
          <div className="buttons">
            <Link to="login" className="login button">
              로그인
            </Link>
            <Link to="register" className="register button">
              회원가입
            </Link>
            <button className="seller-button">판매자 가입</button>
          </div>
        </div>
      </HeaderContentsBlock>
    </>
  )
}

export default Header