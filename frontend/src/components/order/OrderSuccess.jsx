import React from 'react'
import Bottom from '../include/Bottom'
import Header from '../include/Header'
import check_icon from '../../images/check.png'
import './orderSuccess.css'
import { Button } from 'react-bootstrap'

const OrderSuccess = () => {
  return (
    <>
      <Header/>
        <div className='order body'>
          <hr/>
          <div className='complete_sentence'>주문이 완료되었습니다.</div>
          <div className='img'><img src={check_icon} alt="check_icon" className='check_icon'/></div>
          {/* <BButon */}
          <Button>주문 내역</Button>&nbsp;&nbsp;
          <Button>홈으로</Button>
          <hr/>
        </div>
      <Bottom/>
    </>
  )
}

export default OrderSuccess
