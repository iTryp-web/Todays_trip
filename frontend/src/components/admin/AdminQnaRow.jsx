import React from 'react'
import { CommentBox, CommentContent, CommentDate, CommentDiv, CommentImg, CommentUser, PostContent, PostFooter, PostLi, Profile, UserImg, Username } from '../../styles/BoardStyle'
import { Link, useNavigate } from 'react-router-dom'
import { profileImg } from '../board/boardData'
import { QnaContent, QnaDiv, QnaImg, QnaLi, QnaMarketContent, QnaMarketTitle } from '../../styles/AdminStyle'

const AdminQnaRow = ({qna}) => {
  const navigate = useNavigate()
  return (
    <>
      <QnaLi>
        <p className='categoryQ' onClick={() => navigate(`/market/${qna.market_category}`)}>{qna.market_category}</p>
        <span className='dateQ'>
            {new Date(qna.market_date).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            })}
          </span>
          <QnaContent onClick={() => navigate(`/market/detail/${qna.market_no}`)}>
            <QnaImg>
              <img className='qnaImg' src={profileImg[0]} />
            </QnaImg>
            <QnaDiv>
              <QnaMarketTitle>
                상품명: {qna.market_title}
              </QnaMarketTitle>
              <QnaMarketContent status={0}>
                가격: {qna.market_price}원
              </QnaMarketContent>
              <QnaMarketContent status={qna.qna_count}>
                새로운 문의: {qna.qna_count ? qna.qna_count : 0}
              </QnaMarketContent>
            </QnaDiv>
          </QnaContent>
      </QnaLi>
    </>
  )
}

export default AdminQnaRow
