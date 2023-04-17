import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FnLink, FnNavDiv, FnNavbar } from '../../styles/SupportStyle';

const NavBar = () => {
  const [selected, setSelected] = useState('전체');

  const handleClick = (item) => {
    setSelected(item);
  };

  return (
    <FnNavDiv>

    <FnNavbar>
      <FnLink to="/support/" className={selected === '전체' ? 'fnSelectedLink' : 'fnLink'} onClick={() => handleClick('전체')}>전체</FnLink>
      <FnLink to="/support/refund" className={selected === '환불' ? 'fnSelectedLink' : 'fnLink'} onClick={() => handleClick('환불')}>환불</FnLink>
      <FnLink to="/support/member-info" className={selected === '회원정보' ? 'fnSelectedLink' : 'fnLink'} onClick={() => handleClick('회원정보')}>회원정보</FnLink>
      <FnLink to="/support/payment" className={selected === '결제' ? 'fnSelectedLink' : 'fnLink'} onClick={() => handleClick('결제')}>결제</FnLink>
      <FnLink to="/support/login" className={selected === '로그인' ? 'fnSelectedLink' : 'fnLink'} onClick={() => handleClick('로그인')}>로그인</FnLink>
      <FnLink to="/support/service" className={selected === '서비스' ? 'fnSelectedLink' : 'fnLink'} onClick={() => handleClick('서비스')}>서비스</FnLink>
    </FnNavbar>
    </FnNavDiv>
  );
};

export default NavBar;
