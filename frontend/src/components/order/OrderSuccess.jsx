import React from 'react'
import Bottom from '../include/Footer'
import Header from '../include/Header'
import './orderResult.css'

const OrderSuccess = () => {
  return (
    <>
      <Header/>
        <div className='order body'>
          <div className='complete sentence'>주문이 완료되었습니다.</div>
          <div className='img'><img src='/images/check.png' alt="check_icon" className='check icon'/></div>
          <div className='num'>주문 번호 : 어쩌고저쩌고</div>
          <hr/>
          <button className='order button'>주문 내역</button>
          <button className='order button home'>메인으로</button>
          <hr/>
        </div>
      <Bottom/>
    </>
  )
}

export default OrderSuccess
