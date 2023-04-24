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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 96px;
    height: 96px;
    border-radius: 20px;
    font-weight: 500;
    transition: all 0.2s ease;
    img {
      margin-bottom: 4px;
    }
    &:hover {
      background: #fafafa;
      transform: translateY(-4px);
    }
  }
`;

export const CurationSection = styled.section`
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  h2 {
    font-size: 24px;
    font-weight: 700;
  }
  a.view-all {
    display: flex;
    align-items: center;
    color: #00c7ae;
    svg {
      padding-top: 1px;
      fill: #00c7ae;
    }
  }
`;

export const CurationList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0 40px;
  height: 309px;
  margin-bottom: 80px;
  li {
    display: flex;
    width: calc(50% - 40px);
  }
`;

export const CurationContent = styled(Link)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 14px 2px 16px;
  border-bottom: 1px solid #f4f4f4;
  div {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    font-size: 14px;
    white-space: nowrap;
    em {
      font-weight: 500;
      font-style: normal;
    }
    strong {
      overflow: hidden;
      margin: 5px 0 4px;
      font-weight: 500;
      text-overflow: ellipsis;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      color: #737373;
    }
  }
  img {
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 8px;
    object-fit: cover;
  }
`;

export const KnowhowList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin: 30px 0 50px;
  li {
    flex: 1;
  }
  li a {
    div {
      overflow: hidden;
      border-radius: 8px;
      margin-bottom: 5px;
    }
    &:hover {
      img {
        transform: scale(110%);
      }
    }
  }
  img {
    width: 100%;
    object-fit: cover;
    aspect-ratio: 4 / 3;
    transition: 0.4s all cubic-bezier(0.4, 0, 0.2, 1);
  }
  strong {
    display: flex;
    align-items: center;
    height: 2.3em;
    line-height: 1em;
  }
  em {
    color: #737373;
    font-size: 14px;
  }
`;

/* ImageSlider 스타일 */
export const SliderBlock = styled(Slider)`
  text-align: center;
  overflow: hidden;
  height: 470px;
  .slick-dots {
    position: absolute;
    bottom: 1rem;
  }
  .slick-dots li button:before {
    color: white;
  }
`;

export const ImageBlock = styled.img`
  margin-top: 15px;
  height: 450px;
  object-fit: cover;
  max-width: 1920px;
`;