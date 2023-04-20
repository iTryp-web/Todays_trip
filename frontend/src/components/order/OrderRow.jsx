import React from 'react'
import { ImgDiv } from '../../styles/OrderStyle'

const OrderRow = ({cart}) => {
  return (
    <>
      <tr>
        <td>
          <ImgDiv>
            <img src={cart.marketImg} width={'70px'} alt="product-img"/>
          </ImgDiv>
        </td>
        <td>
          {cart.marketName}
        </td>
        <td>
          {cart.marketOption}
        </td>
        <td>
          {cart.marketCnt}개
        </td>
        <td>
          {cart.marketPrice * cart.marketCnt}원
        </td>
      </tr>
    </>
  )
}

export default OrderRow