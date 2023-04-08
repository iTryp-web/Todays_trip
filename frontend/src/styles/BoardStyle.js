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
export const BoardCategory = styled.nav`
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

export const CategoryUl = styled.ul`
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
  max-width: 960px;
  margin-left: 17em;
  h3 {
    font-size: 18px;
    font-weight: 700;
  }
`;

export const Wrap = styled.div`
  margin: 30px 0px;
  margin-top: 20px;
  overflow: hidden;
`;

/* 전체화면에 뜨는 슬라이더 */
export const StyledSlider = styled(Slider)`
  height: 180px;
  width: 100%;
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

/* 파란배경 메인 슬라이더 */
export const SliderMain = styled.div`
  float: left;
  height: 14em;
  width: 14em;
  border-radius: 20px;
  background-color: #4996f3;
  margin-right: 10px;
  position: relative;
  div {
    color: white;
  }
`;

/* 흰배경 서브 슬라이더 */
export const SliderSub = styled.div`
  float: left;
  height: 14em;
  width: 14em;
  border-radius: 20px;
  background-color: #F4F4F4;
  margin-right: 10px;
  position: relative;
  div {
    color: black;
  }
`;

/* 슬라이더 안의 내용 div들 */
export const SliderDiv = styled.div`
  padding: 20px;
  height: 100%;
`;

export const SliderDivCategory = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

export const SliderDivTitle = styled.div`
  font-weight: 900;
  margin-top: 13px;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const SliderDivWriter = styled.div`
  font-size: 13px;
  margin-top: 30px;
  position: absolute;
  bottom: 25px;
`;

/* 검색 */
export const SearchDiv = styled.div`\
  width: 70%;
  height: 45px;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  text-align: center;
  left: 32%;
  margin: 0 auto;
  margin-top: 5em;
  font-size: 14px;
`;

export const SearchSelect = styled.select`
  width: 7em;
  max-width: 7em;
  margin: 1em;
  border: 1px solid lightgray;
  padding: 6px;
  border-radius: 6px;
  .option {
  }

  :focus {
    outline: none;
  }
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
  border: none;
`;


/* BoardRow */
export const PostLi = styled.li`
  list-style: none;
  padding: 16px 8px;
  margin-right: 3em;
  border-bottom: 1px solid #f4f4f4;
  font-size: 14px;
  .categoryP {
    display: inline-block;
    margin-bottom: 12px;
    padding: 2px 8px;
    border-radius: 4px;
    background: #DBEAFD;
    color: #4A71A4;
    font-size: 12px;
    font-weight: 600;
  }
  .postLink {
    text-decoration-line: none;
  }
`;

export const PostContent = styled.div`
  display: flex;
  justify-content: space-between;
  .titleP {
    color: black;
    overflow: hidden;
    display: -webkit-box;
    padding-right: 5px;
    margin-bottom: 4px;
    font-weight: 600;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  #fileI {
    margin: 0 5px;
    width: 15px;
    height: 15px;
    color: #888;
  }
  .contentP {
    overflow: hidden;
    display: -webkit-box;
    margin: 8px 0 5px 0;
    padding-right: 16px;
    color: #888;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  ul.list-count {
    list-style: none;
    display: flex;
    gap: 10px;
    padding-left: 0;
    svg {
      width: 20px;
      height: 17px;
      margin-right: 2px;
      padding-bottom: 3px;
      fill: #c5c5c5;
      &:last-child {
        transform: rotateY(180deg);
      }
    }
    li {
      color: #c5c5c5;
      font-size: 12px;
    }
  }
  small {
    font-size: 12px;
    letter-spacing: -0.2px;
    color: #c5c5c5;
  }
`;


/* BoardWriteForm 페이지 */
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #f4f4f4;
  font-size: 14px;
  &:last-child {
    border: none;
  }
  &.row-photo {
    justify-content: flex-start;
    padding: 16px 10px;
    border-top: 1px solid #f4f4f4;
    background: #fafafa;
    svg {
      width: 20px;
      height: 20px;
      margin-right: 7px;
      cursor: pointer;
    }
    span {
      color: #888;
      font-size: 15px;
      font-weight: 500;
    }
  }
  select {
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }
  button {
    background: none;
    color: #00c7ae;
    font-size: 16px;
    font-weight: 500;
    &:disabled {
      color: #c5c5c5;
      cursor: default;
      &:hover {
        filter: none;
      }
    }
  }
  #input-title {
    width: 100%;
    padding: 4px 0;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.3px;
    &::placeholder {
      color: #888;
    }
  }
  textarea {
    width: 100%;
    height: 325px;
    padding: 10px 0;
    font-size: 14px;
    resize: none;
    &::placeholder {
      color: #888;
    }
  }
`;

export const RowPreview = styled.div`
  display: flex;
  gap: 12px;
  padding-top: 12px;
`;

export const PreviewImg = styled.div`
  position: relative;
  margin-top: 10px;
  img {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    object-fit: cover;
  }
  button {
    position: absolute;
    top: -9px;
    left: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    border-radius: 50%;
    background: #ff5861;
    svg {
      fill: #fff;
    }
  }
`;

export const RowTag = styled.div`
  overflow-x: auto;
  display: flex;
  width: 100%;
  padding: 13px 0;
  border-bottom: 1px solid #f4f4f4;
  ul {
    display: flex;
    gap: 8px;
    button {
      padding: 0;
      background: none;
      color: #a9a9a9;
      font-size: 15px;
    }
  }
`;

export const TagItem = styled.li`
  width: max-content;
  padding: 6px 8px 6px 12px;
  border-radius: 8px;
  background: #f4f4f4;
  font-size: 14px;
  letter-spacing: -0.3px;
  input {
    display: inline-block;
    width: 88px;
    margin-left: 4px;
    padding: 0;
    border: none;
    background: none;
    outline: none;
    transition: all 0.1s ease-out;
  }
`;

export const TagPlaceholder = styled.p`
  padding: 6px 0;
  color: #888;
  font-size: 14px;
`;
