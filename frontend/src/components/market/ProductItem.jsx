import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ContentsBlock, ItemBlock, Star } from '../../styles/MarketStyle';



const ProductItem = ({item}) => {

  
  const navigate=useNavigate()
   console.log(item)
  console.log(item.STAR_AVG)//1건

//  // 별점
//  let star=item.star_avg;

//  //star rating percentage 계산 후 style로 반영
//  const ratingToPercent = {
//    width: `${(star / 5) * 100}%`,
//  };


  return (
    <>
      {/* <ContentsBlock> */}
        {item && (
          <ItemBlock onClick={() => navigate('/market/detail/'+item.MARKET_NO)}>
            <img className='image' src={item.FILE_URL} />
            <div className="body">
              <span className="category">{item.MARKET_CATEGORY}</span>
              <span className="title">{item.MARKET_TITLE}</span>
             {/* 할인률 줘도되고 안줘도되고 */}
              {/* <span className="discount">20%</span> */}
              <span className="price">{item.MARKET_PRICE}</span>


            
              <Star>
              <div className="star_rating">
                <div className="star_rating_fill" style={{width:`${((item.STAR_AVG?item.STAR_AVG:0 )/ 5) * 100}%`}} >
      
                  
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <div className="star_rating_base">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
            </Star>
              <span className="review_count">리뷰 {item.REVIEW_COUNT?item.REVIEW_COUNT:0}</span>
            </div>
          </ItemBlock>
)}
      {/* </ContentsBlock> */}
    </>
  )
}

export default ProductItem
