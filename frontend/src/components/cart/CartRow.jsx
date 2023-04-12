import React from 'react'
import { CartTr, ImgDiv } from '../../styles/cartStyle'

const CartRow = (props) => {
  const plus_img = "/images/add.png";
  const minus_img = "/images/minus.png";
  const remove_img = "/images/remove.png";

  return (
    <>
      <CartTr>
        <td className='check_box'>
          <input type="checkbox" name="" id="" />
        </td>
        <td>
          <ImgDiv>
            <img src="/images/naver-icon.png" width={'70px'} />
          </ImgDiv>
        </td>
        <td className='title'>
          아무거나 상품명
        </td>
        <td className='res_date'>
          2023-05-30 3pm
        </td>
        <td className='count'>
          <span style={{marginRight:"0.5rem", cursor:"pointer"}}><img src={plus_img} alt="plus"/></span>
          5
          <span style={{marginLeft:"0.5rem", cursor:"pointer"}}><img src={minus_img} alt="minus"/></span>
        </td>
        <td className='price'>
          7000
        </td>
        <td>
        <span style={{marginRight:"0.5rem", cursor:"pointer"}}><img src={remove_img} alt="remove"/></span>
        </td>
      </CartTr>
    </>
  )
}

export default CartRow