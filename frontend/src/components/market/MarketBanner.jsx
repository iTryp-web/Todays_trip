import styled, { css } from "styled-components";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

const Coupon=styled.h5`
  color: #ffffff;
  Font-weight:bold;
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

const MarketBanner = () => {
  const [close, setClose] = useState(false);

  return (
    <BannerBlock close={close}>
      <Coupon>
        <Image src="/images/voucher.png"/>&nbsp;
        첫구매 쿠폰받기!</Coupon>
      <CgClose onClick={() => setClose(true)} />
    </BannerBlock>
  );
};

export default MarketBanner;
