import React, { useState } from 'react'
import Header from '../include/Header'
import Footer from '../include/Footer'
import './orderResult.css'
import { Link, useLocation } from 'react-router-dom'

const PaymentResult = () => {

  const location = useLocation();
  const result = useState(location.state?.result)[0];
  let order_no = useState(location.state?.order_no)
  let error_msg = useState(location.state?.error_msg);
  
  return (
    <>
      <Header/>
        <div className='order body'>
          <div className='complete sentence'>{ result ? "주문이 완료되었습니다." : "주문에 실패하였습니다." }</div>
          <div className='img'><img src={ result ? "/images/check.png" : "/images/failed.png" } alt="result_icon" className='fail icon'/></div>
          <div className='num'>{ result ? "주문 번호 : " + order_no[0] || "" : "실패 사유 : " + error_msg[0] ||"" }</div>
          <hr/>
          <Link to={ result ? '../' : '/cart' }><button className='order button'>{result ? "주문 목록" : "이전으로" }</button></Link>
          <Link to={'/'}><button className='order button home'>메인으로</button></Link>
          <hr/>
        </div>
      <Footer/>
    </>
  )
}

export default PaymentResult