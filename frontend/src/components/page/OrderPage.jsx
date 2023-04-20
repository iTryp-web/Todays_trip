import React, { useEffect } from 'react'
import Header from '../include/Header'
import OrderRow from '../order/OrderRow'
import Footer from '../include/Footer'
import { OrderDiv, OrderTitle, LineHr, OrderListDiv, OrderAddressDiv, OrderCouponDiv, PaymentButton, OrderButtonDiv, OrdererInfoDiv, OrdertyTitle, 
         SelectList, OrdertysTitle, OrderCalcDiv, OrdererTable, ConfirmButton, OrdererTytd, OrderCalcTyDiv, OrderCalcListDiv, OrderCalcResultDiv, 
         OrderTable, OrderItemTitle, OrderTotalSpan, OrderTotalDiv, PointUseDiv, PointInput, ConfirmSpan, OrderCouponTyDiv, OrderAgreeDiv, OrderAgreeTyDiv, 
         OrderCancelDiv, OrderCancelTitle, CancelSpan, CancelP, OrdererTyContentTd, AgreeAllCheckDiv, InputAllCheck, AddressTable, AddressTitleTd, 
         AddressButton, AddressInput, AgreeCheckDiv } from '../../styles/OrderStyle'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { getOrderPage } from '../../service/orderLogic'

const OrderPage = () => {

  const location = useLocation();
  const [ orderItems ] = useState(location.state?.orderItems);

  //사용 가능한 쿠폰 리스트 관리
  let couponList = [];
  const [cList, setCList] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  const cartList = orderItems;
  let price = 0;
  let count = 0;
  if(orderItems !== undefined && orderItems.length > 0) {
    orderItems.forEach(cart => {
      price += cart.marketPrice * cart.marketCnt;
      count += cart.marketCnt;
    });
  }

  const handleReserveName = () => {

  }

  useEffect(() => {
    const getUserInfo = async () => {
      const user = { user_id: "test1" };
      // const user = { user_id: sessionStorage.getItem('user_id') };
      await getOrderPage(user).then((res) => {
        if(res.data != null){
          console.log(res.data);
          couponList = res.data.couponList;
          console.log(couponList);
          setUserInfo(res.data.userInfo);
          console.log(res.data.userInfo);
          console.log(userInfo);
          console.log(userInfo.user_name);
          setCList(couponList);
          console.log(couponList[0]);
        } else {
          
        }
      })
    }
    getUserInfo();
  }, [])

  const getPostCode = () => {
  }

  //결제 API 실행
  const onClickPayment = () => {
    const { IMP } = window;
    IMP.init(process.env.REACT_APP_IMPORT_INIT_KEY);
    
    const data = {
      pg: 'html5_inicis',                                                                                 // PG사
      pay_method: 'card',                                                                                 // 결제수단
      merchant_uid:  `mid_${new Date().getTime()}`,                                                       // 주문번호
      amount: price,                                                                                      // 결제금액
      name: cartList[0].marketName + cartList.length != 1 ? "외 " + (cartList.length - 1) +  " 건" : '',  // 주문명
      buyer_name: userInfo.user_name,                                                                     // 구매자 이름
      buyer_tel: userInfo.user_phone,                                                                     // 구매자 전화번호
      buyer_email: userInfo.user_email,                                                                   // 구매자 이메일
      buyer_addr: userInfo.user_addr + " " + userInfo.user_addr_detail,                                   // 구매자 주소
      buyer_postcode: userInfo.user_zipcode,                                                              // 구매자 우편번호
    };

    function callback(response) {
      const {
        success,
        merchant_uid,
        error_msg,
      } = response;
    
      if (success) {
        //결제 정보 DB에 넣기 처리
        console.log(merchant_uid + ':: 결제 성공');
      } else {
        //주문 정보 DB에서 삭제 처리
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
              {cartList.map((cart, index) => (
                <OrderRow key={index} cart={cart}/>
              ))}
            </tbody>
          </OrderTable>
          <OrderTotalDiv>
            <OrderTotalSpan>{`합계　${price} 원`}</OrderTotalSpan>
          </OrderTotalDiv>
        </OrderListDiv>
        <OrderCouponDiv>
          <OrdertyTitle>할인 정보</OrdertyTitle>
          <LineHr/>
          <OrderCouponTyDiv>
            <OrdertysTitle>쿠폰 할인</OrdertysTitle>
            <SelectList>
              { cList.length > 0 ? 
                cList.map((coupon, index) => (
                  <option key={index}>{coupon.COUPON_NAME} ({coupon.COUPON_DATE})</option>
                ))
                : 
                <option>사용 가능한 쿠폰이 존재하지 않습니다.</option>
              }
            </SelectList><br/>
            <OrdertysTitle>포인트</OrdertysTitle>
            <div>{`사용 가능 포인트　${0} 점`}</div>
            <PointUseDiv>
              <span><PointInput type="decimal" placeholder="" disabled="" pattern="[0-9]*" defaultValue="0"></PointInput></span><ConfirmSpan><ConfirmButton>모두 사용</ConfirmButton></ConfirmSpan>
            </PointUseDiv>
          </OrderCouponTyDiv>
        </OrderCouponDiv>
        <OrdererInfoDiv>
          <OrdertyTitle>예약자 정보</OrdertyTitle>
          <LineHr/>
          <OrdererTable>
            <tbody>
              <tr>
                <OrdererTytd>예약자 이름</OrdererTytd>
                <OrdererTyContentTd><AddressInput type='text' style={{width:"300px"}} onChange={handleReserveName} defaultValue={userInfo.user_name || ''} /></OrdererTyContentTd>
              </tr>
              <tr>
                <OrdererTytd>예약자 연락처</OrdererTytd>
                <OrdererTyContentTd><AddressInput type='text' style={{width:"300px"}} defaultValue={userInfo.user_phone || ''}/></OrdererTyContentTd> 
              </tr>
              <tr>
                <OrdererTytd>예약자 이메일</OrdererTytd>
                <OrdererTyContentTd><AddressInput type='text' style={{width:"300px"}} defaultValue={userInfo.user_email || ''}/></OrdererTyContentTd> 
              </tr>
            </tbody>
          </OrdererTable>
          </OrdererInfoDiv>
        <OrderAddressDiv>
          <OrdertyTitle>배송지 정보</OrdertyTitle>
          <LineHr/>
          <AddressTable>
            <tbody>
              <tr>
                <AddressTitleTd>받는 사람</AddressTitleTd>
                <td><AddressInput type='text' style={{width:"250px"}} defaultValue={userInfo.user_name || ''}/></td>
              </tr>
              <tr>
                <AddressTitleTd>연락처</AddressTitleTd>
                <td><AddressInput type='text' style={{width:"250px"}} defaultValue={userInfo.user_phone || ''}/></td>
              </tr>
              <tr>
                <AddressTitleTd rowSpan={3}>주소</AddressTitleTd>
                <td><AddressButton onClick={getPostCode}>주소찾기</AddressButton><AddressInput type="text" id='postCode' style={{width:"166px"}} defaultValue={userInfo.user_zipcode || ''} disabled/></td>
              </tr>
              <tr>
                <td><AddressInput type="text" style={{width:"400px"}} defaultValue={userInfo.user_address || ''} disabled/></td>
              </tr>
              <tr>
                <td width={'270px'}>
                  <AddressInput type="text" placeholder='상세주소 입력' style={{width:"400px"}} defaultValue={userInfo.user_address_detail || ''} />
                </td>
              </tr>
            </tbody>
          </AddressTable>
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
              <span>아래 내용에 모두 동의합니다. (필수)</span>
              <LineHr/>
            </AgreeAllCheckDiv>
            <AgreeCheckDiv>
              <InputAllCheck type={'checkbox'}/>
              <span>본인은 만 14세 이상이며, 주문 내용과 예약 취소 규정을 확인하였습니다.</span><br/>
              <InputAllCheck type={'checkbox'}/>
              <span>(주)오늘의 여행은 원활한 서비스 제공을 위해 최소한의 범위 내에서 개인정보를 수집, 이용 및 제공합니다.</span><br/>
            </AgreeCheckDiv>
          </OrderAgreeTyDiv>
          <OrderCancelDiv>
            <OrderCancelTitle>예약 취소 규정</OrderCancelTitle>
            <CancelSpan>
              <CancelP>- 여행자가 여행 개시일로부터 5일 이전 통보 시: 여행 요금 전액 환불</CancelP>
              <CancelP>- 여행 개시일로부터 3일 이전 통보 시: 총 상품 금액에서 20% 공제 후 환불</CancelP>
              <CancelP>- 여행 개시일로부터 1일 이전 통보 시: 총 상품 금액에서 30% 공제 후 환불</CancelP>
              <CancelP>- 여행일 당일 ~ 투어 시작 전 통보 시: 총 상품 금액에서 50% 공제 후 환불</CancelP>
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