import styled, { css } from "styled-components";

/********** AdminLayout 스타일 **********/
/* 어드민 섹션 전체 */
export const AdminSection = styled.section`
  max-width: 1344px;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  margin: 0 auto;
  margin-top: 3em;
  margin-bottom: 6em;

  @media only screen and (max-width: 1356px) {
    padding: 0 3rem;
    .content {
      width: 35em;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 0 3rem;
    .content {
      width: 30em;
      margin-left: 16em;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0 3rem;
    .content {
      width: 25em;
      margin-left: 15em;
    }
  }
`;

/* 카테고리 전체 */
export const AdminCategory = styled.nav`
  display: flex;
  flex-direction: column;
  width: 150px;
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
    margin-right: 12px;
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
  max-width: 960px;
  h3 {
    font-size: 18px;
    font-weight: 700;
  }
`;

/********** AdminQnaRow 스타일 **********/
export const QnaLi = styled.li`
  list-style: none;
  padding: 16px 8px;
  margin-right: 3em;
  border-bottom: 1px solid #f4f4f4;
  font-size: 14px;
  .categoryQ {
    display: inline-block;
    margin-bottom: 12px;
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
    margin-left: 10px;
  }
`;

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
  width: 85px;
  height: 85px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  margin-right: 20px;
  .qnaImg {
    width: 85px;
    height: 85px;
  }
`;

export const QnaDiv = styled.div`
  width: 100%;
`;

export const QnaMarketTitle = styled.div`
  font-weight: 600;
  color: black;
  margin-top: 3px;
  padding-right: 5px;
  margin-top: 6px;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export const QnaMarketContent = styled.div`
  margin: 8px 0 5px 0;
  word-break: break-all;
  overflow: hidden;
  padding-right: 16px;
  text-overflow: ellipsis;
  word-break: break-all;
  color: ${({ status }) => (status > 0 ? "#DB3D3D" : "#888")};
  font-weight: ${({ status }) => (status > 0 ? "600" : "500")};
`;
