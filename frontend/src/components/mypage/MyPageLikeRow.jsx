import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BtnEdit, QnaContent, QnaDiv, QnaImg, QnaLi, QnaMarketContent, QnaMarketTitle } from '../../styles/MyPageBoardStyle'
import { FaCommentDots, FaHeart } from 'react-icons/fa'
import { BsFillEyeFill } from 'react-icons/bs'
import { categories, profileImg } from '../board/boardData'

const MyPageLikeRow = ({like}) => {
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
        <p className='categoryQ' onClick={() => movePage(like.board_category)}>{like.board_category}</p>
        <QnaContent onClick={() => navigate(`/board/detail/${like.board_no}`)}>
          <QnaImg>
            <img className='qnaImg' src={profileImg[Math.floor(((new Date(like.board_date).getSeconds())%10))]} alt="icon" />
          </QnaImg>
          <QnaDiv>
            <QnaMarketTitle>
              {like.board_title}
            </QnaMarketTitle>
            <QnaMarketContent>
              <FaHeart style={{margin: '0 3px 1px 2px'}} />
              {like.like_count ? like.like_count : 0}
              <FaCommentDots style={{margin: '0 3px 0 10px'}} />
              {like.comment_count ? like.comment_count : 0}
              <BsFillEyeFill style={{margin: '0 3px 0 10px'}} />
              {like.board_hit ? like.board_hit : 0}
              <span className='dateQ'>
                {new Date(like.like_date).toLocaleString('ko-KR')}
              </span>
            </QnaMarketContent>
          </QnaDiv>
        </QnaContent>
      </QnaLi>
    </>
  )
}

export default MyPageLikeRow