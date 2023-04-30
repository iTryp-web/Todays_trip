import styled from "styled-components";

export const FooterComponent = styled.footer`
  padding: 21px 10px 40px;
  border-top: 1px solid #e1e1e1;
  color: #737373;
  margin-top: 100px;
  transform: translatY(-100%);
  }
`;

export const Wrapper = styled.div`
  max-width: 1344px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const LeftRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin: 0 10px;
  width: 350px;
  .footer-content {
    display: inline-block;
  }
  .support {
    cursor: pointer;
    font-weight: 600;
    color: #4996F3;
    font-size: 20px;
    text-decoration: none;
    .icon {
      margin-bottom: 6px;
    }
  }
  p {
    font-size: 14px;
    line-height: 1.2;
    &.contact {
      margin-top: 10px;
      padding-bottom: 3px;
      color: #4996F3;
      font-size: 20px;
      font-weight: 600;
    }
    &.hour {
      position: absolute;
      top: 44px;
      left: 135px;
      margin-top: 10px;
      padding-bottom: 3px;
    }
    &.bottom-text{
      margin-top: -10px;
      margin-bottom: 20px;
    }
  }
`

export const CenterRow = styled.div`
  border-left: 1px solid #e1e1e1;
  border-right: 1px solid #e1e1e1;
  font-size: 13px;
  text-align: center;
  line-height: 2.3;
  width: 200px;
  padding: 6px 10px;
  div {
    cursor: pointer;
    &:hover {
      color: #4996F3;
      font-weight: 600;
    }
  }
`

export const RightRow = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px 0 25px;
  font-size: 12px;
  line-height: 1.4;
  width: 710px;
  a{
    text-decoration: none;
    color: #737373;
  }
  span {
    margin-right: 30px;
    font-weight: 500;
  }
  small {
    display: block;
    font-size: 12px;
    &.info {
      width: 710px;
      margin: 8px 0;
    }
  }
  .footer-links {
    font-weight: 600;
    cursor: pointer;
    &:hover {
      color: #4996F3;
    }
  }
`;

export const FooterSns = styled.nav`
  position: absolute;
  bottom: 10px;
  right: 15px;
  min-width: 200px;
  a {
    padding: 0 6px;
  }
`;
