import React from 'react'
import Bottom from '../include/Bottom'
import Header from '../include/Header'
import OrderRow from '../order/OrderRow'

const OrderPage = () => {
  return (
    <>
      <Header/>
      <div className='order-body'>
        <OrderRow/>
      </div>
      <Bottom/>
    </>
  )
}

export default OrderPage