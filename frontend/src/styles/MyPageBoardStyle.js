import styled, { css } from "styled-components";

/********** AdminLayout 스타일 **********/
/* 어드민 섹션 전체 */
export const AdminSection = styled.section`
  max-width: 1344px;
  min-height: 650px;
  height: 100%;
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  background: white;
  margin: 0 auto;
  margin-top: 7.5em;
  margin-bottom: 6em;
  position: relative;
`;

/* 카테고리 전체 */
export const AdminCategory = styled.nav`
  display: flex;
  flex-direction: column;
  width: 200px;
  position: absolute;
  top: -50px;
  left: 50px;
  ul {
    margin: 0;
    padding: 0;
  }
`;

export const AdminPageUl = styled.ul`
  display: flex;
  justify-content: center;
  color: black;
  font-size: 18px;
  font-weight: 800;
  height: 36px;
  cursor: pointer;
  :hover{
  color: #4996F3;
  }
`;

export const AdminCategoryUl = styled.ul`
  color: black;
  text-decoration-line: none;
  margin-right: 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
`;

export const AdminCategoryLi = styled.li`
  list-style: none;
  margin: 2px 0;
  padding: 20px;
  padding-left: 15px;
  border-radius: 8px;
  color: gray;
  font-size: 0.9em;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      background: #dbeafd;
      color: black;
      font-weight: 700;
    `}
  img {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    margin-bottom: 2px;
  }
  .icon {
    color: #e87676;
    margin-left: 5px;
    margin-bottom: 3px;
    ${({ active }) =>
      active &&
      css`
        color: #db3d3d;
      `}
  }
`;

/* 어드민 글목록 부분 */
export const AContentSection = styled.section`
  flex: 1;
  max-width: 920px;
  margin-left: 270px;
  h3 {
    font-size: 18px;
    font-weight: 700;
  }
  .qnaNav {
    margin-bottom: 20px;
  }
`;

// 상단 카테고리 선택부분
export const QnaCategory = styled.span`
  color: rgb(51, 51, 51);
  font-weight: 600;
  font-size: 16px;
  &:hover {
    color: #4996f3;
  }
  ${({ active }) =>
  active &&
  css`
    color: #4996f3;
    font-weight: 800;
  `}
`

/********** AdminQnaRow 스타일 **********/
export const QnaLi = styled.li`
  position: relative;
  list-style: none;
  padding: 20px 8px;
  margin-right: 3em;
  border-bottom: 1px solid #f4f4f4;
  font-size: 14px;
  .categoryQ {
    display: inline-block;
    margin-bottom: 10px;
    padding: 2px 8px;
    border-radius: 4px;
    background: #dbeafd;
    color: #4a71a4;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }
  .dateQ {
    font-size: 12px;
    color: #888;
    margin-left: 15px;
    margin-bottom: 0px;
  }
  .titleP {
    max-width: 100%;
    display: inline-block;
    margin-bottom: 10px;
    padding: 2px 8px 2px 5px;
    border-radius: 4px;
    background: #dbeafd;
    color: #4a71a4;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    font-style: italic
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;

export const QnaMarketStatus = styled.span`
  font-size: 12px;
  font-weight: 600;
  margin-left: 10px;
  color: #DB3D3D;
  .newIcon {
    font-size: 35px;
    margin-bottom: 3px;
  }
`

export const QnaContent = styled.div`
  font-size: 13px;
  display: flex;
  margin-bottom: 0px;
  cursor: pointer;
`;

export const QnaImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  margin-right: 20px;
  margin-top: 3px;
  .qnaImg {
    width: 44px;
    height: 44px;
    border-radius: 5px;
  }
`;

export const QnaDiv = styled.div`
  width: 100%;
`;

export const QnaMarketTitle = styled.div`
  font-weight: 600;
  color: black;
  font-size: 14px;
  margin: 5px 0 0 0;
  padding-right: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export const QnaMarketContent = styled.div`
  margin: 8px 0 5px 0;
  overflow: hidden;
  padding-right: 16px;
  text-overflow: ellipsis;
  word-break: break-all;
  color: #888;
  font-weight: 500;
  margin: 4px 0 0 0;
`;

export const BtnEdit = styled.div`
  position: absolute;
  top: 17px;
  right: 10px;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  padding: 6px;
  width: 70px;
  height: 33px;
  border-radius: 5px;
  background: #dbeafd;
  color: #4a71a4;
  cursor: pointer;
`


/* AdminReportRow */
export const ReportUl = styled.ul`
  padding-left: 0;
  display: flex;
  text-align: center;
  .reportTd {
    font-size: 15px;
    font-weight: 700;
    background-color: #DBEAFD;
    border-right: 2px solid white;
    border-radius: 5px;
    text-overflow: ellipsis;
    word-break: break-all;
  }
  .reportTdLast {
    background-color: #DBEAFD;
    border-radius: 5px;
    }
`

  export const ReportTr = styled.tr`
  font-size: 14px;
  font-weight: 500;
  height: 80px;
  th{
    padding: 10px 1px;
    border-bottom: 1px solid #DBEAFD;
  }
  .reportItemTd{
    cursor: pointer;
    padding: 0 21px;
    text-overflow: ellipsis;
    word-break: break-all;
  }
  .icon { 
    color: #4996F3;
    padding: 0;
    margin: 0 3px 0 10px;
  }
  .text { 
    padding: 0;
    margin: 0;
    margin-left: 4px;
    color: #4996F3;
  }
`


export const ReportRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #f4f4f4;
  font-size: 14px;
  &:last-child {
    border: none;
  }
  .categoryDropdown {
    margin-left: 0.8em;
    border: 1px solid lightgray;
    outline: none;
    border-Radius:5px;
    height:2.7em;
    display: flex;
    align-items: center;
    text-align: center;
    cursor: pointer;
  }
`;