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
  margin-bottom: 5%;
`;

export const PointUseDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 3%;
`;

export const OrderAddressDiv = styled.div`
  margin-bottom: 5%;
`;

export const OrdererInfoDiv = styled.div`
  margin-bottom: 5%;
  width: 100%;
`;

export const OrderCalcDiv = styled.div`
  margin-bottom: 5%;
`;

export const OrderCalcTyDiv = styled.div`
  margin-top: 2%;
  margin-bottom: 3%;
  padding: 2% 3%;
  border: 1px solid #d8d8d8;
  border-radius: 5px;
`;

export const OrderCalcListDiv = styled.div`
  font-size: small;
  margin-bottom: 1%;
`;

export const OrderCalcResultDiv = styled.div`
  font-weight: bold;
  text-align: right;
`;

export const OrderAgreeDiv = styled.div`
  margin-top: 1em;
`;

export const OrderButtonDiv = styled.div`
  text-align: center;
`;

export const OrderCouponTyDiv = styled.div`
  margin-left: 3%;
  margin-top: 2%;
`;

export const OrderAgreeTyDiv = styled.div``;

export const AgreeAllCheckDiv = styled.div`
  padding-left: 0.5em;
  margin-bottom: 2%;
  font-size: 15px;
`;

export const AgreeCheckDiv = styled.div`
  padding-left: 0.5em;
  margin-bottom: 2%;
  font-size: 15px;
`;

export const InputAllCheck = styled.input`
  margin-right: 0.5em;
`;

export const OrderCancelDiv = styled.div`
  border: solid 1px #bdbdbd;
  border-radius: 10px;
  padding: 0.8em;
  background-color: #f2f2f2;
  color: #585858;
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

export const OrderCancelTitle = styled.div`
  margin-bottom: 0.2em;
  font-size: 15px;
  font-weight: bold;
`;

export const OrdertysTitle = styled.div`
  margin-top: 1em;
  margin-bottom: 0.5em;
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

export const AddressTable = styled.table`
  margin-left: 3%;
  margin-top: 2%;
  width: 94%;
  table-layout: fixed;
`;

export const AddressTitleTd = styled.td`
  vertical-align: top;
  width: 170px;
  font-size: 15px;
  white-space: nowrap;
  color: #848484;
  padding: 0.3em 0;
  @media screen and (max-width: 700px) {
    width: 120px;
  }
`;

export const AddressButton = styled.button`
  border: solid 0.5px #4996f3;
  border-radius: 3px;
  background-color: #ffffff;
  font-size: 14px;
  color: #4996f3;
  font-weight: bold;
  padding: 0.5em 0.7em;
  margin-right: 0.5em;
  margin-bottom: 0.15em;
`;

export const AddressInput = styled.input`
  border-radius: 3px;
  border: 1px solid #dbdbdb;
  padding: 0.3em;
  margin 0.1em 0;
  text-size: 15px;
`;

export const CancelSpan = styled.span`
  letter-spacing: -0.4px;
  font-weight: 400;
  font-size: 14px;
`;

export const CancelP = styled.p`
  margin: 0px;
  padding: 0px;
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
  margin-top: 2%;
  width: 94%;
  table-layout: fixed;
`;

export const OrdererTytd = styled.td`
  @media screen and (max-width: 700px) {
    width: 120px;
  }
  width: 170px;
  font-size: 15px;
  white-space: nowrap;
  color: #848484;
  padding: 0.2em 0;
`;

export const OrdererTyContentTd = styled.td`
  white-space: nowrap;
`;

export const ConfirmButton = styled.button`
  padding: 0 10px;
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
  white-space: nowrap;
`;

export const PaymentButton = styled.button`
  border: none;
  background-color: #4996f3;
  color: white;
  padding: 7px 20px;
  border-radius: 5px;
  margin-top: 5%;
  margin-bottom: 10%;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  white-space: nowrap;
`;

export const ConfirmSpan = styled.span`
  text-align: right;
  align-items: right;
  margin-right: 0;
`;
