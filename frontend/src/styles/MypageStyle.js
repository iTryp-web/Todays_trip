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
`;

export const OrderTable = styled.table`
  border-top: 4px solid #dbeafd;
  display: table;
  width: 100%;
  border-collapse: separate;
  text-indent: initial;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const OrderTh = styled.th`
  border-radius: 5px;
  background: #edf5fe;
  height: 60px;
  padding: 10px;
  text-align: center;
  color: #4a71a4;
  font-weight: 600;
  font-size: 18px;
`;

export const OrderTd = styled.td`
  border-bottom: 1px solid #e6e6e6;
  height: 55px;
  padding: 5px 20px;
`;

export const NoneDiv = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #979797;
  text-align: center;
  padding: 100px 0;
`;

/* MyOrderRow 스타일 */
export const OrderRowTd = styled.td`
  border-bottom: 1px solid #e6e6e6;
  height: 55px;
  padding: 10px 20px;
  text-align: center;
  cursor: ${({ status }) => (status < 3 ? "pointer" : "default")};
  font-size: 15px;
  font-weight: 600;
  color: #3d3d3d;
  div {
    color: #4996f3;
    .icon {
      font-size: 17px;
      margin-bottom: 2px;
      margin-right: 3px;
    }
  }
`;

export const OrderSpan = styled.span`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  :hover {
    color: ${({ status }) => (status < 3 ? "#4996f3" : "#3d3d3d")};
  }
`;

export const OrderImg = styled.img`
  margin-right: 20px;
  width: 70px;
  height: 70px;
  border-radius: 5px;
  object-fit: cover;
  float: left;
`;

/* MyOrderDetail */
export const OrderDetailSection = styled.section`
  max-width: 1344px;
  min-height: 100%;
  height: 100%;
  padding: 0 4rem;
  background: white;
  margin: 0 auto;
  margin-top: 7em;
  margin-bottom: 200px;
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
      color: #4996f3;
    }
  }
`;

export const TopText = styled.div`
  margin-bottom: 15px;
  margin-left: 30px;
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
  .topIcon {
    margin: 0 5px 7px 0;
  }
  &:hover {
    color: #4996f3;
  }
`;

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

export const LineHr = styled.hr`
  margin: 0.5rem 0;
  z-index: 1;
`;

export const OrderCalcDiv = styled.div`
  margin-bottom: 5%;
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
    color: #4996f3;
    .icon {
      font-size: 17px;
      margin-bottom: 2px;
      margin-right: 3px;
    }
  }
  .done {
    color: black;
    cursor: default;
    color: #979797;
  }
  .admin {
    color: #4996f3;
    cursor: default;
  }
`;

export const DetailTitleTd = styled.td`
  padding-bottom: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  :hover {
    color: #4996f3;
  }
`;

// 리뷰쓰기
export const ReviewModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const ModalBody = styled.div`
  position: absolute;
  width: 350px;
  height: 500px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  font-size: 18px;
  font-weight: 600;
  .x-icon {
    font-size: 30px;
    color: #464646;
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  .market_title {
    font-size: 14px;
    color: gray;
    font-style: italic;
    margin-top: -25px;
    margin-bottom: 3px;
    padding: 0 50px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .title {
    margin-bottom: 5px;
  }
`;

export const ReviewText = styled.textarea`
  height: 260px;
  width: 288px;
  margin: 20px 10px 5px 0;
  padding: 5px;
  resize: none;
  border-radius: 5px;
  font-size: 13px;
  overflow: hidden;
  border: 1px solid #e1e1e1;
  &:focus {
    outline: none;
  }
`;

export const BtnReview = styled.div`
  width: 100px;
  height: 40px;
  padding: 6px;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 36%;
  bottom: 21px;
  background-color: ${({ content }) => (content >= 10 ? "#4996F3" : "#979797")};
  cursor: ${({ content }) => (content >= 10 ? "pointer" : "default")};
`;

/*================================= MyPageMain Style Start =================================*/
export const MyPageContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  margin-top: 25px;
  height: 80%;
`;

export const UserInfo = styled.div`
  border-radius: 30px;
  background-color: #f7f9fa;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); /* 그림자 설정 */
  margin: 25px;
  height: 500px;
  width: 350px;
  text-align: center;
  padding : 25px;
`;

export const NameSpace = styled.h1`
font-weight : 900;
display: block;
color: #4996f3;
letter-spacing: 1.5px;
`;

export const DescSpace = styled.h4`
font-size: 25px;
margin-top : 10px;
display: block;
`;

export const QuickMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const QElements = styled.div``;
export const TextBox = styled.div``;

export const MenuElement = styled.div`
  margin: 25px;
  border-radius: 30px;
  width: 450px;
  height: 150px;
  padding: 20px;
  background-color: #f7f9fa;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content : space-between;
  &:hover {
    transform: scale(1.1);
    background-color: #4996f3;
  }
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); /* 그림자 설정 */
`;

export const MIcon = styled.img`
width: 100px;
height: auto;
style={{ flexGrow: 1 }};
margin-right : 25px;
`
/*================================= MyPageLayout Style Start =================================*/
