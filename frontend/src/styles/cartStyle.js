import styled from "styled-components";

export const CartDiv = styled.div`
  min-height: 0;
  margin-top: 1%;
  padding: 0 7%;
  height: 100vh;
`;

export const CartListDiv = styled.div`
  width: 80%;
  margin: 0px auto;
`;

export const CartCalcDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1.5px solid #d8d8d8;
  margin-top: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 15px;
`;

export const CartButtonDiv = styled.div`
  text-align: center;
  margin: 3rem;
  margin-bottom: 5rem;
`;

export const ResultDiv = styled.div`
  margin-right: 3rem;
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

export const CartItemTitle = styled.th`
  width: 40%;
`;

export const CartTitle = styled.div`
  margin-top: 3%;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const LineHr = styled.hr`
  margin: 0.5rem 0;
`;

export const CartTr = styled.tr`
  padding-bottom: 10rem;
`;

export const CartTable = styled.table`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
  display: table;
`;

export const CartTd = styled.td`
  padding-bottom: 5rem;
`;

export const CartButton = styled.button`
  border: none;
  background-color: #4996f3;
  color: white;
  padding: 5px 12px;
  border-radius: 5px;
  margin: 5% 5%;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const NoticeDiv = styled.div`
  margin-top: 15%;
  text-align: center;
`;

export const EmptySpan = styled.span`
  margin-top: 2%;
  display: block;
`;
