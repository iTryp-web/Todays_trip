import React, { useState } from 'react'
import Header from '../include/Header'
import '../../styles/cartStyle'
import { CartButton, CartButtonDiv, CartCalcDiv, CartDiv, CartItemTitle, CartListDiv, CartTable, CartTitle, EmptySpan, LineHr, 
         NoticeDiv, ResultDiv } from '../../styles/cartStyle'
import CartRow from '../cart/CartRow'
import Footer from '../include/Footer'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const CartPage = () => {

  const navigate = useNavigate();
  const [cookies, setCookies, removeCookies] = useCookies(['cart']);

  //쿠키에서 장바구니 목록 가져오기
  const cartList = cookies.cart;

  const [price, setPrice] = useState(0);
  const [count, setCount] = useState(0);

  //체크 박스 관리용
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  //체크 박스 전체 선택시 처리
  const handleAllChecked = (e) => {
    if(e.target.checked){
      let list = [];
      cartList.forEach((cart, index) => {
        list.push(index);
      })
      setCheckedItems(list);
    } else setCheckedItems([]);
  }

  //체크 박스 개별 선택시 처리
  const handleChecked = (index) => {
    if(checkedItems.includes(index)){
      setCheckedItems(checkedItems.filter(item => item !== index))
    } else setCheckedItems([...checkedItems, index])
  }

  //상품 삭제 시 체크박스 반영
  const handleDeleteChecked = (index) => {
    let newCheckedItems = [];
    checkedItems.forEach(item => {
      if(index < item) {
        newCheckedItems.push(item - 1);
      } else if(index > item) newCheckedItems.push(item);
    })
    setCheckedItems(newCheckedItems);
  }

  //총 결제 금액 계산
  const handleTotal = () => {
    let pp = 0;//가격
    let cc = 0;//갯수
    if(checkedItems && checkedItems.length > 0) {
      checkedItems.forEach(index => {
        pp += cartList[index].marketPrice * cartList[index].marketCnt;
        cc += cartList[index].marketCnt;
      });
    }
    setPrice(pp);
    setCount(cc);
  }

  //체크 박스 변경 읽어오기
  useEffect(() => {
    if(cartList && cartList.length === checkedItems.length) setIsAllChecked(true);
    else setIsAllChecked(false);
    handleTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedItems])

  //카트 바뀌면 총 결제금액 바꿔주기
  useEffect(() => {
    handleTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartList])

  //선택 삭제 처리
  const handleSelectDelete = () => {
    //해당 번호 제외한 아이템만 newCartList에 추가
    let newCartList = [];
    cartList.forEach((cart, index) => {
      if(!checkedItems.includes(index)) newCartList = [...newCartList, cart];
    })
    //newCartList에 값이 들어있을 경우 쿠키에 추가
    if(newCartList.length > 0) {
      removeCookies("cart");
      setCookies("cart", newCartList, {expires: new Date(Date.now() + 259200000)});
    } else {
      //newCartList에 값이 없을 경우 기존 쿠키 삭제
      removeCookies("cart");
    }
    setCheckedItems([]);
  }

  //주문하기 처리
  const handleOrder = () => {
    if(checkedItems === undefined || checkedItems.length < 1) {
      alert('주문하실 상품을 선택해주세요');
      return;
    }
    //개수 확인해서 초과시에 돌려보내기
    //아니면 DB 개수 차감하고 다음 작업

    //체크된 상품 아이디 정보 -> 새 배열에 담아서 orderPage로 넘겨주기
    let orderItems = [];
    cartList.forEach((cart, index) => {
      if(checkedItems.includes(index)) orderItems = [...orderItems, cart];
    })
    navigate('/order', { state: { orderItems: orderItems }});
  }
  
  return (
    <>
      <Header/>
      <CartDiv>
      {cartList !== undefined && cartList.length > 0 ? 
        <CartListDiv>
          <CartTitle>장바구니</CartTitle>
          <LineHr/>
          <CartTable>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" id="allCkeck" onChange={e => handleAllChecked(e)} checked={isAllChecked}/ >
                </th>
                <th></th>
                <CartItemTitle>상품명</CartItemTitle>
                <th>옵션</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                cartList.map((cart, index) => (
                 <CartRow key={cart.marketNum} cart={cart} index={index} handleChecked={handleChecked} checkedItems={checkedItems} handleDeleteChecked={handleDeleteChecked} />
                ))
              }
            </tbody>
          </CartTable>
          <CartCalcDiv>
            <ResultDiv>상품 개수 : {count}개</ResultDiv>
            <div>상품 금액 : {price}원</div>
          </CartCalcDiv>
          <CartButtonDiv>
            <CartButton onClick={handleSelectDelete}>선택 삭제</CartButton>
            <CartButton onClick={handleOrder}>주문하기</CartButton>
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