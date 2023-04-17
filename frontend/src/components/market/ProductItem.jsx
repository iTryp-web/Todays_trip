import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ContentsBlock = styled.div`
  width: 25%;
  @media only screen and (max-width: 768px) {
    width: 50%;
  }
`;

const ItemBlock = styled.div`
  padding: 1rem 0.5rem;
  cursor: pointer;
  span {
    color: var(--gray);
  }
  .image {
    max-height: 270px;
    overflow: hidden;
    margin-bottom: 0.3rem;
    border-radius: 5px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      &:hover {
        transform: scale(1.1);
        transition: transform 0.5s;
      }
    }
    .mark {
      position: absolute;
      bottom: 10px;
      right: 10px;
      font-size: 1.5rem;
      color: #ffffff84;
    }
  }

  .body {
    padding: 0 0.5rem;
    font-size: 0.8rem;
    .brand {
      display: inline-block;
      margin-bottom: 0.3rem;
      font-size: 0.7rem;
    }
    .special-price {
      display: block;
      color: var(--red);
      font-weight: 800;
    }
    .discount {
      color: var(--blue);
      font-weight: 600;
      font-size: 1.2rem;
      margin-right: 0.5rem;
    }
    .price {
      color: var(--black);
      font-weight: 600;
      font-size: 1.2rem;
    }
    .star {
      margin-right: 0.3rem;
      color: var(--black);
      font-weight: 600;
      span {
        color: var(--blue);
      }
    }
    .review_count {
      font-size: 0.8rem;
      font-weight: 600;
    }
  }
  @media only screen and (max-width: 768px) {
    .image {
      width: 100%;
      max-height: 100%;
    }
  }
`;

const ProductItem = ({items}) => {
  
  const navigate=useNavigate()
  
  
  const itemBody = (
    <ItemBlock>
      <div className="image">
            {items && items.map((item,index)=>(

                <img src={item} />

            ))}
      </div>
      <div className="body">
        <span className="brand">오행</span>
        <span className="title">비침없는 도톰레이스</span>
       
        <div>
          <span className="star">
            <span>★</span> 
          </span>
          <span className="review_count">리뷰 123</span>
        </div>
      </div>
    </ItemBlock>
  );

  return (
    <>
      <ContentsBlock>
        {items && items.map((item,index)=>(
          <ItemBlock>
            <img className='image' src={item} />
            <div className="body">
            <span className="brand">오행</span>
            <span className="title">비침없는 도톰레이스</span>
            <span className="star">
            <span>★</span> 
          </span>
          <span className="review_count">리뷰 123</span>
            </div>
          </ItemBlock>
))}
      </ContentsBlock>
    </>
  )
}

export default ProductItem
