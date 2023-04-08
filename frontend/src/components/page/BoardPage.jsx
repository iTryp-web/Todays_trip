import React, { useState } from 'react'
import Bottom from '../include/Bottom'
import Header from '../include/Header'
import {BoardHeader, BtnWrite, BoardH3} from '../../styles/BoardStyle'
import { RiPencilFill } from 'react-icons/ri';
import { Outlet, useNavigate } from 'react-router-dom'
import BoardLayout from '../board/BoardLayout';

const BoardPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <BoardHeader>
        <BoardH3>커뮤니티</BoardH3>
        <BtnWrite onClick={() => navigate('/board/write')}>
          글쓰기
          <RiPencilFill />
        </BtnWrite>
      </BoardHeader>
        <BoardLayout />
      <Outlet />
      <Bottom />
    </>
  )
}

export default BoardPage
