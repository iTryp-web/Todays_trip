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
  margin-top: 2em;
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
  position: absolute;
  top: 14em;
  display: flex;
  flex-direction: column;
  width: 200px;
  ul {
    margin: 0;
    padding: 0;
    position: sticky;
    top: 102px;
  }
`;

export const AdminCategoryUl = styled.ul`
  color: black;
  text-decoration-line: none;
  margin-right: 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  &.active {
    color: #4996f3;
    font-weight: 700;
  }
  &:hover {
    color: #4996f3;
  }
`;

export const AdminCategoryLi = styled.li`
  list-style: none;
  margin: 2px 0;
  padding: 19px 20px;
  border-radius: 8px;
  color: #969696;
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
    margin-right: 8px;
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