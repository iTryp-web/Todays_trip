import styled from "styled-components";

/* MyOrderList 스타일 */
export const OrderSection = styled.section`
  max-width: 1344px;
  min-height: 500px;
  height: 100%;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  background: white;
  margin: 0 auto;
  margin-top: 7em;
  margin-bottom: 6em;
  .topText {
    margin-bottom: 0;
    margin-left: 5px;
    font-size: 22px;
    font-weight: 600;
  }
`

export const OrderTable = styled.table`
  border-top: 4px solid #DBEAFD;
  display: table;
  width: 100%;
  border-collapse: separate;
  text-indent: initial;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const OrderTh = styled.th`
  border-radius: 5px;
  background: #EDF5FE;
  height: 60px;
  padding: 10px;
  text-align: center;
  color: #4a71a4;
  font-weight: 600;
  font-size: 18px;
`

export const OrderTd = styled.td`
  border-bottom: 1px solid #e6e6e6;
  height: 55px;
  padding: 5px 20px;
`

export const NoneDiv = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #979797;
  text-align: center;
  padding: 100px 0;
`

/* MyOrderRow 스타일 */
export const OrderRowTd = styled.td`
  border-bottom: 1px solid #e6e6e6;
  height: 55px;
  padding: 10px 20px;
  text-align: center;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  color: #3D3D3D;
  div {
    color: #4996F3;
    .icon{
      font-size: 17px;
      margin-bottom: 2px;
      margin-right: 3px;
    }
  }
`

export const OrderSpan = styled.span`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  :hover {
    color: #4996F3;
  }
`

export const OrderImg = styled.img`
  margin-right: 20px;
  width: 70px;
  height: 70px;
  border-radius: 5px;
  object-fit: cover;
  float: left;
`

/* MyOrderDetail */
export const OrderDetailSection = styled.section`
  max-width: 1344px;
  min-height: 900px;
  height: 100%;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  background: white;
  margin: 0 auto;
  margin-top: 7em;
  margin-bottom: 6em;
  .topText {
    margin-bottom: 0;
    margin-left: 30px;
    font-size: 22px;
    font-weight: 600;
    cursor: pointer;
    .topIcon {
      margin: 0 5px 7px 0;
    }
    &:hover {
      color: #4996F3;
    }
  }
`

export const OrderDiv = styled.div`
  padding: 0 50px;
  margin: 0;
`;

export const OrderTotalDiv = styled.div`
  text-align: right;
  margin-top: 20px;
  margin-bottom: 35px;
  @media screen and (min-width: 700px) {
    margin-right: 2%;
  }
`;

export const OrderTotalSpan = styled.span`
  width: 100%;
  margin-bottom: 2rem;
  font-weight: bold;
  fon-size: 20px;
  padding-right: 15px;
`;

/* MyOrderDetailRow */
export const MarketImg = styled.img`
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(33, 37, 41, 0.15) 0px 0px 0px 1px inset;
  margin-left: 10%;
  border-radius: 5px;
  cursor: pointer;
`;

export const DetailTd = styled.td`
  padding-bottom: 10px;
  font-size: 15px;
  div {
    cursor: pointer;
    font-weight: 600;
    color: #4996F3;
    .icon{
      font-size: 17px;
      margin-bottom: 2px;
      margin-right: 3px;
    }
  }
  .edit {
    color: black;
  }
`

export const DetailTitleTd = styled.td`
  padding-bottom: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  :hover {
    color: #4996F3;
  }
`