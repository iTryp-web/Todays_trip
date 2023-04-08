import Slider from "react-slick";
import styled, { css } from "styled-components";

/* BoardPage 스타일 */
/* 보드 헤더 전체 */
export const BoardHeader = styled.header`
  width: 100%;
  padding: 0 4rem;
  max-width: 1344px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  margin: 0 auto;
  margin-top: 4em;
`;

/* 커뮤니티 글자 */
export const BoardH3 = styled.h3`
  margin: 1px 0;
  align-items: center;
  font-weight: 600;
  font-size: 2rem;
`;

/* 글쓰기 버튼 */
export const BtnWrite = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7.5em;
  height: 2.7em;
  padding: 10px 0;
  border-radius: 6px;
  font-weight: 600;
  background-color: #4996f3;
  color: white;
  font-size: 1em;
  border: none;
  svg {
    width: 18px;
    height: 18px;
    margin-left: 4px;
    fill: #fff;
  }
`;

/* BoardLayout 스타일 */
/* 보드 섹션 전체 */
export const BoardSection = styled.section`
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
    }
    .searchDiv {
      width: 80%;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0 3rem;
    .content {
      width: 25em;
    }
    .searchDiv {
      width: 100%;
    }
  }
`;

/* 카테고리 전체 */
export const BoardCategory = styled.nav`
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

export const CategoryUl = styled.ul`
  color: black;
  text-decoration-line: none;
  margin-right: 1.3rem;
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

export const CategoryLi = styled.li`
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

/* 커뮤니티 글목록 부분 */
export const BContentSection = styled.section`
  flex: 1;
  max-width: 950px;
  margin-left: 85px;
  h3 {
    font-size: 18px;
    font-weight: 700;
  }
`;

export const Wrap = styled.div`
  margin: 30px 0px;
`;

/* 전체화면에 뜨는 슬라이더 */
export const StyledSlider = styled(Slider)`
  height: 180px;
  width: 100%;
  position: relative;
  margin-bottom: 40px;
  .slick-prev:before,
  .slick-next:before {
    color: black;
  }
  .slick-slide div {
    //슬라이더 컨텐츠
    cursor: pointer;
  }
`;

export const SliderListF = styled.div`
  height: 14em;
  width: 14em;
  border-radius: 20px;
  background-color: #4996f3;
  margin-right: 10px;
  div {
    color: white;
  }
`;

/* 슬라이더 안의 내용 div들 */
export const SliderDiv = styled.div`
  padding: 20px;
  height: 100%;
`;

export const SliderDivCategory = styled.div`
  fontsize: 14px;
`;
export const SliderDivTitle = styled.div`
  fontweight: 600;
  margintop: 13px;
`;
export const SliderDivWriter = styled.div`
  fontsize: 14px;
  margintop: 30px;
  position: absolute;
  bottom: 40px;
`;

export const SliderList = styled.div`
  height: 180px;
  border-radius: 20px;
  background-color: #f4f4f4;
  margin-right: 10px;
`;

export const SliderTitle = styled.div`
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const SearchDiv = styled.div`\
  width: 70%;
  height: 45px;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  text-align: center;
  left: 32%;
  margin: 0 auto;
  margin-top: 6em;
`;

export const SearchSelect = styled.select`
  width: 7em;
  max-width: 7em;
  margin: 1em;
`;

export const SearchInput = styled.input`
  width: 25em;
  height: 2.4em;
  border: none;
  border-bottom: 1px solid lightgray;
  :focus {
    outline: none;
  }
`;
export const BtnSearch = styled.button`
  width: 6em;
  max-width: 6em;
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.4em;
  padding: 10px 0;
  border-radius: 6px;
  font-weight: 600;
  background-color: #4996f3;
  color: white;
  font-size: 1em;
  border: none;
`;
