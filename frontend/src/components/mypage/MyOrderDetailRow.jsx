import React from 'react'
import { DetailTd, DetailTitleTd, MarketImg } from '../../styles/MypageStyle'
import { useNavigate } from 'react-router-dom'
import { BiAddToQueue, BiBookAdd, BiCommentAdd } from 'react-icons/bi'

const MyOrderDetailRow = ({order, ono}) => {
  const navigate = useNavigate()

  // 페이지 이동
  const pageMove = (mno) => {
    console.log(mno);
    navigate('/market/detail/'+mno)
  }

  // 리뷰쓰기
  const newReview = (dno) => {
    console.log(dno + ono);
  }

  // 리뷰수정
  const editReview = (dno) => {
    console.log(dno + ono);
  }

  return (
    <>
      <tr>
        <DetailTd onClick={() => pageMove(order.market_no)}>
          <MarketImg src={order.file_url} />
        </DetailTd>
        <DetailTitleTd onClick={() => pageMove(order.market_no)}>
          {order.market_title}
        </DetailTitleTd>
        <DetailTd>
          {order.market_order_date}
        </DetailTd>
        <DetailTd>
          {order.market_count}개
        </DetailTd>
        <DetailTd>
          {order.market_count && (order.order_amount * order.market_count).toLocaleString('ko-KR')}원
        </DetailTd>
        <DetailTd>
          {order.r_count == 1 ? (
            <div className='edit' onClick={() => editReview(order.detail_no)} >
              리뷰수정
            </div>
          ) : (
            <div onClick={() => newReview(order.detail_no)}>
              <BiAddToQueue className='icon' />
                리뷰작성
            </div>
          )}
        </DetailTd>
      </tr>
    </>
  )
}

export default MyOrderDetailRow