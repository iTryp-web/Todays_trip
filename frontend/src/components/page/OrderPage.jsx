import React, { useEffect } from 'react'
import Header from '../include/Header'
import OrderRow from '../order/OrderRow'
import Footer from '../include/Footer'
import { OrderDiv, OrderTitle, LineHr, OrderListDiv, OrderAddressDiv, OrderCouponDiv, PaymentButton, OrderButtonDiv, OrdererInfoDiv, OrdertyTitle, OrdertysTitle, OrderCalcDiv, 
         OrdererTable, ConfirmButton, OrdererTytd, OrderCalcTyDiv, OrderCalcListDiv, OrderCalcResultDiv, OrderTable, OrderItemTitle, OrderTotalSpan, OrderTotalDiv, 
         PointUseDiv, ConfirmSpan, OrderCouponTyDiv, OrderAgreeDiv, OrderAgreeTyDiv, OrderCancelDiv, OrderCancelTitle, CancelSpan, CancelP, OrdererTyContentTd, AgreeAllCheckDiv, 
         InputAllCheck, AddressTable, AddressTitleTd, AddressButton, AddressInput, AgreeCheckDiv } from '../../styles/OrderStyle'
import { defer, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { getOrderPage, setOrderTable, updatePayFail, updatePaymentInfo } from '../../service/orderLogic'
import { Form } from 'react-bootstrap'
import { cancelMsg, failValue } from '../order/constants'

const OrderPage = () => {

  const navigate = useNavigate();
  const [ cookies, setCookies, removeCookies ] = useCookies(['cart']);

  if(sessionStorage.getItem("user_id") === undefined || sessionStorage.getItem("user_id") === null || sessionStorage.getItem("user_id").length < 1)
    navigate("/");

  //주문 상품 정보 받아오기
  const location = useLocation();
  const [ orderItems ] = useState(location.state?.orderItems);

  console.log(orderItems)

  const [ orderDetailInfo, setOrderDetailInfo ] = useState([]);
  let order_no;
  let paymentData = {};

  //사용 가능한 쿠폰 리스트 관리
  const [cList, setCList] = useState([]);
  const [discount, setDiscount] = useState(0);

  //로그인 유저 정보
  const [userInfo, setUserInfo] = useState({});
  
  //상품 가격 계산해서 보여주기
  const cartList = orderItems;
  let price = 0;
  if(orderItems !== undefined && orderItems.length > 0) {
    orderItems.forEach(cart => {
      price += cart.marketPrice * cart.marketCnt;
    });
  }

  //주문 정보
  const [ orderInfo, setOrderInfo ] = useState({
    order_no: 0,
    user_id: sessionStorage.getItem('user_id') || "test1",
    reserve_name: "",
    reserve_phone: "",
    reserve_email: "",
    shipping_name: "",
    shipping_phone: "",
    shipping_zipcode: "",
    shipping_address: "",
    shipping_address_detail: "",
    coupon_no: 0,
    order_total: price,
    order_discount: discount,
    order_payment: price - discount,
  });

  //주문 페이지 로딩 시 회원 정보 및 쿠폰 정보 읽어오기
  useEffect(() => { 
    if(sessionStorage.getItem('user_id') === undefined || sessionStorage.getItem('user_id') === '') {
      navigate("/signin");
    }
    const getUserInfo = async () => {
      const user = { user_id: sessionStorage.getItem('user_id') || "test1" };
      await getOrderPage(user).then((res) => {
        if(res.data != null){
          setUserInfo(res.data.userInfo);
          setCList(res.data.couponList);
        }
      })
    }
    getUserInfo();
  }, [])

  //orderInfo에 userInfo 값 초기화
  useEffect(() => {
    setOrderInfo(prevState => ({
      ...prevState,
      reserve_name: userInfo.user_name,
      reserve_phone: userInfo.user_phone,
      reserve_email: userInfo.user_email,
      shipping_name: userInfo.user_name,
      shipping_phone: userInfo.user_phone,
      shipping_zipcode: userInfo.user_zipcode,
      shipping_address: userInfo.user_address,
      shipping_address_detail: userInfo.user_address_detail
    }))
    console.log(userInfo)
    console.log(orderInfo);
  }, [userInfo])

  //약관 체크 박스 관리용
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  //체크 박스 전체 선택시 처리
  const handleAllChecked = (e) => {
    if(e.target.checked) setCheckedItems(["checkFirst", "checkSecond"]);
    else setCheckedItems([]);
  }

  //체크 박스 개별 선택시 처리
  const handleChecked = (e) => {
    if(e.target.checked) setCheckedItems([...checkedItems, e.target.id]);
    else setCheckedItems(checkedItems.filter(item => item !== e.target.id));
  }

  //체크 박스 변경 읽어오기
  useEffect(() => {
    if(checkedItems.length > 1) setIsAllChecked(true);
    else setIsAllChecked(false);
  }, [checkedItems])

  //input 값 반영
  const handleInput = (e) => {
    setOrderInfo(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  //테스트용
  useEffect(() => {
    console.log(orderInfo)
  }, [orderInfo])

  //주소 찾기용 / 구현 미정
  const getPostCode = () => {
  }

  //결제하기 버튼 클릭 후 처리
  const onClickPayment = () => {
    //약관 동의 확인
    if(!isAllChecked) {
      alert("결제 약관 동의가 필요합니다.");
      return;
    }

    //order detail 정보 Data 생성
    let detailItem = [{}];
    orderItems.forEach(item => {
      detailItem = [...detailItem,
              {
                detail_no: 0,
                order_no: 0,
                market_no: item.marketNum,
                market_count: item.marketCnt,
                order_amount: item.marketPrice * item.marketCnt,
              }];
          });
    setOrderDetailInfo(detailItem);

    //orderInfo 값 null 체크
    for(let key in orderInfo){
      if(orderInfo[key] === undefined || orderInfo[key].length === 0){
        alert(key + "에 값을 입력해주세요.");
        return;
      }
    }

    //DB에 orderInfo값 저장하고 order_no 받아오기
    const getOrderNo = async() => {
      const orderData = {
        orderInfo: orderInfo,
        orderDetailInfo: orderDetailInfo,
      };
      await setOrderTable(orderData).then((res) => {
        if(res.data !== null){
          order_no = res.data;
            //결제 함수 실행
            payment(order_no);
        }
      })
    }
    getOrderNo();
  }

  //결제 구현
  const payment = ({order_no}) => {
    const { IMP } = window;
    IMP.init(process.env.REACT_APP_IMPORT_INIT_KEY);
    
    //결제 정보 담기
    paymentData = {
      pg: 'html5_inicis',                                                                                     // PG사
      pay_method: 'card',                                                                                     // 결제수단
      merchant_uid:  `oh_${new Date().getTime()}`,                                                            // 주문번호
      amount: price - discount,                                                                               // 결제금액
      name: cartList[0].marketName + (cartList.length > 1 ? " 외 " + (cartList.length - 1) +  " 건" : ''),    // 주문명
      buyer_name: userInfo.user_name,                                                                        // 구매자 이름
      buyer_tel: userInfo.user_phone,                                                                        // 구매자 전화번호
      buyer_email: userInfo.user_email,                                                                      // 구매자 이메일
      buyer_addr: userInfo.user_address + " " + userInfo.user_address_detail,                               // 구매자 주소
      buyer_postcode: userInfo.user_zipcode,                                                                 // 구매자 우편번호
    };
    console.log(orderInfo);
    console.log(paymentData);

    //결제시 콜백 구현
    function callback(response) {
      console.log(response);
      const {
        success,
        merchant_uid,
        error_msg,
      } = response;
    
      if (success) {
        //결제 정보 DB에 넣고 성공 페이지 이동
        console.log(merchant_uid + "-" + order_no + ':: 결제 성공');

        const updatePayInfo = async() => {
          const payData = {
            user_id: sessionStorage.getItem('user_id') || "test1",
            order_no: order_no,
            pay_method: 0,
            pay_total: price - discount,
            pay_check: 1
          };
          console.log(payData);
          await updatePaymentInfo(payData).then((res) => {
            if(res.data !== null){
              //장바구니에서 해당 상품 삭제 처리
              let numList = [];
              orderItems.forEach((cart) => {
                numList = [...numList, cart.marketNum];
              })

              let cookieList = cookies.cart;
              let newCartList = [];
              cookieList.forEach((cart) => {
                if(!numList.includes(cart.marketNum)) newCartList = [...newCartList, cart];
              })
              //newCartList에 값이 들어있을 경우 쿠키에 추가
              if(newCartList.length > 0) {
                removeCookies("cart");
                setCookies("cart", newCartList, {expires: new Date(Date.now() + 259200000)});
              } else {
                //newCartList에 값이 없을 경우 기존 쿠키 삭제
                removeCookies("cart");
              }
            }
          })
        }
        updatePayInfo();
        navigate("/payResult", { state: { result: success, order_no: merchant_uid + "-" + order_no }});
      } else {
        //주문 실패 정보 DB 업데이트 후 실패 페이지 이동 
        console.log(`${order_no} :: 결제 실패: ${error_msg}`);
        const updatePayFailInfo = async() => {
          const ordFailData = {
            order_no: order_no,
            order_status: failValue
          }
          console.log(ordFailData)
          await updatePayFail(ordFailData).then((res) => {
            if(res.data !== null){
              console.log("updatePayFail 성공")
            }
          })
        }
        updatePayFailInfo();
        if(cancelMsg === error_msg) return;
        else navigate("/payResult", { state: { result : success, order_no: merchant_uid + "-" + order_no , error_msg: error_msg }});
      }

    }

    console.log(paymentData);

    //결제 실행
    IMP.request_pay(paymentData, callback);
  }

  return defer(
    <>
      <Header/>
      <OrderDiv>
        <OrderTitle>예약하기</OrderTitle>
        <OrderListDiv>
          <OrdertyTitle>주문 정보</OrdertyTitle>
          <LineHr/>
          <OrderTable>
            <thead>
              <tr>
                <th></th>
                <OrderItemTitle></OrderItemTitle>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartList && cartList.map((cart, index) => (
                <OrderRow key={index} cart={cart}/>
              ))}
            </tbody>
          </OrderTable>
          <OrderTotalDiv>
            <OrderTotalSpan>{`합계　${price} 원`}</OrderTotalSpan>
          </OrderTotalDiv>
        </OrderListDiv>
        <OrderCouponDiv>
          <OrdertyTitle>할인 정보</OrdertyTitle>
          <LineHr/>
          <OrderCouponTyDiv>
            <OrdertysTitle>쿠폰 할인</OrdertysTitle>
            <Form.Select style={{width: "330px"}}>
              { cList.length > 0 ? 
                cList.map((coupon, index) => (
                  <option key={index}>{coupon.COUPON_NAME} ({coupon.COUPON_DATE})</option>
                ))
                : 
                <option>사용 가능한 쿠폰이 존재하지 않습니다.</option>
              }
            </Form.Select><br/>
            <OrdertysTitle>포인트</OrdertysTitle>
            <div>{`사용 가능 포인트　${0} 점`}</div>
            <PointUseDiv>
              <span><Form.Control type='text' placeholder='0' style={{ width: "330px" }} disabled /></span><ConfirmSpan><ConfirmButton>모두 사용</ConfirmButton></ConfirmSpan>
            </PointUseDiv>
          </OrderCouponTyDiv>
        </OrderCouponDiv>
        <OrdererInfoDiv>
          <OrdertyTitle>예약자 정보</OrdertyTitle>
          <LineHr/>
          <OrdererTable>
            <tbody>
              <tr>
                <OrdererTytd>예약자 이름</OrdererTytd>
                <OrdererTyContentTd><AddressInput type='text' id="reserve_name" onChange={e => handleInput(e)} style={{width:"300px"}} defaultValue={userInfo.user_name || ''} /></OrdererTyContentTd>
              </tr>
              <tr>
                <OrdererTytd>예약자 연락처</OrdererTytd>
                <OrdererTyContentTd><AddressInput type='text' id="reserve_phone" onChange={e => handleInput(e)} style={{width:"300px"}} defaultValue={userInfo.user_phone || ''}/></OrdererTyContentTd> 
              </tr>
              <tr>
                <OrdererTytd>예약자 이메일</OrdererTytd>
                <OrdererTyContentTd><AddressInput type='text' id="reserve_email" onChange={e => handleInput(e)} style={{width:"300px"}} defaultValue={userInfo.user_email || ''}/></OrdererTyContentTd> 
              </tr>
            </tbody>
          </OrdererTable>
          </OrdererInfoDiv>
        <OrderAddressDiv>
          <OrdertyTitle>배송지 정보</OrdertyTitle>
          <LineHr/>
          <AddressTable>
            <tbody>
              <tr>
                <AddressTitleTd>받는 사람</AddressTitleTd>
                <td><AddressInput type='text' id="shipping_name" onChange={e => handleInput(e)} style={{width:"250px"}} defaultValue={userInfo.user_name || ''}/></td>
              </tr>
              <tr>
                <AddressTitleTd>연락처</AddressTitleTd>
                <td><AddressInput type='text' id="shipping_phone" onChange={e => handleInput(e)} style={{width:"250px"}} defaultValue={userInfo.user_phone || ''}/></td>
              </tr>
              <tr>
                <AddressTitleTd rowSpan={3}>주소</AddressTitleTd>
                <td><AddressButton onClick={getPostCode}>주소찾기</AddressButton><AddressInput type="text" id="shipping_zipcode" onChange={e => handleInput(e)} style={{width:"166px"}} defaultValue={userInfo.user_zipcode || ''} disabled/></td>
              </tr>
              <tr>
                <td><AddressInput type="text" id="shipping_address" onChange={e => handleInput(e)} style={{width:"100%", maxWidth:"400px"}} defaultValue={userInfo.user_address || ''} disabled/></td>
              </tr>
              <tr>
                <td width={'270px'}>
                  <AddressInput type="text" id="shipping_address_detail" onChange={e => handleInput(e)} placeholder='상세주소 입력' style={{width:"100%", maxWidth:"400px"}} defaultValue={userInfo.user_address_detail || ''} />
                </td>
              </tr>
            </tbody>
          </AddressTable>
        </OrderAddressDiv>
        <OrderCalcDiv>
          <OrdertyTitle>결제 정보</OrdertyTitle>
          <OrderCalcTyDiv>
            <OrderCalcListDiv>{`주문 금액　${price} 원　ㅡ　할인 금액　${0} 원`}</OrderCalcListDiv>
            <OrderCalcResultDiv>
              <span>{`결제 금액　${price} 원`}</span>
            </OrderCalcResultDiv>
          </OrderCalcTyDiv>
        </OrderCalcDiv>
        <OrdertyTitle>결제 동의</OrdertyTitle>
        <OrderAgreeDiv>
          <OrderAgreeTyDiv>
            <AgreeAllCheckDiv>
              <InputAllCheck type={'checkbox'} id={"checkAll"} onChange={e => handleAllChecked(e)} checked={isAllChecked}/>
              <span>아래 내용에 모두 동의합니다. (필수)</span>
              <LineHr/>
            </AgreeAllCheckDiv>
            <AgreeCheckDiv>
              <InputAllCheck type={'checkbox'} id={"checkFirst"} onChange={e => handleChecked(e)} checked={checkedItems.includes("checkFirst")}/>
              <span>본인은 만 14세 이상이며, 주문 내용과 예약 취소 규정을 확인하였습니다.</span><br/>
              <InputAllCheck type={'checkbox'} id={"checkSecond"} onChange={e => handleChecked(e)} checked={checkedItems.includes("checkSecond")}/>
              <span>(주)오늘의 여행은 원활한 서비스 제공을 위해 최소한의 범위 내에서 개인정보를 수집, 이용 및 제공합니다.</span><br/>
            </AgreeCheckDiv>
          </OrderAgreeTyDiv>
          <OrderCancelDiv>
            <OrderCancelTitle>예약 취소 규정</OrderCancelTitle>
            <CancelSpan>
              <CancelP>- 여행자가 여행 개시일로부터 5일 이전 통보 시: 여행 요금 전액 환불</CancelP>
              <CancelP>- 여행 개시일로부터 3일 이전 통보 시: 총 상품 금액에서 20% 공제 후 환불</CancelP>
              <CancelP>- 여행 개시일로부터 1일 이전 통보 시: 총 상품 금액에서 30% 공제 후 환불</CancelP>
              <CancelP>- 여행일 당일 ~ 투어 시작 전 통보 시: 총 상품 금액에서 50% 공제 후 환불</CancelP>
              <CancelP>※ 취소 요청 날짜와 시간은 여행 상품이 진행되는 현지 시간을 따릅니다.</CancelP>
            </CancelSpan>
          </OrderCancelDiv>
        </OrderAgreeDiv>
        <OrderButtonDiv>
          <PaymentButton onClick={onClickPayment}>결제하기</PaymentButton>
        </OrderButtonDiv>
      </OrderDiv>
      <Footer/>
    </>
  )
}

export default OrderPage