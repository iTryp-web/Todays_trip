import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { adminOrderDetailDB, adminOrderInfoEditDB } from '../../service/adminLogic'
import { OrderDiv } from '../../styles/OrderStyle'
import Header from '../include/Header'
import Footer from '../include/Footer'
import { OrderDetailSection, OrderTotalSpan, OrderTotalDiv, LineHr, OrderCalcDiv } from '../../styles/MypageStyle'
import { OrderListDiv, OrderCouponDiv, OrdertyTitle, OrdertysTitle, OrdererTable, OrdererTytd, OrderCalcTyDiv, OrderCalcListDiv, OrderCalcResultDiv, OrderTable, OrderCouponTyDiv, OrdererTyContentTd } from '../../styles/OrderStyle'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import AdminOrderDetailRow from './AdminOrderDetailRow'
import { BtnEdit, BtnEditDB, EditInput, EditModal, EditP, ModalBody, OrdererInfoDiv } from '../../styles/AdminStyle'
import { HiOutlineX } from 'react-icons/hi'
import { adminOrderUpdateDB } from '../../service/adminLogic'

const AdminOrderDetail = () => {
  const navigate = useNavigate()

   // 로그인할때 세션스토리지에 담았다가 꺼낼 것!
  // 아이디, 닉네임 담을 변수
  const [userId] = useState(window.sessionStorage.getItem('user_id'))
  const [userNickname] = useState(window.sessionStorage.getItem('user_nickname'))
  const [userRole] = useState(window.sessionStorage.getItem('user_role'))
  
  useEffect(() => {
    if(userRole != 2) {
      navigate('/')
    }
  }, [userId, userRole])

  // 파라미터의 주문번호
  let {ono} = useParams()
  console.log("ono => " + ono);
  // 새로고침용
  const [start, setStart] = useState()
  // 디테일 담을 변수
  const [orders, setOrders] = useState([{}])
  // 정보 불러오기
  useEffect(() => {
    const orderDetail = async() => {
      const detail = {
        order_no: ono
      }
      const res = await adminOrderDetailDB(detail)
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
      }
    }
    orderDetail()
  }, [ono, start])

  // 페이지 이동
  const movePage = () => {
    navigate('/admin/order')
  }

  // 모달창 표시 변수
  const [isView, setIsView] = useState(false)
   // 예약자 이름
  const [name, setName] = useState('')
  // 예약자 번호
  const [phone, setPhone] = useState('')
  // 예약자 메일
  const [email, setEmail] = useState('')
  // 수정사항 적용 메소드
  const handleName = (e) => {
    console.log(e);
    setName(e)
  }
  const handlePhone = (e) => {
    console.log(e);
    setPhone(e)
  }
  const handleEmail = (e) => {
    console.log(e);
    setEmail(e)
  }
  // 정보 수정 버튼
  const btnEdit = () => {
    console.log(name);
    console.log(phone);
    console.log(email);
    if(name.length > 0 || phone.length > 0 || email.length > 0) {
      const orderEdit = async() => {
        const editInfo = {
          order_no: ono,
          order_name: name,
          order_phone: phone,
          order_email: email,
        }
        const res = await adminOrderInfoEditDB(editInfo)
        console.log(res.data);
      }
      orderEdit()
      setIsView(false)
      setStart(new Date())
    } else {
      setIsView(false)
    }
  }
  
  return (
    <>
      <Header />
      <OrderDetailSection>
        <p className='topText' onClick={() => movePage()}>
          <AiOutlineArrowLeft className='topIcon' />
          주문 목록
        </p>
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
                  <AdminOrderDetailRow key={order.detail_no} order={order} />
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
            <BtnEdit onClick={() => setIsView(true)}>수정하기</BtnEdit>
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
      {isView ? (
        <EditModal onClick={() => setIsView(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <div>

            <HiOutlineX className='x-icon' onClick={() => setIsView(false)} />
            <EditP>예약자 이름</EditP>
            <EditInput type="text" onChange={(e) => handleName(e.target.value)} defaultValue={orders[0].order_name} />
            <EditP>예약자 연락처</EditP>
            <EditInput type="text" onChange={(e) => handlePhone(e.target.value)} defaultValue={orders[0].order_phone} />
            <EditP>예약자 이메일</EditP>
            <EditInput type="text" onChange={(e) => handleEmail(e.target.value)} defaultValue={orders[0].order_email} />
            <BtnEditDB onClick={() => btnEdit()}>등록하기</BtnEditDB>
            </div>
          </ModalBody>
        </EditModal>
      ) : null}
      <Footer />
    </>
  )
}

export default AdminOrderDetail