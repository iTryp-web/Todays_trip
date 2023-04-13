import styled from "styled-components";

export const OrderDiv = styled.div`
  min-height: 0;
  margin-top: 1%;
  padding: 0 15%;
  height: 100vh;
`;

export const OrderListDiv = styled.div`
  margin-top: 3%;
`;

export const OrderInfoDiv = styled.div`
  margin-bottom: 3%;
`;

export const OrderCouponDiv = styled.div`
  margin-bottom: 3%;
`;

export const OrderAddressDiv = styled.div`
  margin-bottom: 3%;
`;

export const OrdererInfoDiv = styled.div`
  margin-bottom: 3%;
`;

export const OrderCalcDiv = styled.div`
  margin-bottom: 3%;
`;

export const OrderCalcTyDiv = styled.div`
  margin-top: 1.5%;
  margin-bottom: 3%;
  background-color: #f5f5f5;
  padding: 1% 2%;
  @media screen and (max-width: 768px) {
    padding: 2% 3%;
  }
`;

export const OrderCalcListDiv = styled.div`
  font-size: small;
`;

export const OrderCalcResultDiv = styled.div`
  font-weight: bold;
`;

export const OrderButtonDiv = styled.div`
  text-align: center;
`;

export const OrderTitle = styled.div`
  margin-top: 3%;
  margin-bottom: 3%;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ImgDiv = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(33, 37, 41, 0.15) 0px 0px 0px 1px inset;
  border-radius: 4px;
  margin-left: 10%;
`;

export const LineHr = styled.hr`
  margin: 0.5rem 0;
`;

export const OrdertyTitle = styled.div`
  margin-top: 1em;
  font-size: 18px;
  font-weight: bold;
`;

export const OrdertysTitle = styled.div`
  margin-top: 1em;
  font-size: 15px;
  font-weight: bold;
`;

export const OrderTable = styled.table`
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  display: table;
`;

export const OrderItemTitle = styled.th`
  width: 50%;
`;

export const OrderTotalDiv = styled.div`
  text-align: right;
  @media screen and (min-width: 700px) {
    margin-right: 2%;
  }
`;

export const OrderTotalSpan = styled.span`
  width: 100%;
  margin-bottom: 2rem;
  font-weight: bold;
  fon-size: 20px;
`;

export const OrdererTable = styled.table`
  margin-left: 3%;
  width: 100%;
`;

export const OrdererTytd = styled.td`
  @media screen and (max-width: 700px) {
    width: 120px;
  }
  width: 170px;
  font-size: 15px;
  white-space: nowrap;
`;

export const OrdererTd = styled.td`
  align-items: center;
  text-align: center;
`;

export const PointButton = styled.button`
  padding: 0 10px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 0px;
  border-radius: 4px;
  font-weight: bold;
  letter-spacing: -0.2px;
  transition: all 0.3s ease 0s;
  user-select: none;
  outline-style: none;
  cursor: pointer;
  height: 40px;
  font-size: 14px;
  background-color: #e9ecef;
`;

export const ConfirmButton = styled.button`
  padding: 0 10px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 0px;
  border-radius: 4px;
  font-weight: bold;
  letter-spacing: -0.2px;
  transition: all 0.3s ease 0s;
  user-select: none;
  outline-style: none;
  cursor: pointer;
  height: 40px;
  font-size: 14px;
  background-color: #e9ecef;
  color: #495056;
`;

export const PaymentButton = styled.button`
  border: none;
  background-color: #4996f3;
  color: white;
  padding: 7px 20px;
  border-radius: 5px;
  margin-top: 5%;
  margin-bottom: 10%;
  &hover: {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const SelectList = styled.select`
  border-radius: 4px;
  margin: 1% 0;
  width: 320px;
  padding: 1%;
`;

export const PointContent = styled.div``;
