import React from 'react'
import { useNavigate } from 'react-router-dom'
import { QnaContent, QnaDiv, QnaImg, QnaLi, QnaMarketContent, QnaMarketTitle } from '../../styles/MyPageBoardStyle'
import { profileImg } from '../board/boardData'
import { FaHeart } from 'react-icons/fa'

const MyPageReplyRow = ({reply}) => {
  const navigate = useNavigate()

  return (
    <>
      <QnaLi>
        <p className='titleP' onClick={() => navigate('/board/detail'+reply.board_no)}>글제목: {reply.board_title}</p>
        <QnaContent onClick={() => navigate(`/board/detail/${reply.board_no}`)}>
          <QnaImg>
            <img className='qnaImg' src={profileImg[Math.floor(((new Date(reply.comment_date).getSeconds())%10))]} alt="icon" />
          </QnaImg>
          <QnaDiv>
            <QnaMarketTitle>
              {reply.comment_content}
            </QnaMarketTitle>
            <QnaMarketContent>
              <FaHeart style={{margin: '0 3px 1px 2px'}} />
              {reply.like_count ? reply.like_count : 0}
              <span className='dateQ'>
                {new Date(reply.comment_date).toLocaleString('ko-KR')}
              </span>
            </QnaMarketContent>
          </QnaDiv>
        </QnaContent>
      </QnaLi>
    </>
  )
}

export default MyPageReplyRow