import React from 'react'
import { CartTr, ImgDiv } from '../../styles/cartStyle'
import { useCookies } from 'react-cookie';

const CartRow = ({ cart, index }) => {

  const plus_img = "/images/add.png";
  const minus_img = "/images/minus.png";
  const remove_img = "/images/remove.png";

  const [cookies, setCookies, removeCookies] = useCookies(['cart']);
  const cartList = cookies.cart;

  //카트 수량 추가
  const handlePlus = () => {
    cartList[index].marketCnt++;
    removeCookies("cart");
    setCookies("cart", cartList, {expires: new Date(Date.now() + 259200000)});
  }

  //카트 수량 빼기
  const handleMinus = () => {
    if (cartList[index].marketCnt > 1) {
      cartList[index].marketCnt--;
      removeCookies("cart");
      setCookies("cart", cartList, {expires: new Date(Date.now() + 259200000)});
    } else {
      alert('카트에 담을 수 있는 최소 수량은 1개 입니다.');
    }
  }

  //카트에서 삭제하기
  const handleDelete = () => {
    let newCartList = cartList.filter(cart => cart.marketNum !== cartList[index].marketNum)
    if(newCartList.length > 0) {
      removeCookies("cart");
      setCookies("cart", newCartList, {expires: new Date(Date.now() + 259200000)});
    } else {
      removeCookies("cart");
    }
  }

  return (
    <>
      <CartTr>
        <td className='check_box'>
          <input type="checkbox" id={cart.marketNum} value={cart.marketNum} />
        </td>
        <td>
          <ImgDiv>
            <img src={cart.marketImg} width={'70px'} alt="product-img"/>
          </ImgDiv>
        </td>
        <td className='title'>
          {cart.marketName}
        </td>
        <td className='res_date'>
          {cart.marketOption}
        </td>
        <td className='count'>
          <span style={{marginRight:"0.5rem", cursor:"pointer"}}>
            <img src={plus_img} alt="plus" onClick={handlePlus}/>
          </span>
          {cart.marketCnt}
          <span style={{marginLeft:"0.5rem", cursor:"pointer"}}>
            <img src={minus_img} alt="minus" onClick={handleMinus}/>
          </span>
        </td>
        <td className='price'>
        {cart.marketPrice * cart.marketCnt}
        </td>
        <td>
        <span style={{marginRight:"0.5rem", cursor:"pointer"}}><img src={remove_img} alt="remove" onClick={handleDelete}/></span>
        </td>
      </CartTr>
    </>
  )
}

export default CartRow