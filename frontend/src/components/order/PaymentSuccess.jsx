import React from 'react'
import Bottom from '../include/Bottom'
import Header from '../include/Header'
import './orderResult.css'
import { Link } from 'react-router-dom'

const PaymentSuccess = ({result}) => {

  return (
    <>
      <Header/>
        <div className='order body'>
          <div className='complete sentence'>주문이 완료되었습니다.</div>
          <div className='img'><img src={"/images/check.png"} alt="check_icon" className='check icon'/></div>
          <div className='num'>주문 번호 : 어쩌고저쩌고</div>
          <hr/>
          <Link to={'/'}><button className='order button'>주문 내역</button></Link>
          <Link to={'/'}><button className='order button home'>메인으로</button></Link>
          <hr/>
        </div>
      <Bottom/>
    </>
  )
}

export default PaymentSuccess
