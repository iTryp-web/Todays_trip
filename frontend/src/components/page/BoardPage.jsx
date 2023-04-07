import React, { useState } from 'react'
import Bottom from '../include/Bottom'
import Header from '../include/Header'
import {CommunityHeader, BtnPost, CommunityNav, LifeSection, LifeCategory, CategoryItem, LifeContentSection, SearchInput, Wrap, StyledSlider, SliderListF, CommunityH3} from '../../styles/BoardStyle'
import { BiSearch } from 'react-icons/bi';
import { Outlet, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-bootstrap'

const BoardPage = () => {

  return (
    <>
      <Header />
     {/*  <CommunityHeader>
        <h1>커뮤니티</h1>
        <BtnPost onClick={() => navigate('/board/write')}>
          글쓰기
          <RiPencilFill />
        </BtnPost>
      </CommunityHeader>
      <CommunityNav></CommunityNav> */}
      <Bottom />
    </>
  )
}

export default BoardPage
