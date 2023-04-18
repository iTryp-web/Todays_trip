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
  display: block;
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

const MarketBanner = () => {
  const [close, setClose] = useState(false);
  // 사용자 정보 받아와서 처리할예정
  const auth=1;
  const navigate=useNavigate();

  return (
    <BannerBlock close={close}>
      {auth===1?
      <Coupon onClick={() => navigate('/signin')}>
        <Image src="/images/voucher.png" />&nbsp;
        오늘의 여행 첫구매 쿠폰받기!
        </Coupon>:
        <Button onClick={() => navigate('/market/write')} >
          지금 판매자 글쓰기!
        </Button> 
}
      <CgClose onClick={() => setClose(true)} />
    </BannerBlock>
  );
};

export default MarketBanner;
