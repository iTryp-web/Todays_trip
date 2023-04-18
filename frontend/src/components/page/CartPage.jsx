import React from 'react'
import Header from '../include/Header'
import '../../styles/cartStyle'
import { CartButton, CartButtonDiv, CartCalcDiv, CartDiv, CartItemTitle, CartListDiv, CartTable, CartTitle, EmptySpan, LineHr, NoticeDiv, ResultDiv } from '../../styles/cartStyle'
import CartRow from '../cart/CartRow'
import Footer from '../include/Footer'
import { useCookies } from 'react-cookie'

const CartPage = () => {

  const [cookies] = useCookies(['cart']);

  const cartList = cookies.cart;
  let price = 0;
  let count = 0;
  if(cartList !== undefined && cartList.length > 0) {
    cartList.forEach(cart => {
      price += cart.marketPrice * cart.marketCnt;
      count += cart.marketCnt;
    });
  }
  
  return (
    <>
      <Header/>
      <CartDiv>
      {cartList !== undefined && cartList.length > 0 ? 
        <CartListDiv>
          <CartTitle>장바구니</CartTitle>
          <LineHr/>
          {}
          <CartTable>
            <thead>
              <tr>
                <th><input type="checkbox" id="allCkeck" /></th>
                <th></th>
                <CartItemTitle></CartItemTitle>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                cartList.map((cart, index) => (
                 <CartRow key={cart.marketNum} cart={cart} index={index} />
                ))
              }
            </tbody>
          </CartTable>
          <CartCalcDiv>
            <ResultDiv>상품 개수 : {count}개</ResultDiv>
            <div>상품 금액 : {price}원</div>
          </CartCalcDiv>
          <CartButtonDiv>
            <CartButton>선택 삭제</CartButton>
            <CartButton>주문하기</CartButton>
          </CartButtonDiv>
        </CartListDiv>
      :
      <CartListDiv>
        <CartTitle>장바구니</CartTitle>
        <LineHr/>
        <NoticeDiv>
          <img src={"/images/empty-cart.png"} alt="empty-cart"/>
          <EmptySpan>장바구니에 담긴 상품이 없습니다.</EmptySpan>
        </NoticeDiv>
      </CartListDiv>}
      </CartDiv>
      <Footer/>
    </>
  )
}

export default CartPage