import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { adminOrderDetailDB } from '../../service/adminLogic'
import { OrderDiv } from '../../styles/OrderStyle'

const AdminOrderDetail = () => {
  const navigate = useNavigate()
  // 로그인할때 세션스토리지에 담았다가 꺼낼 것!
  // 아이디, 닉네임 담을 변수
  const [userId] = useState(window.sessionStorage.getItem('user_id'))
  const [userNickname] = useState(window.sessionStorage.getItem('user_nickname'))
  const [userRole] = useState(window.sessionStorage.getItem('user_role'))
  // 파라미터의 주문번호
  let {orderNo} = useParams()
  console.log(orderNo);
  // 관리자외 접근 차단
  useEffect(() => {
    if(userRole != 2) {
      alert('접근 권한이 없습니다.')
      navigate('/')
    }
  }, [userId])
  // 디테일 담을 변수
  const [orders, setOrders] = useState([{}])
  // 정보 불러오기
  useEffect(() => {
    const orderDetail = async() => {
      const detail = {
        order_no: orderNo
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
            market_category: jsonDoc[i].MARKET_CATEGORY,
            market_title: jsonDoc[i].MARKET_TITLE,
            market_count: jsonDoc[i].MARKET_COUNT,
            order_amount: jsonDoc[i].ORDER_AMOUNT,
            order_payment: jsonDoc[i].ORDER_PAYMENT,
            order_date: jsonDoc[i].ORDER_DATE,
            pay_method: jsonDoc[i].PAY_METHOD,
            order_status: jsonDoc[i].ORDER_STATUS,
          }
          console.log(obj);
          list.push(obj)
        }
      setOrders(list)
      }
      orderDetail()
    }
  }, [orderNo])

  return (
    <>

    </>
  )
}

export default AdminOrderDetail