import styled from "styled-components";
import { Link } from 'react-router-dom';
import Slider from "react-slick";

/* HomePage 스타일 */
export const Main = styled.main`
  max-width: 1344px;
  margin: 0 auto;
  margin-top: 50px;
`;

/* HomeLayout 스타일 */
export const MainCategoryList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 32px 0 64px;
  padding: 16px;
  li {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 20px;
    font-size: 15px;
    font-weight: 600;
    transition: all 0.2s ease;
    color: #ABABAB;
    img {
      margin-bottom: 10px;
      width: 50px;
      height: 50px;
    }
    &:hover {
      color: #4996F3;
      background: #EDF5FE;
      transform: translateY(-4px);
    }
  }
`;

export const MainSection = styled.section`
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  h2 {
    margin-bottom: 0;
    font-size: 24px;
    font-weight: 700;
  }
  a.view-all {
    display: flex;
    align-items: center;
    color: #4996F3;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    svg {
      padding-top: 1px;
      fill: #4996F3;
    }
  }
`;

export const MarketList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin: 30px 0 100px;
  padding: 0px 5px;

  list-style: none;
  font-size: 15px;
  li {
    cursor: pointer;
    flex: 1;
    position: relative;
    color: #2C5790;
    &:hover {
      color: #4996F3;
      img {
        transform: scale(103%);
      }
    }
  }
  img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 4 / 3;
    transition: 0.4s all cubic-bezier(0.4, 0, 0.2, 1);
    margin-bottom: 5px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  strong {
    display: flex;
    height: 2.3em;
    line-height: 20px;
    padding: 3px;
  }
  em {
    position: absolute;
    right: 5px;
    bottom: -17px;
    color: #737373;
    font-size: 12px;
  }
`;

export const BoardList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0px 5px;
  gap: 8px;
  margin: 30px 0 100px;
  list-style: none;
  text-decoration: none;
  .categoryP {
    cursor: pointer;
    display: inline-block;
    margin-bottom: 12px;
    padding: 2px 8px;
    border-radius: 4px;
    background: #dbeafd;
    color: #4a71a4;
    font-size: 12px;
    font-weight: 600;
  }
  .titleP {
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
  .user {
    cursor: pointer;
    width: 100%;
    height: 50px;
  }
  .star-icon{
    margin-bottom: 3px;
    margin-left: 3px;
    margin-right: 3px;
    font-size:15px;
  }
  .icons {
    display: inline-block;
    font-size: 13px;
    margin-top: 5px;
    color: #979797;
  }
  .icon-hit {
    margin: 0 4px 2px 4px;
  }
  .icon-like {
    margin: 0 3px 2px 15px;
    font-size: 12px;
  }
  li {
    cursor: pointer;
    padding: 10px 10px 0px;
    background-color: #F9F9F9;
    flex: 1;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 5px;
    position: relative;
    &:hover {
      background-color: #EDF5FE;
      transform: scale(103%);
      transition: 0.3s all cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
  strong {
    display: flex;
    align-items: center;
    height: 2.3em;
    line-height: 1em;
  }
  em {
    color: #737373;
    font-size: 12px;
    position: absolute;
    right: 10px;
    margin-top: 5px;
  }
`;

export const UserImg = styled.div`
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  margin-right: 10px;
  svg {
    width: 36px;
    height: 36px;
  }
  .userImg {
    width: 34px;
    height: 34px;
  }
`;

export const NoneDiv = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #979797;
  text-align: center;
  padding: 100px 0;
`

/* ImageSlider 스타일 */
export const SliderBlock = styled(Slider)`
  text-align: center;
  overflow: hidden;
  height: 500px;
  .slick-dots {
    position: absolute;
    bottom: 2.5rem;
  }
  .slick-dots li button:before {
    color: gray;
  }
`;

export const SliderImg = styled.img`
  height: 500px;
  max-width: 2000px;
  object-fit: fill;
  cursor: pointer;
  @media only screen and (max-width: 1500px) {
    object-fit: cover;
  }
`