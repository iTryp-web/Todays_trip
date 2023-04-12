import React from 'react'
import Header from '../include/Header'
import OrderRow from '../order/OrderRow'
import Footer from '../include/Footer'
import { OrderDiv, OrderTitle, LineHr, OrderListDiv, OrderInfoDiv, OrderAddressDiv, OrderCouponDiv, PaymentButton, OrderButtonDiv, OrdererInfoDiv, OrdertyTitle, SelectList } from '../../styles/OrderStyle'

const OrderPage = () => {

  function onClickPayment() {
    const { IMP } = window;
    IMP.init(process.env.REACT_APP_IMPORT_INIT_KEY);
    
    const data = {
      pg: 'html5_inicis',                               // PG사
      pay_method: 'card',                               // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`,      // 주문번호
      amount: 100,                                      // 결제금액
      name: '아임포트 결제 데이터 분석',                // 주문명
      buyer_name: sessionStorage.getItem('user_name'),  // 구매자 이름
      buyer_tel: '01012341234',                         // 구매자 전화번호
      buyer_email: 'example@example',                   // 구매자 이메일
      buyer_addr: '신사동 661-16',                      // 구매자 주소
      buyer_postcode: '06018',                          // 구매자 우편번호
    };

    function callback(response) {
      const {
        success,
        merchant_uid,
        error_msg,
      } = response;
    
      if (success) {
        console.log(merchant_uid + ':: 결제 성공');
      } else {
        console.log(`${merchant_uid} :: 결제 실패: ${error_msg}`);
      }
    }
  
    IMP.request_pay(data, callback);
  }

  return (
    <>
      <Header/>
      <OrderDiv>
        <OrderTitle>예약하기</OrderTitle>
        <LineHr/>
        <OrderListDiv>
          <OrdertyTitle>주문 정보</OrdertyTitle>
          <OrderRow/>
        </OrderListDiv>
        <OrderCouponDiv>
          <OrdertyTitle>할인 정보</OrdertyTitle>
          쿠폰 할인<br/>
          <SelectList>
            <option>쿠폰1</option>
            <option>쿠폰2</option>
            <option>쿠폰3</option>
            <option>쿠폰4</option>
          </SelectList><br/>
          포인트
        </OrderCouponDiv>
        <OrdererInfoDiv>
          <OrdertyTitle>주문자 정보</OrdertyTitle>
          </OrdererInfoDiv>
        <OrderAddressDiv>
          <OrdertyTitle>배송지 정보</OrdertyTitle>
          </OrderAddressDiv>
        <OrderButtonDiv>
          결제 동의 약관<br/>
          <PaymentButton onClick={onClickPayment}>결제하기</PaymentButton>
        </OrderButtonDiv>
      </OrderDiv>
      <Footer/>
    </>
  )
}

export default OrderPage