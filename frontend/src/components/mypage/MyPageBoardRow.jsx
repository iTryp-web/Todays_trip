import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BtnEdit, QnaContent, QnaDiv, QnaImg, QnaLi, QnaMarketContent, QnaMarketTitle } from '../../styles/MyPageBoardStyle'
import { FaCommentDots, FaHeart } from 'react-icons/fa'
import { BsFillEyeFill } from 'react-icons/bs'
import { categories, profileImg } from '../board/boardData'


const MyPageBoardRow = ({board}) => {
  const navigate = useNavigate()
  
  const movePage = (category) => {
    for(let i=0; i<categories.length; i++) {
      if(categories[i].name === category) {
        navigate('/board/'+categories[i].category+'?page=1')
      }
    }
  }

  return (
    <>
      <QnaLi>
        <p className='categoryQ' onClick={() => movePage(board.board_category)}>{board.board_category}</p>
        <span className='dateQ'>
          {new Date(board.board_date).toLocaleString('ko-KR')}
        </span>
        <QnaContent onClick={() => navigate(`/board/detail/${board.board_no}`)}>
          <QnaImg>
            <img className='qnaImg' src={profileImg[Math.floor(((new Date(board.board_date).getSeconds())%10))]} alt="icon" />
          </QnaImg>
          <QnaDiv>
            <QnaMarketTitle>
              {board.board_title}
            </QnaMarketTitle>
            <QnaMarketContent>
              <FaHeart style={{margin: '0 3px 1px 2px'}} />
              {board.like_count ? board.like_count : 0}
              <FaCommentDots style={{margin: '0 3px 0 10px'}} />
              {board.comment_count ? board.comment_count : 0}
              <BsFillEyeFill style={{margin: '0 3px 0 10px'}} />
              {board.board_hit ? board.board_hit : 0}
            </QnaMarketContent>
          </QnaDiv>
        </QnaContent>
        <BtnEdit onClick={() => navigate('/board/update/'+board.board_no)}>수정하기</BtnEdit>
      </QnaLi>
    </>
  )
}

export default MyPageBoardRow
