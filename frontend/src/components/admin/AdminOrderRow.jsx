import React from 'react'
import { ReportRow, ReportTr } from '../../styles/AdminStyle';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { orderResult } from './adminData';
import { useState } from 'react';
import { useEffect } from 'react';
import { adminOrderUpdateDB } from '../../service/adminLogic';
import { useNavigate } from 'react-router-dom';

const AdminOrderRow = ({order, refresh}) => {
  const navigate = useNavigate()
  // 상태 변수
  const [selected, setSelected] = useState()
  useEffect(() => {
    orderResult.map((item) => {
      if(item.resultNo == order.order_status) {
        setSelected(item.resultText)
      }
    })
  }, [order])

  // 디테일 페이지 이동
  const btnDetail = (ono) => {
    console.log('btnDetail' + ono)
    navigate('/admin/orderdetail/'+ono)
}

  // 상태 적용 버튼
  const btnApply = async(ono, uid) => {
    let result = 0
    orderResult.map((item) => {
      if(item.resultText === selected) {
        result = item.resultNo
      }
    })
    console.log('btnApply=> ' + ono + uid + result);
    const order = {
      user_id: uid,
      order_no: ono,
      order_status: result,
    }
    const res = await adminOrderUpdateDB(order)
    console.log(res.data);
    refresh()
  }

  return (
    <>
      <ReportTr result={order.order_status}>
        <th className='reportItemTd' onClick={() => btnDetail(order.order_no)}>
          {order.order_no}
        </th>
        <th className='reportItemTd' onClick={() => btnDetail(order.order_no)}>
          {order.user_id}
        </th>
        <th className='reportItemTd' onClick={() => btnDetail(order.order_no)}>
          {order.order_payment}원
        </th>
        <th className='reportItemTd' onClick={() => btnDetail(order.order_no)}>
          {order.order_date}
        </th>
        <th>
          <ReportRow>
            <DropdownButton className='categoryDropdown' variant=""
              title={selected}>
              {orderResult.map((item)=>(
                  <Dropdown.Item as="button" key={item.resultText} onClick={()=>{
                    setSelected(item.resultText); 
                  }}>
                    {item.resultText}
                  </Dropdown.Item>
                )) 
              }
            </DropdownButton>
          </ReportRow>
        </th>
        <th onClick={() => btnApply(order.order_no, order.user_id)}>
          <p className='btnApply'>적용</p>
        </th>
      </ReportTr> 
    </>
  )
}

export default AdminOrderRow