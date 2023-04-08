import React from 'react'
import Header from '../include/Header'
import OrderRow from '../order/OrderRow'
import Footer from '../include/Footer'

const OrderPage = () => {
  return (
    <>
      <Header/>
      <div className='order-body'>
        <OrderRow/>
      </div>
      <Footer/>
    </>
  )
}

export default OrderPage