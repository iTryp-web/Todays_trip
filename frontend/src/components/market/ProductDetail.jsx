import { off, onValue, ref, set } from '@firebase/database';
import React, { useState } from 'react'

import { useEffect } from 'react';
import { Button, Modal,Form} from 'react-bootstrap'
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setToastMsg } from '../../redux/toastStatus/action';
import Toast from '../include/Toast';

import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { database } from '../../service/firebase';
import { DetailBlock } from '../../styles/MarketStyle'

const Btnwrap=styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 20px 10px 20px;
  gap: 10px;
`
 const DetailContent = styled.div`
  margin: 10px 0 40px 0;
  line-height: 30px;
  font-size: 15px;
  text-align: center; /* 가운데 정렬 */
  img {
    max-width: 100%;
    
  }
`;

const ProductDetail = ({detailPost, thumbnailUrl, detailImageUrls}) => {
  const navigate=useNavigate();

   // 로그인 한 아이디
   const [userId] = useState(window.sessionStorage.getItem('user_id'))

  // 리덕스
  const status = useSelector(store => store.toastStatus.status)
  console.log(status)
  const dispatch = useDispatch()
  const [toast, setToast] = useState(false)
  const loginToast = () => {
    setToast(!toast)
  }
  useEffect (() => {
    if(toast) {
      dispatch(setToastMsg('로그인이 필요합니다.'))
      setToast(!toast)
    }
  }, [toast])

  const [show, setShow]=useState(false)//모달창초기값
  const handleClose=()=>setShow(false)//모달창닫기
  const handleShow=()=>setShow(true)//모달창보여주기
  /* 파이어 베이스 선언 */
  const [fdata, setFdata]=useState({})
  const mno=detailPost.market_no
  console.log(mno);

  /* 장바구니버튼 클릭 */
  const handleClick = () => {
    handleShow();
    cookieAdd();
  };

  /* 선택갯수 */
  const [count, setCount] = useState(1);
  console.log(count)
  
  /* 품절여부 */
  const [isSoldOut, setIsSoldout]=useState(0);
  /* 실시간남아있는 갯수-선택한갯수 */
  const fCount=isSoldOut-count;
  console.log(fCount)


  //아이콘 이미지
  const plus_img = "/images/plus.png";
  const minus_img = "/images/minus2.png";

  console.log(detailPost);//무한루프....해결 안나오는데?

  


  /* 장바구니 */
  const [cookies, setCookies] = useCookies(['cart']);
  let cartList=[]
  const [cartAdd, setCartAdd]=useState({});
 
  //쿠키에 장바구니 담기 함수
  const cookieAdd=() => {
    console.log("cookieAdd")//여기까지 멀쩡;;
    // 쿠키에서 기존 장바구니 가져오기
    const existingCart = cookies?.cart ?? [];
    cartList = [...existingCart, cartAdd];
    // //여러개 담기는듯...?? 해결된듯 cookies.cart문제. 얘가 정확히 뭔지 물어보기
    console.log(cartList)

    // if(cookies===undefined){//장바구니 없는 경우
    //     // 앞의 키값은 바꾸지 않기! 은재언니가 씀 뒤에는 변수로 연결
    //     cartList.push(cartAdd)
    //     console.log(cartList)
    //   }else{//장바구니 이미 있는 경우
    //     cartList=[...cookies.cart,cartAdd]
    //     console.log(cookies);
    //     console.log(cookies.cart);
    //   }

      //장바구니 리셋
      //Date.now() + 259200000의 값을 expires에 할당하면 3일 후 만료되는 쿠키를 설정할 수 있습니다.
      setCookies('cart', 
        cartList, {expires: new Date(Date.now() +259200000)}
        )
      
  }

  //쿠키에 상품정보담기
  useEffect(() => {
    //쿠키에 상품정보담기
    setCartAdd({
      "marketNum": detailPost.market_no,
      "marketImg": thumbnailUrl,//썸네일
      "marketName": detailPost.market_title,
      "marketOption": "시간선택",//프론트에서 시간선택 처리 할예정-파이어베이스....ㅠㅠ
      "marketCnt": count,//사용자가 선택한 갯수
      "marketPrice": detailPost.market_price
    });
  }, [count, detailPost.market_no, detailPost.market_price, detailPost.market_title, thumbnailUrl]);
  

  /* 파이어베이스 일정정보 다 가져오기 - 마켓넘버 일치하는것만 가져와라*/
  const [fdatas,setFdatas]=useState([{}])

  useEffect(()=>{
    console.log('useEffect');
    const startCountRef=ref(database,'market')
    onValue(startCountRef,(snapshot)=>{
      const data=snapshot.val()
      console.log(data)//나옴
      console.log(mno)//나옴
    //filter()메소드로 거르기
      const filteredData = Object.values(data).filter((item) => item.market_no == mno);//타입 조심
      console.log(filteredData);
      setFdatas(filteredData);
      return()=>off(startCountRef)
    })
  },[mno])
  console.log(fdatas);
  

  /*화면에 입력받은 정보 담기*/
   //일정필터선택
  let [filter,setFilter]=useState('0');
  const handleFilter=(event)=>{
    console.log(event)
    setFilter(event)
  }
  console.log(filter);//선택한 s_no(식별자)

  /* 실시간 디비 수량 업데이트 */
  //선택 한 값 하나만 가져오기 
  useEffect(()=>{
    const startCountRef=ref(database,'market/'+filter)
    onValue(startCountRef,(snapshot)=>{
      const data=snapshot.val()
      setFdata(data);
      setIsSoldout(data?.s_count??null);
      return()=>off(startCountRef)
    })
  },[filter])
  console.log(fdata);
  console.log(isSoldOut)

  
  //파이어베이스에서 수정 업데이트 똑같다
  const countUpdate=(event)=>{
    // event.preventDefault()
    const nfdata={
      s_no:fdata.s_no,//일정넘버
      market_no:mno,//마켓넘버
      s_count:Number(fCount),//예약가능 티켓수
      start_date:fdata.start_date,//시작날짜
      finish_date:fdata.finish_date,//끝날짜
    }
    console.log(nfdata);
    set(ref(database,'market/'+fdata.s_no), nfdata);
   
  }


  return (
    <>
       {/* 토스트 메시지 */}
       {loginToast && status && <Toast />}
    
      <hr/>
      <DetailBlock>
        <div className='detail'>
        {/* 장바구니 모달창 */}
        <Modal show={show} onHide={handleClose} animation={true} >
        <Modal.Header closeButton>
          <Modal.Title>장바구니</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{textAlign:"center"}}>
          <lord-icon
              src="https://cdn.lordicon.com/lqsduwhb.json"
              trigger="hover"
              colors="primary:#4996f3"
              state="hover-1"
              style={{width:"50px", height:"50px"}}>
          </lord-icon>
              {/* <BsFillCartCheckFill className='icon' size="30" title="cart" color="#4996F3" /> */}
              <h5>장바구니에 추가되었습니다.</h5>
          </div>
          
              <Btnwrap>
                <Button onClick={(e) => handleClose()} >계속쇼핑하기</Button>
                <Link to="/cart">
                  <Button>장바구니 보기</Button>
                </Link>
              </Btnwrap>
        </Modal.Body>
        </Modal>
        {/* 장바구니 모달창 끝 */}
        
          <div className='container'>
            <div  className='imgarea'>
              {/* 썸네일 */}
              <img src={thumbnailUrl} />
      
              <h4 className='title'>상세보기</h4>
              {/* 상세보기 이미지 여러개- 퀼에디터 아닌 그냥 이미지 넣을경우 */}
              {/* {detailImageUrls.map((url) => (
                      <img src={url} />
                      ))} */}

                  {/* 내용 */}
                  {/* <p>{detailPost.market_content}</p> */}
                <DetailContent dangerouslySetInnerHTML={{__html:detailPost.market_content}}></DetailContent>
            </div>

            <div className='menu'>
              <div className='fixed'>
                  <div className='info'>
                    <h4 className='title'>{detailPost.market_title}</h4>
                    <div className='wrap'>
                      <p className='price'>{detailPost.market_price?detailPost.market_price.toLocaleString('ko-KR'):0 }원</p>
                    </div>
                    {/* 제품 상세설명 */}
                    {/* <p className='desc'>{detailPost.market_content}</p> */}
                  </div>
                  <div className='total'>
                    <div className='countwrap'>
                      <p>구매 수량</p>
                      {/* 카운트 버튼 */}
                        <div className='count'>

                        <img src={minus_img} alt="minus" 
                            onClick={() => {
                              if (count === 1) {
                                return 1;
                              }
                              setCount(count - 1);
                            }}
                          />
                          
                          <p>{count}</p>
                          <img src={plus_img} alt="plus" 
                            onClick={() => {
                              setCount(count + 1);
                            }}
                          />
                        </div>
                        
                    </div>
                    <div className='countwrap'>

                        <p>일정선택</p>
                       
                        {/* <Form.Select defaultValue="1" onChange={handleFilter} style={{width:'150px', height:'40px'}}>
                            <option>날짜선택</option>
                            <option value="1">23.10.19</option>
                             <option value="1">{fdatas.s_no}</option> 
                            <option value="2">23.11.10</option>
                            <option value="3">23.12.20</option>
                        </Form.Select>  */}
                       
                       <Form.Select style={{width:'150px', height:'40px', fontSize:'1rem', textOverflow: 'ellipsis', textAlign: 'center'}} onChange={(e) => handleFilter(e.target.value, '일정번호')}>
                        <option>일정선택</option>
                            {fdatas.map((fdata) => (
                              <option value={fdata.s_no}>{fdata.start_date}~{fdata.finish_date}</option>
                            ))}
                        </Form.Select>

                    </div>

                    <div className='totalprice'>
                        <p>총 상품 금액</p>

                        <p>₩ {detailPost.market_price?(detailPost.market_price * count).toLocaleString('ko-KR'):0}원</p>
                    </div>
                  </div>
                  {/* 초기값 null. 품절이면 0 아니면 수량이 들어있다.... */}
                  {userId?(
                      isSoldOut===0 ? (
                          <div className='button'>
                            <Button name={'품절'} className='soldout' disabled={true} >품절</Button>
                          </div>
                        ) : (
                          <div className='button'>
                            <Button
                              name={'장바구니'}
                              className='sale'
                              onClick={handleClick}
                            >장바구니</Button>

                            <Button
                              name={'구매하기'}
                              onClick={(e) => {
                                navigate('/order', { state: { orderItems:[{
                                    "marketNum": detailPost.market_no,
                                    "marketImg": thumbnailUrl,//썸네일
                                    "marketName": detailPost.market_title,
                                    "marketOption": "시간선택",//프론트에서 시간선택 처리 할예정-파이어베이스
                                    "marketCnt": count,//사용자가 선택한 갯수
                                    "marketPrice": detailPost.market_price
                                  }] 
                                }});
                                countUpdate();
                            }}
                            >구매하기</Button>
                          </div>
                        )
                    ):
                    (
                      isSoldOut===0 ? (
                        <div className='button'>
                          <Button name={'품절'} className='soldout' disabled={true} >품절</Button>
                        </div>
                      ) : (
                        <div className='button'>
                          <Button
                            name={'장바구니'}
                            className='sale'
                            onClick={handleClick}
                          >장바구니</Button>

                          <Button
                            name={'구매하기'}
                            onClick={loginToast}
                          >구매하기</Button>
                        </div>
                      )
                    )
                    }{/* end of 버튼 조건 */}            
              </div>
            </div>
          </div>{/* end of container */}
        </div>
      </DetailBlock>
    </>
  )
}

export default ProductDetail