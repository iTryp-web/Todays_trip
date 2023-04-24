import React, { useState } from 'react'
import { Button, Modal,Form} from 'react-bootstrap'

import { BsFillCartCheckFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { DetailBlock } from '../../styles/MarketStyle'

const Btnwrap=styled.div`

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 20px 10px 20px;
  gap: 10px;

`

const ProductDetail = ({cookieAdd}) => {
  const navigate=useNavigate();
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(1);
  const [show, setShow]=useState(false)//모달창초기값
  const handleClose=()=>setShow(false)//모달창닫기
  const handleShow=()=>setShow(true)//모달창보여주기
  const price=1000;
  /* 품절여부 */
  const isSoldOut=0;
  //아이콘 이미지
  const plus_img = "/images/plus.png";
  const minus_img = "/images/minus2.png";
  
  return (
    <>
    
      
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
              <BsFillCartCheckFill className='icon' size="30" title="cart" color="#4996F3" />
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
        
          <div className='container'>
            <div  className='imgarea'>
              {/* 썸네일 */}
              <img src='https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-166141476368385159.jpg/640/640'/>
              {/* 상세페이지 */}
              <h4 className='title'>상세보기</h4>
              <img width="100%" src="https://storage.googleapis.com/heropy-api/vdvPmMsXKev094400.jpg" alt="프랭킷 펫타올 코지타올"></img>
            </div>

            <div className='menu'>
              <div className='fixed'>
                  <div className='info'>
                    <h4 className='title'>프랭킷 펫타올 코지타올</h4>
                    <div className='wrap'>
                      <p className='price'>{price}원</p>
                    </div>
                    {/* 제품 상세설명 */}
                    <p className='desc'>부드러운 극세사로 피부자극을 줄이고 빠른 흡수력으로 드라잉시간은 최소화 하세요!</p>
                  </div>
                  <div className='total'>
                    <div className='countwrap'>
                      <p>구매 수량</p>
                      {/* 카운트 버튼 */}
                        <div className='count'>

                        <img src={ minus_img} alt="minus" 
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
                       
                        <Form.Select  style={{width:'150px', height:'40px'}}>
                            <option>날짜선택</option>
                            <option value="1">23.10.19</option>
                            <option value="2">23.11.10</option>
                            <option value="3">23.12.20</option>
                        </Form.Select>
                   
                    
                    </div>

                    <div className='totalprice'>
                        <p>총 상품 금액</p>
                        <p>₩ {price * count}원</p>
                    </div>
                  </div>
                  {/* 품절이면 0 아니면 다른거.... */}
                  {isSoldOut===1 ? (
                      <div className='button'>
                        <Button name={'품절'} className='soldout' disabled={true} >품절</Button>
                      </div>
                    ) : (
                      <div className='button'>
                        <Button
                          name={'장바구니'}
                          className='sale'
                          onClick={(e) => {handleShow(); Object.entries(cookieAdd)
                          }}
                        >장바구니</Button>
                        <Button
                          name={'구매하기'}
                          onClick={() => {
                            navigate('/order', { state: { orderItems:[{
                             /*  marketName: title,
                              marketOption:"날짜선택한거"
                                id: ,
                                count: count,
                                price: products.price,
                                totalPrice: price * count, */
                            }] 
                          }})
                        }}
                        >구매하기</Button>
                      </div>
                    )}            
              </div>
            </div>{/* end of menu */}
                      {/*  [
      { "marketNum" : 11,
       "marketImg" : "/images/naver-icon.png",
       "marketName" : "상품명1",
       "marketOption" : "2023-05-30 3PM",
       "marktetCnt" : 5,
       "marketPrice" : 7000 },
       { "marketNum" : 22,
       "marketImg" : "/images/naver-icon.png",
       "marketName" : "상품명2",
       "marketOption" : "2023-05-31 5PM",
       "marktetCnt" : 2,
       "marketPrice" : 3000 }
    ] */}

          </div>{/* end of container */}
        </div>
      </DetailBlock>
    </>
  )
}

export default ProductDetail
