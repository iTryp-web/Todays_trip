import React from 'react'
import { useNavigate } from 'react-router-dom'
import { OrderImg, OrderRowTd, OrderSpan } from '../../styles/MypageStyle'
import { BiAddToQueue } from 'react-icons/bi';

const MyOrderRow = ({order}) => {
  const navigate = useNavigate()

  // 디테일로 이동
  const toDetail = (ono, status) => {
    console.log(ono);
    if(status < 3) {
      navigate('/mypage/orderdetail/'+ono)
    }
  }

  return (
    <>
      <tr onClick={() => toDetail(order.order_no, order.order_status)}>
        <OrderRowTd status={order.order_status}>
          {order.order_date}
        </OrderRowTd>

        <OrderRowTd status={order.order_status}>
          <OrderImg src={order.file_url} alt="orderimg" />
          <OrderSpan status={order.order_status}>{order.item_count == 1 ? (
            order.market_title
            ) : (
            order.market_title + ' 외 ' + (order.item_count-1) + '건'
            )}
          </OrderSpan>
        </OrderRowTd>

        <OrderRowTd status={order.order_status}>
          {order.order_payment ? (order.order_payment.toLocaleString()+`원`) : '0원'}
        </OrderRowTd>

        <OrderRowTd status={order.order_status}>
          {order.order_status == 0 ? ('예약중') : (
            order.order_status == 1 ? ('취소') : (
              order.order_status == 2 ? (
                order.r_count == order.item_count ? '판매완료' : (
                  <div>
                    <BiAddToQueue className='icon' />
                    리뷰작성
                  </div>
                )
                ) : ('결제실패'))
          )}
        </OrderRowTd>
      </tr>
    </>
  )
}

export default MyOrderRow