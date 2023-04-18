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
    .searchDiv {
      padding: 0;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 0 3rem;
    .content {
      width: 30em;
      margin-left: 16em;
    }
    .searchDiv {
      width: 80%;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0 3rem;
    .content {
      width: 25em;
      margin-left: 15em;
    }
    .searchDiv {
      width: 100%;
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
  padding: 19px 20px 19px 14px;
  border-radius: 8px;
  color: gray;
  font-size: 0.9em;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      background: #DBEAFD;
      color: black;
      font-weight: 700;
    `}
  img {
    width: 24px;
    margin-right: 12px;
  }
`;

/* 어드민 글목록 부분 */
export const AContentSection = styled.section`
  flex: 1;
  max-width: 960px;
  margin-left: 17em;
  h3 {
    font-size: 18px;
    font-weight: 700;
  }
`;
