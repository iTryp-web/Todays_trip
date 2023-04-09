import React from 'react'
import Bottom from '../include/Footer'
import Header from '../include/Header'
import './orderResult.css'
import { Link } from 'react-router-dom'

const PaymentFail = () => {
  return (
    <>
      <Header/>
        <div className='order body'>
          <div className='complete sentence'>주문에 실패하였습니다.</div>
          <div className='img'><img src={"/images/failed.png"} alt="fail_icon" className='fail icon'/></div>
          <div className='num'>실패 사유 : 어쩌고저쩌고</div>
          <hr/>
          <Link to={'/'}><button className='order button'>이전으로</button></Link>
          <Link to={'/'}><button className='order button home'>메인으로</button></Link>
          <hr/>
        </div>
      <Bottom/>
    </>
  )
}

export default PaymentFail
