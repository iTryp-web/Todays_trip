import React from 'react'
import { CartTr } from '../../styles/cartStyle'

const CartRow = (props) => {
  const plus_img = "/images/add.png";
  const minus_img = "/images/minus.png";

  return (
    <>
      <CartTr>
        <td className='check_box'>
          <input type="checkbox" name="" id="" />
        </td>
        <td className='title'>
          아무거나 상품명
        </td>
        <td className='price'>
          7000
        </td>
        <td className='count'>
          <span style={{marginRight:"0.5rem"}}><img src={plus_img} alt="plus"/></span>
          5
          <span style={{marginLeft:"0.5rem"}}><img src={minus_img} alt="minus"/></span>
        </td>
        <td className='price'>
          35000
        </td>
      </CartTr>
    </>
  )
}

export default CartRow