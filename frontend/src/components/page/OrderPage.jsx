import React from 'react'
import Header from '../include/Header'
import OrderRow from '../order/OrderRow'
import Footer from '../include/Footer'
import { OrderDiv, OrderTitle, LineHr, OrderListDiv, OrderAddressDiv, OrderCouponDiv, PaymentButton, OrderButtonDiv, OrdererInfoDiv, OrdertyTitle, SelectList, OrdertysTitle, PointContent, OrderCalcDiv, OrdererTable, ConfirmButton, OrdererTd, OrdererTytd, OrderCalcTyDiv, OrderCalcListDiv, OrderCalcResultDiv, OrderTable, OrderItemTitle, OrderTotalSpan, OrderTotalDiv, PointUseDiv, PointInput, ConfirmSpan, OrderCouponTyDiv, OrderAgreeDiv, OrderAgreeTyDiv, OrderCancelDiv, OrderCancelTitle, CancelSpan, CancelP, OrdererTyContentTd, AgreeAllCheckDiv, InputAllCheck } from '../../styles/OrderStyle'

const OrderPage = () => {

  const couponList = null;

  const onClickPayment = () => {
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
        <OrderListDiv>
          <OrdertyTitle>주문 정보</OrdertyTitle>
          <LineHr/>
          <OrderTable>
            <thead>
              <tr>
                <th></th>
                <OrderItemTitle></OrderItemTitle>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <OrderRow/>
              <OrderRow/>
              <OrderRow/>
              <OrderRow/>
            </tbody>
          </OrderTable>
          <OrderTotalDiv>
            <OrderTotalSpan>{`합계　${28000} 원`}</OrderTotalSpan>
          </OrderTotalDiv>
        </OrderListDiv>
        <OrderCouponDiv>
          <OrdertyTitle>할인 정보</OrdertyTitle>
          <LineHr/>
          <OrderCouponTyDiv>
            <OrdertysTitle>쿠폰 할인</OrdertysTitle>
            <SelectList>
              {couponList ? 
                <option>사용 가능한 쿠폰이 존재하지 않습니다.</option>
                : 
                <option>쿠폰1</option>
              }
            </SelectList><br/>
            <OrdertysTitle>포인트</OrdertysTitle>
            <PointContent>{`사용 가능 포인트　${0} 점`}</PointContent>
            <PointUseDiv>
              <span><PointInput type="decimal" placeholder="" disabled="" pattern="[0-9]*" value="0"></PointInput></span><ConfirmSpan><ConfirmButton>모두 사용</ConfirmButton></ConfirmSpan>
            </PointUseDiv>
          </OrderCouponTyDiv>
        </OrderCouponDiv>
        <OrdererInfoDiv>
          <OrdertyTitle>예약자 정보</OrdertyTitle>
          <LineHr/>
          <OrdererTable>
            <tr>
              <OrdererTytd>예약자 이름</OrdererTytd>
              <OrdererTyContentTd>{"둘리"}</OrdererTyContentTd>
              <OrdererTd rowSpan={3}><ConfirmButton>정보 변경</ConfirmButton></OrdererTd>
            </tr>
            <tr>
              <OrdererTytd>예약자 연락처</OrdererTytd>
              <OrdererTyContentTd>{"요리보고-1111-2222"}</OrdererTyContentTd> 
            </tr>
            <tr>
              <OrdererTytd>예약자 이메일</OrdererTytd>
              <OrdererTyContentTd>{"조리봐도@email.com"}</OrdererTyContentTd> 
            </tr>
          </OrdererTable>
          </OrdererInfoDiv>
        <OrderAddressDiv>
          <OrdertyTitle>배송지 정보</OrdertyTitle>
          <LineHr/>
        </OrderAddressDiv>
        <OrderCalcDiv>
          <OrdertyTitle>결제 정보</OrdertyTitle>
          <OrderCalcTyDiv>
            <OrderCalcListDiv>{`주문 금액　${1111} 원　ㅡ　할인 금액　${0} 원`}</OrderCalcListDiv>
            <OrderCalcResultDiv>
              <span>{`결제 금액　${1111} 원`}</span>
            </OrderCalcResultDiv>
          </OrderCalcTyDiv>
        </OrderCalcDiv>
        <OrdertyTitle>결제 동의</OrdertyTitle>
        <OrderAgreeDiv>
          <OrderAgreeTyDiv>
            <AgreeAllCheckDiv>
              <InputAllCheck type={'checkbox'}/>
              <span>전체 약관 동의</span>
            </AgreeAllCheckDiv>
          </OrderAgreeTyDiv>
          <OrderCancelDiv>
            <OrderCancelTitle>예약 취소 규정</OrderCancelTitle>
            <CancelSpan>
              <CancelP>- 여행자가 여행 개시일로부터 3일 이전 통보 시: 여행 요금 전액 환불</CancelP>
              <CancelP>- 여행 개시일로부터 2일 이전 통보 시: 총 상품 금액에서 10% 공제 후 환불</CancelP>
              <CancelP>- 여행 개시일로부터 1일 이전 통보 시: 총 상품 금액에서 20% 공제 후 환불</CancelP>
              <CancelP>- 여행일 당일 ~ 투어 시작 전 통보 시: 총 상품 금액에서 30% 공제 후 환불</CancelP>
              <CancelP>※ 취소 요청 날짜와 시간은 여행 상품이 진행되는 현지 시간을 따릅니다.</CancelP>
            </CancelSpan>
          </OrderCancelDiv>
        </OrderAgreeDiv>
        <OrderButtonDiv>
          <PaymentButton onClick={onClickPayment}>결제하기</PaymentButton>
        </OrderButtonDiv>
      </OrderDiv>
      <Footer/>
    </>
  )
}

export default OrderPage