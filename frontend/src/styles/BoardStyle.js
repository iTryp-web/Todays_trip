import Slider from "react-slick";
import styled, { css } from "styled-components";

export const CommunityHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 55px 0 25px;
`;

export const BtnPost = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 44px;
  padding: 10px 0;
  border-radius: 6px;
  font-weight: 500;
  svg {
    width: 18px;
    height: 18px;
    margin-left: 4px;
    fill: #fff;
  }
`;

export const CommunityNav = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    padding: 15px 0 12px;
    border-bottom: 1px solid #f4f4f4;
    li a {
      padding: 10px 4px 12px;
      color: #a9a9a9;
      &.active {
        border-bottom: 2.5px solid #2d2d2d;
        color: #2d2d2d;
        font-weight: 700;
      }
    }
  }
`;

export const LifeSection = styled.section`
  display: flex;
`;

export const LifeCategory = styled.nav`
  display: flex;
  flex-direction: column;
  width: 200px;
  ul {
    position: sticky;
    top: 102px;
  }
`;

export const CategoryItem = styled.li`
  margin: 2px 0;
  padding: 19px 20px;
  border-radius: 8px;
  color: #a9a9a9;
  font-size: 14px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      background: #eafaf9;
      color: #2d2d2d;
      font-weight: 700;
    `};
  img {
    width: 24px;
    margin-right: 8px;
  }
`;

export const LifeContentSection = styled.section`
  flex: 1;
  max-width: 600px;
  margin-left: 85px;
  h3 {
    font-size: 18px;
    font-weight: 700;
  }
`;

export const SearchInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  margin-bottom: 40px;
  background: #f4f4f4;
  border-radius: 8px;
  & > svg {
    font-size: 20px;
    margin-right: 10px;
  }
  input {
    flex: 1;
    height: 28px;
    border: none;
    background: none;
    outline: none;
    &::placeholder {
      color: #b5b5b5;
    }
  }
`;

export const Wrap = styled.div`
  margin: 20px 0px;
`;

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
  height: 180px;
  border-radius: 20px;
  background-color: #00c7ae;
  margin-right: 10px;
  div {
    color: white;
  }
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
