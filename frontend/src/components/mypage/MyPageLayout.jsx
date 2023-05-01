import React from 'react'
import { AContentSection, AdminCategory, AdminCategoryLi, AdminCategoryUl, AdminPageUl, AdminSection, QnaCategory, ReportUl } from '../../styles/AdminStyle'
import { myPageCategories, aBoardCategories } from './myPageData';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback } from 'react';
import { useEffect } from 'react';
import MyPageBoardRow from './MyPageBoardRow';
import { AiFillPlusSquare } from 'react-icons/ai';
import { Nav, Table } from "react-bootstrap";
import Pagination from '../include/Pagination';
import { myPageBoardDB } from '../../service/myPageLogic';

const MyPageLayout = () => {
  // 화면전환
  const navigate = useNavigate()
  // 페이지네이션
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  // 새로고침용 변수
  const [start, setStart] = useState()
  const refresh = () => {
    console.log('refresh');
    setStart(new Date())
  }
  // 파라미터의 카테고리값
  let {category} = useParams()
  console.log(category);

  // 게시판 변수
  const [boardList, setBoardList] = useState([{}])

  const user_info = {"user_id": 'test1'};

  useEffect(() => {
    const mypageload = async() => {
      const res = await myPageBoardDB(user_info)
      setBoardList(res.data);
      console.log(res.data);
    }
    mypageload();
    console.log(boardList);
  }, [category, start])
  
  /* 왼쪽 카테고리 */
  // 선택한 카테고리 담기
  const [selected, setSelected] = useState('작성글 목록')
  const handleCategory =  useCallback((name) => {
    let category = ''
    {myPageCategories.map((item) => {
      if(item.name === name) {
        category = item.category
      }
    })}
    navigate('/mypage/' + category)
  }, [])
  useEffect(() => {
    let name = ''
    {myPageCategories.map((item) => {
      if(item.category === category) {
        name = item.name
      }
    })}
    console.log('effect=> ' + name);
    setSelected(name)
  }, [category])

  /* 게시글 상단 카테고리*/
  const [selectedBoard, setSelectedBoard] = useState('글')
  
  return (
    <>
      <AdminSection>
        {/* 왼쪽 카테고리 */}
        <AdminCategory>
          <AdminPageUl onClick={() => navigate('/mypage/board')}>
            마이 페이지
          </AdminPageUl>
          <AdminCategoryUl>
            {myPageCategories &&
              myPageCategories.map((category) => {
                return (
                  <AdminCategoryLi
                    key={category.name}
                    active={category.name === selected}
                    onClick={() => handleCategory(category.name)}
                    >
                    <img src={category.img} alt={category.category} />
                    {category.name}
                    {boardList.length > 0 && category.name === '작성글' && boardList[0].qna_new > 0 ? (
                      <AiFillPlusSquare key={category.name} active={category.name === selected} className='icon' />
                    ) : null}
                  </AdminCategoryLi>
                );
              })}
          </AdminCategoryUl>
        </AdminCategory>

        {/* 오른쪽 글 내용 */}
        <AContentSection className='content'>
          {/* 마켓 목록 */}
          {boardList.length > 0 && selected === '작성글' ? (
            <ul>
              <Nav className='qnaNav' fill variant="tabs">
                {aBoardCategories && aBoardCategories.map((marketCategory) => (
                    <Nav.Item>
                      <Nav.Link
                        onClick={() => setSelectedBoard(marketCategory.name)}>
                        <QnaCategory active={marketCategory.name === selectedBoard}>{marketCategory.name}</QnaCategory>
                      </Nav.Link>
                    </Nav.Item>
                ))}
              </Nav>
              {/* 카테고리 selected에따른 조건 설정할것! 패키지, 레저, 티켓, 교통, 숙소 */}
              {boardList.map((board) => {
                return <MyPageBoardRow key={board.board_no} board={board} selectedBoard={selectedBoard} />
              })}
            </ul>
          ) : null}
        </AContentSection>
      </AdminSection>
    </>
  )
}

export default MyPageLayout
