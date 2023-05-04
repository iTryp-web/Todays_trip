import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { myOrderDetailDB } from '../../service/myPageLogic'
import Header from '../include/Header'
import Footer from '../include/Footer'
import MyOrderDetailRow from './MyOrderDetailRow'
import { OrderDetailSection, OrderDiv, OrderTotalSpan, OrderTotalDiv, LineHr, TopText } from '../../styles/MypageStyle'
import { OrderListDiv, OrderCouponDiv, OrdererInfoDiv, OrdertyTitle, OrdertysTitle, OrderCalcDiv, OrdererTable, OrdererTytd, OrderCalcTyDiv, OrderCalcListDiv, OrderCalcResultDiv, OrderTable, OrderCouponTyDiv, OrdererTyContentTd } from '../../styles/OrderStyle'
import { AiOutlineArrowLeft } from 'react-icons/ai';


const MyOrderDetail = () => {
  const navigate = useNavigate()
  
  // 로그인할때 세션스토리지에 담았다가 꺼낼 것!
  // 아이디, 닉네임 담을 변수
  const [userId] = useState(window.sessionStorage.getItem('user_id'))
  const [userNickname] = useState(window.sessionStorage.getItem('user_nickname'))
  const [userRole] = useState(window.sessionStorage.getItem('user_role'))

  // 파라미터의 주문번호
  let {ono} = useParams()
  console.log("ono => " + ono);
  
  // 디테일 담을 변수
  const [orders, setOrders] = useState([{}])
  // 새로고침용
  const [start, setStart] = useState()
  
  // 정보 불러오기
  useEffect(() => {
    const orderDetail = async() => {
      console.log('userId=> ' + userId);
      const detail = {
        order_no: ono,
        user_id: userId
      }
      const res = await myOrderDetailDB(detail)
      console.log(res.data);
      const temp = JSON.stringify(res.data)
      const jsonDoc = JSON.parse(temp)
      const list = []
      if(jsonDoc.length > 0) {
        for(let i=0; i<jsonDoc.length; i++) {
          const obj = {
            detail_no: jsonDoc[i].DETAIL_NO,
            market_no: jsonDoc[i].MARKET_NO,
            market_title: jsonDoc[i].MARKET_TITLE,
            user_id: jsonDoc[i].USER_ID,
            order_name: jsonDoc[i].ORDER_NAME,
            order_email: jsonDoc[i].ORDER_EMAIL,
            order_phone: jsonDoc[i].ORDER_PHONE,
            coupon_no: jsonDoc[i].COUPON_NO,
            coupon_name: jsonDoc[i].COUPON_NAME,
            coupon_rate: jsonDoc[i].COUPON_RATE, // 쿠폰 할인율
            coupon_max: jsonDoc[i].COUPON_MAX, // 최대할인금액
            market_count: jsonDoc[i].MARKET_COUNT, // 상품수량
            order_amount: jsonDoc[i].ORDER_AMOUNT, // 상세 주문금액
            market_order_date: jsonDoc[i].MARKET_ORDER_DATE, // 예약 날짜
            order_total: jsonDoc[i].ORDER_TOTAL, // 주문 총금액
            order_status: jsonDoc[i].ORDER_STATUS, // 주문 상태
            pay_method: jsonDoc[i].PAY_METHOD, // 0카드 1카카페 2무통장 3가상계좌
            pay_date: jsonDoc[i].PAY_DATE,
            pay_total: jsonDoc[i].PAY_TOTAL, // 결제 총금액
            file_url: jsonDoc[i].FILE_URL,
            r_count: jsonDoc[i].R_COUNT,
          }
          console.log(obj);
          list.push(obj)
        }
        setOrders(list)
      } else {
        navigate('/')
      }
    }
    orderDetail()
  }, [ono, start])

  return (
    <>
      <Header />
      <OrderDetailSection>
        <TopText className='topText' onClick={() => navigate('/mypage/orderlist')}>
          <AiOutlineArrowLeft className='topIcon' />
          주문 목록
        </TopText>
        <OrderDiv>
          <OrderListDiv>
            <OrdertyTitle>주문 정보</OrdertyTitle>
            <LineHr/>
            <OrderTable>
              <colgroup>
                <col style={{ width: "10%" }} />
                <col style={{ width: "40%" }} />
                <col style={{ width: "15%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "15%" }} />
                <col style={{ width: "10%" }} />
              </colgroup>
              <thead>
                <tr style={{color: '#979797'}}>
                  <th colSpan="2">상품</th>
                  <th>예약일</th>
                  <th>개수</th>
                  <th>결제액</th>
                  <th>리뷰</th>
                </tr>
              </thead>
              <br />
              <tbody>
                {orders && orders.map((order) => (
                  <MyOrderDetailRow key={order.detail_no} order={order} setStart={setStart} />
                ))}
              </tbody>
            </OrderTable>
            <OrderTotalDiv>
              <OrderTotalSpan>
                {`합계 ${orders[0].order_total ? orders[0].order_total.toLocaleString('ko-KR') : 0}원`}
              </OrderTotalSpan>
            </OrderTotalDiv>
          </OrderListDiv>
          
          <br />
          <OrderCouponDiv>
            <OrdertyTitle>할인 정보</OrdertyTitle>
            <LineHr/>
            <OrderCouponTyDiv>
              <OrdertysTitle>쿠폰 할인</OrdertysTitle>
              <div style={{fontSize:'14px'}}>
                {orders[0].coupon_no && orders[0].coupon_name ? (
                  orders[0].order_total > orders[0].coupon_max ? (
                    orders[0].coupon_name +' ' + orders[0].coupon_max.toLocaleString('ko-KR') + '원'
                  ) : (
                    (orders[0].coupon_name +' ' + orders[0].order_total/orders[0].coupon_rate).toLocaleString('ko-KR') + '원'
                  )
                ) : (
                  '0원'
                )}
              </div>
              <br/>
              <OrdertysTitle>포인트</OrdertysTitle>
              <div style={{fontSize:'14px'}}>
                {`사용 포인트 ${0}점`}
              </div>
            </OrderCouponTyDiv>
          </OrderCouponDiv>

          <br />
          <OrdererInfoDiv>
            <OrdertyTitle>예약자 정보</OrdertyTitle>
            <LineHr/>
            <OrdererTable>
              <tbody>
                <tr>
                  <OrdererTytd>예약자 이름</OrdererTytd>
                  <OrdererTyContentTd style={{fontSize:'14px'}}>
                    {orders[0].order_name}
                  </OrdererTyContentTd>
                </tr>
                <tr>
                  <OrdererTytd>예약자 연락처</OrdererTytd>
                  <OrdererTyContentTd style={{fontSize:'14px'}}>
                    {orders[0].order_phone && orders[0].order_phone.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)}
                    </OrdererTyContentTd> 
                </tr>
                <tr>
                  <OrdererTytd>예약자 이메일</OrdererTytd>
                  <OrdererTyContentTd style={{fontSize:'14px'}}>{orders[0].order_email}</OrdererTyContentTd> 
                </tr>
              </tbody>
            </OrdererTable>
            </OrdererInfoDiv>

            <br />
          <OrderCalcDiv>
            <OrdertyTitle>결제 정보</OrdertyTitle>
            <OrderCalcTyDiv>
              <OrderCalcListDiv style={{fontSize:'14px'}}>
                {`주문 금액 ${orders[0].order_total && orders[0].order_total.toLocaleString('ko-KR')}원
                - 할인 금액 ${orders[0].coupon_no ? (
                  orders[0].order_total > orders[0].coupon_max ? (
                    orders[0].coupon_max.toLocaleString('ko-KR') + '원'
                  ) : (
                    (orders[0].order_total/orders[0].coupon_rate).toLocaleString('ko-KR') + '원'
                  )
                ) : (
                  '0'
                )}원`}
              </OrderCalcListDiv>
              <OrderCalcListDiv style={{fontSize:'14px'}}>
                {`결제 방식: ${orders[0].pay_method == 0 ? '카드' : (
                  orders[0].pay_method == 1 ? '카카오페이' : (
                    orders[0].pay_method == 2 ? '무통장입금' : '가상계좌'
                  )
                )}`}
              </OrderCalcListDiv>
              <OrderCalcListDiv style={{fontSize:'14px'}}>
                {`결제일: ${orders[0].pay_date}`}
              </OrderCalcListDiv>
              <OrderCalcResultDiv>
                  {`결제 금액 ${orders[0].pay_total && orders[0].pay_total.toLocaleString('ko-KR')}원`}
              </OrderCalcResultDiv>
            </OrderCalcTyDiv>
          </OrderCalcDiv>
        </OrderDiv>
      </OrderDetailSection>
      <Footer />
    </>
  )
}

export default MyOrderDetail