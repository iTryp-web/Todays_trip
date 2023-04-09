import React from 'react'
import Header from '../include/Header'
import '../../styles/cartStyle'
import { CartButtonDiv, CartCalcDiv, CartDiv, CartItemTitle, CartListDiv, CartTable, CartTitle, LineHr, ResultDiv } from '../../styles/cartStyle'
import CartRow from '../cart/CartRow'
import { Button } from 'react-bootstrap'
import Footer from '../include/Footer'

const CartPage = () => {
  //임시 데이터
  const cartList = 0;
  const price = 30000;
  const count = 4;

  return (
    <>
      <Header/>
      <CartDiv>
      {!cartList || cartList.length <= 0 ? 
        <CartListDiv>
          <CartTitle>장바구니</CartTitle>
          <LineHr/>
          <CartTable>
            <tr>
              <th><input type="checkbox" name="" id="" /></th>
              <CartItemTitle></CartItemTitle>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <CartRow/>
            <CartRow/>
            <CartRow/>
            <CartRow/>
          </CartTable>
          <CartCalcDiv>
            <ResultDiv>상품 개수 : {count}개</ResultDiv>
            <div>상품 금액 : {price}원</div>
          </CartCalcDiv>
          <CartButtonDiv>
            <Button>선택 삭제</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button>주문하기</Button>
          </CartButtonDiv>
        </CartListDiv>
      : <div>장바구니에 담긴 상품이 없습니다.</div>}
      </CartDiv>
      <Footer/>
    </>
  )
}

export default CartPage