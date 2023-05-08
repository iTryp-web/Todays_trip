import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BtnReview, DetailTd, DetailTitleTd, MarketImg, ModalBody, ReviewModal, ReviewText } from '../../styles/MypageStyle'
import { BiAddToQueue } from 'react-icons/bi'

const AdminOrderDetailRow = ({order}) => {
  const navigate = useNavigate()

  // 페이지 이동
  const pageMove = (mno) => {
    console.log(mno);
    navigate('/market/detail/'+mno)
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
          {order.market_order_date && order.market_order_date.substring(0, order.market_order_date.indexOf(' ')).substring(0, order.market_order_date.indexOf(' '))}
          <br />
          {order.market_order_date && order.market_order_date.substring(order.market_order_date.indexOf('~')+2).substring(order.market_order_date.indexOf(' '))}
        </DetailTd>
        <DetailTd>
          {order.market_count}개
        </DetailTd>
        <DetailTd>
          {order.market_count && (order.order_amount * order.market_count).toLocaleString('ko-KR')}원
        </DetailTd>
        <DetailTd>
        {order.order_status == 2 && order.r_count > 0 ? (
            <div className='done' >
              작성완료
            </div>
          ) : ( order.order_status == 2 && order.r_count === 0 ? (
            <div>
              <BiAddToQueue className='icon' />
                리뷰작성
            </div>
          ) : (
            order.order_status == 0 ? '예약중' : (
              order.order_status == 1 ? '취소' : (
                order.order_status == 3 ? '결제실패' : null)))
          )}
        </DetailTd>
      </tr>
    </>
  )
}

export default AdminOrderDetailRow