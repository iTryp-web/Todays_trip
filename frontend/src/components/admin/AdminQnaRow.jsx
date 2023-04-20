import React from 'react'
import { useNavigate } from 'react-router-dom'
import { profileImg } from '../board/boardData'
import { QnaContent, QnaDiv, QnaImg, QnaLi, QnaMarketContent, QnaMarketStatus, QnaMarketTitle } from '../../styles/AdminStyle'
import { MdOutlineFiberNew } from 'react-icons/md';


const AdminQnaRow = ({qna, selectedMarket}) => {
  const navigate = useNavigate()

  // 출력할 리스트 - 카테고리 조건에따라 출력위해 함수사용
  const QnaList = () => {
    return (
    <QnaLi>
      <p className='categoryQ' onClick={() => navigate(`/market/${qna.market_category}`)}>{qna.market_category}</p>
      <span className='dateQ'>
        {new Date(qna.market_date).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        })}
      </span>
      <QnaMarketStatus>
        {qna.qna_count ? (
          <span>
            <MdOutlineFiberNew className='newIcon' />
            문의 {qna.qna_count}건
          </span>
          ) : null}
      </QnaMarketStatus>
      <QnaContent onClick={() => navigate(`/market/detail/${qna.market_no}`)}>
        <QnaImg>
          <img className='qnaImg' src={profileImg[0]} />
        </QnaImg>
        <QnaDiv>
          <QnaMarketTitle>
            상품명: {qna.market_title}
          </QnaMarketTitle>
          <QnaMarketContent>
            가격: {qna.market_price}원
          </QnaMarketContent>
          <QnaMarketContent>
            판매량: {qna.sales_count}개 [매출액: {qna.sales_count ? (qna.market_price * qna.sales_count).toLocaleString('ko-KR') :  0}원]
          </QnaMarketContent>
        </QnaDiv>
      </QnaContent>
    </QnaLi>
    )
  }

  return (
    <>
      {selectedMarket === qna.market_category ? (
        QnaList()
      ) : (selectedMarket === '전체' ? (
        QnaList()
        ) : null
        )}
    </>
  )
}

export default AdminQnaRow
