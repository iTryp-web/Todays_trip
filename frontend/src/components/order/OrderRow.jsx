import React from 'react'
import { ImgDiv } from '../../styles/OrderStyle'

const OrderRow = () => {
  return (
    <>
      <tr>
        <td>
          <ImgDiv>
            <img src="/images/naver-icon.png" width={'70px'} alt="product-img"/>
          </ImgDiv>
        </td>
        <td>
          {"아무거나 상품명"}
        </td>
        <td>
          {"2023-05-30 3pm"}
        </td>
        <td>
          {"1개"}
        </td>
        <td>
          {"7000 원"}
        </td>
      </tr>
    </>
  )
}

export default OrderRow