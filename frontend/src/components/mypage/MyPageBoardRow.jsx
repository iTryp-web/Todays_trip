import React from 'react'
import { useNavigate } from 'react-router-dom'
import { profileImg } from '../board/boardData'
import { QnaContent, QnaDiv, QnaImg, QnaLi, QnaMarketContent, QnaMarketStatus, QnaMarketTitle } from '../../styles/MyPageBoardStyle'
import { MdOutlineFiberNew } from 'react-icons/md';
import { aBoardCategories } from './myPageData';
import { useState } from 'react';


const MyPageBoardRow = ({board, selectedBoard}) => {
  const navigate = useNavigate()

  const [category, setCategory] = useState('')
  
  const movePage = (category) => {
    for(let i=0; i<aBoardCategories.length; i++) {
      if(aBoardCategories[i].name === category) {
        setCategory(aBoardCategories[i].category)
        console.log(aBoardCategories[i].category)
        navigate('/mypage/'+aBoardCategories[i].category)
      }
    }
  }

  // 출력할 리스트 - 카테고리 조건에따라 출력위해 함수사용
  const BoardList = () => {
    return (
    <QnaLi>
      <p className='categoryQ' onClick={() => movePage(board.market_category)}>{board.market_category}</p>
      <span className='dateQ'>
        {new Date(board.market_date).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        })}
      </span>
      <QnaContent onClick={() => navigate(`/board/detail/${board.board_no}`)}>
        <QnaImg>
          <img className='qnaImg' src={profileImg[0]} />
        </QnaImg>
        <QnaDiv>
          <QnaMarketTitle>
            제목: {board.board_title}
          </QnaMarketTitle>
          <QnaMarketContent>
            가격: {board.market_price}원
          </QnaMarketContent>
        </QnaDiv>
      </QnaContent>
    </QnaLi>
    )
  }

  return (
    <>
      {selectedBoard === board.market_category ? (
        BoardList()
      ) : (selectedBoard === '전체' ? (
        BoardList()
        ) : null
        )}
    </>
  )
}

export default MyPageBoardRow
