import React from 'react'
import { CartTr, ImgDiv } from '../../styles/cartStyle'
import { useCookies } from 'react-cookie';

const CartRow = ({ cart, index, handleChecked, checkedItems, handleDeleteChecked, maxCnt }) => {
  console.log(maxCnt)
  //아이콘 이미지
  const plus_img = "/images/add.png";
  const minus_img = "/images/minus.png";
  const remove_img = "/images/remove.png";

  //카트 관리용 변수
  const [cookies, setCookies, removeCookies] = useCookies(['cart']);
  const cartList = cookies.cart;

  //카트 수량 추가
  const handlePlus = () => {
    //해당 아이템 수량 증가
    cartList[index].marketCnt++;
    //기존 쿠키 제거 후 다시 추가
    removeCookies("cart");
    setCookies("cart", cartList, {expires: new Date(Date.now() + 259200000)});
  }

  //카트 수량 빼기
  const handleMinus = () => {
    //수량이 1 초과할 경우 수량 감소
    if (cartList[index].marketCnt > 1) {
      cartList[index].marketCnt--;
      //쿠키에 추가
      removeCookies("cart");
      setCookies("cart", cartList, {expires: new Date(Date.now() + 259200000)});
    } else {
      //수량 1 이하일 경우 메세지 출력
      alert('카트에 담을 수 있는 최소 수량은 1개입니다.');
    }
  }

  //카트에서 삭제하기
  const handleDelete = () => {
    //해당 번호 제외한 아이템만 newCartList에 추가
    let newCartList = cartList.filter(cart => cart.marketNum !== cartList[index].marketNum)
    if(checkedItems.includes(index)) {
      handleDeleteChecked(index)
    }
    //newCartList에 값이 들어있을 경우 쿠키에 추가
    if(newCartList.length > 0) {
      removeCookies("cart");
      setCookies("cart", newCartList, {expires: new Date(Date.now() + 259200000)});
    } else {
      //newCartList에 값이 없을 경우 기존 쿠키 삭제
      removeCookies("cart");
    }
  }

  //체크박스 관리
  const handleClick = () => {
    handleChecked(index);
  }

  return (
    <>
      <CartTr>
        <td className='check_box'>{maxCnt && cart.marketCnt > maxCnt ? 
          <input type="checkbox" id={cart.marketNum} value={cart.marketNum} onChange={handleClick} checked={checkedItems.includes(index)} disabled />:
          <input type="checkbox" id={cart.marketNum} value={cart.marketNum} onChange={handleClick} checked={checkedItems.includes(index)} />
        }
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