import React, { useState } from 'react'
import Header from '../include/Header'
import Footer from '../include/Footer';
import {BoardHeader, BtnWrite, BoardH3} from '../../styles/BoardStyle'
import { RiPencilFill } from 'react-icons/ri';
import { Outlet, useNavigate } from 'react-router-dom'
import BoardLayout from '../board/BoardLayout';

const BoardPage = () => {
  // 단위테스트용!!
  window.sessionStorage.setItem('user_id', 'test1')
  window.sessionStorage.setItem('user_nickname', '테스트1')
  window.sessionStorage.setItem('user_role', 0)
  const navigate = useNavigate()

  // 로그인할때 세션스토리지에 담았다가 꺼낼 것!
  // 아이디, 닉네임 담을 변수
  const [userId] = useState(window.sessionStorage.getItem('user_id'))
  const [userNickname] = useState(window.sessionStorage.getItem('user_nickname'))

  return (
    <>
      <Header />
      <BoardHeader>
        <BoardH3>커뮤니티</BoardH3>
        {userId ? (
        <BtnWrite onClick={() => navigate('/board/write')}>
          글쓰기
          <RiPencilFill />
        </BtnWrite>
        ) : null}
      </BoardHeader>
      <BoardLayout />
      <Footer />
    </>
  )
}

export default BoardPage
