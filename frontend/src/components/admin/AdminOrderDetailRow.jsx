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
            <div className='done' >
              작성완료
            </div>
          ) : (
            <div className='admin'>
                작성가능
            </div>
          )}
        </DetailTd>
      </tr>
    </>
  )
}

export default AdminOrderDetailRow