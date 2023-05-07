import styled, { css } from "styled-components";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Coupon=styled.h5`
  color: #ffffff;
  Font-weight:bold;
  margin:0px;
  text-align: center;

`
const Image=styled.img`
  width:50px;
  height:50px;
 
`

const BannerBlock = styled.div`
  // display: block;
  display: flex;
  width: 100%;
  height: 50px;
  background: #4996F3;
  z-index: 100;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
  }
  svg {
    position: absolute;
    right: 15px;
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
  }
  ${(props) =>
    props.close &&
    css`
      display: none;
    `}

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Button=styled.button`
  background: #4996F3; 
  border: none; 
  font-size:20px;
  color:white;
`
const Banner=styled.div`
  display:flex;
p{
  margin-top: 15px;
}
`

const MarketBanner = () => {
  const [close, setClose] = useState(false);
 
  // 관리자 구분-세션스토리지 꺼내오기
  const [userRole] = useState(window.sessionStorage.getItem('user_role'))
  console.log(userRole)
  

  const navigate=useNavigate();

  return (
    <BannerBlock close={close}>
      {
      userRole==2?
          (<Button onClick={() => navigate('/market/write')}  >
            <lord-icon
                src="https://cdn.lordicon.com/frjgvxce.json"
                trigger="hover"
                colors="primary:#ffffff"
                state="hover-1"
                style={{width:"30px", height:"30px", marginRight: '5px', marginTBottom: '10px'}}>
            </lord-icon>
            <span style={{ marginBottom: '100px', marginTop: '1px'}}>
              지금 판매자 글쓰기!
              </span>
          </Button> ):
          (userRole==0?(<Coupon onClick={() => navigate('/mypage')}>
            <Banner>
               <Image src="/images/voucher.png" />&nbsp;
                <p>친구에게 추천하고 10% 할인받자!</p>
            </Banner>
          </Coupon>):
          (
            <Coupon onClick={() => navigate('/signin')}>
            <Banner>
               <Image src="/images/voucher.png" />&nbsp;
                <p>오늘의 여행 회원가입 쿠폰받기!</p>
            </Banner>
          </Coupon>
          )
          )
        
      }
      <CgClose onClick={() => setClose(true)} />
    </BannerBlock>
  );
};

export default MarketBanner;
