import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { NavLinkStyle, HeaderBlock } from '../../styles/HeaderStyle';
import { MdSearch } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate()
  // 로그인할때 세션스토리지에 담았다가 꺼낼 것!
  // 아이디, 닉네임 담을 변수
  const [userId] = useState(window.sessionStorage.getItem('user_id'))
  const [userNickname] = useState(window.sessionStorage.getItem('user_nickname'))
  const [userRole] = useState(window.sessionStorage.getItem('user_role'))
  // auth 리덕스
  const userAuth = useSelector((state) => state.userAuth);
  const auth = userAuth.auth;

  // 검색값 저장
  const [searchVal, setSearchVal] = useState('')
  const handleValue = (e) => {
    setSearchVal(e.target.value)
    console.log(e.target.value);
  }
  // 입력값 엔터누르면 검색하기
  const search = (e) => {
    if(e.keyCode === 13) {
      console.log(searchVal);
      navigate('/market/all?keyword='+searchVal)
    }
  }

  // 로그아웃 버튼
  const logout = () => {
    console.log('logout')
    auth.signOut();
    window.location.href = process.env.REACT_APP_KAKAO_LOGOUT_REDIRECT_URI;
    window.sessionStorage.clear();
    window.location.reload()
  }
  
  return (
    <>
      <HeaderBlock>
        <Link to="/" className="logo">
          오늘의 여행
        </Link>
        <nav>
          <NavLinkStyle 
            to="/market/all"
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
            <input className="search-input" placeholder="검색" type='text' onChange={(e) => handleValue(e)} onKeyDown={(e) => search(e)} />
          </div>
          <Link to="/cart" className="cart">
            <BsCart className="cart-icon" />
          </Link>
          <div className="buttons">
            {userId ? (
              <div className="signin button" onClick={() => logout()}>
                로그아웃
              </div>
            ) : (
              <Link to="/signin" className="signin button">
                로그인
              </Link>
            )}
            {userId ? (
              userRole == 2 ? (
            <Link to="/admin/market" className="signout button">
              관리자 페이지
            </Link>
              ) : (
            <Link to="/mypage/all" className="signout button">
              마이 페이지
            </Link>
              )
            ) : (
            <Link to="/signup" className="signout button">
              회원가입
            </Link>
            )}
          </div>
        </div>
      </HeaderBlock>
    </>
  )
}

export default Header