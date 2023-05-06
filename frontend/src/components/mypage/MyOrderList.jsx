import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../include/Header';
import Footer from '../include/Footer';
import { NoneDiv, OrderSection, OrderTable, OrderTd, OrderTh, TopText } from '../../styles/MypageStyle';
import MyOrderRow from './MyOrderRow';
import { myOrderListDB } from '../../service/myPageLogic';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const MyOrderList = () => {
  // 화면전환
  const navigate = useNavigate()
  // 페이지네이션
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  // 아이디, 닉네임 담을 변수
  const [userId] = useState(window.sessionStorage.getItem('user_id'))
  const [userNickname] = useState(window.sessionStorage.getItem('user_nickname'))
  const [userRole] = useState(window.sessionStorage.getItem('user_role'))

  // 로그인안했으면 접근불가
  useEffect(() => {
    if(!userId) {
      navigate('/')
    }
  }, [userId])

  // 주문 목록 담을 변수
  const [orderList, setOrderList] = useState([])
  
  useEffect(() => {
    const myOrderList = async() => {
      const user_info = {
        user_id: userId
      }
      const res = await myOrderListDB(user_info)
      console.log(res.data);
      const temp = JSON.stringify(res.data)
      const jsonDoc = JSON.parse(temp)
      if(jsonDoc.length > 0) {
        const list1 = []
        for(let i=0; i<jsonDoc.length; i++) {
          const obj = {
            order_no: jsonDoc[i].ORDER_NO,
            order_payment: jsonDoc[i].ORDER_PAYMENT,
            order_date: jsonDoc[i].ORDER_DATE,
            order_status: jsonDoc[i].ORDER_STATUS,
            market_title: jsonDoc[i].MARKET_TITLE,
            item_count: jsonDoc[i].ITEM_COUNT,
            file_url: jsonDoc[i].FILE_URL,
            r_count: jsonDoc[i].R_COUNT,
          }
          console.log(obj);
          list1.push(obj)
        }
        setOrderList(list1)
      }
    }
    myOrderList()
  }, [userId])

  return (
    <>
    <Header />
    <OrderSection>
      <TopText onClick={() => navigate('/mypage')}>
      <AiOutlineArrowLeft className='topIcon' />
        내 주문 목록
      </TopText>
      <OrderTable>
        <colgroup>
          <col style={{ width: "15%" }} />
          <col style={{ width: "55%" }} />
          <col style={{ width: "15%" }} />
          <col style={{ width: "15%" }} />
        </colgroup>

        <thead>
          <tr>
            <OrderTh>주문일</OrderTh>
            <OrderTh>주문상품</OrderTh>
            <OrderTh>결제금액</OrderTh>
            <OrderTh>주문상태</OrderTh>
          </tr>
        </thead>

        <tbody>
          {orderList && orderList.length > 0 ? (
            orderList.map((order) => (
              <MyOrderRow key={order.order_no} order={order} />))
            ) : (
            <tr style={{textAlign:"center"}}>
              <OrderTd colSpan={4}>
                <NoneDiv>주문내역이 없습니다.</NoneDiv>
              </OrderTd>
            </tr>
            )}
        </tbody>
      </OrderTable>
    </OrderSection>
    <Footer />
    </>
  )
}

export default MyOrderList