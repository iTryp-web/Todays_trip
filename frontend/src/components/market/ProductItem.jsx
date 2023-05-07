import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ContentsBlock, ItemBlock, Star } from '../../styles/MarketStyle';



const ProductItem = ({items}) => {

  
  const navigate=useNavigate()
 


  return (
    <>
      <ContentsBlock>
        {items && items.map((item,index)=>(
          <ItemBlock onClick={() => navigate('/market/detail/'+item.market_no)}>
            <img className='image' src={item.file_url} />
            <div className="body">
              <span className="category">{item.market_category}</span>
              <span className="title">{item.market_title}</span>
             {/* 할인률 줘도되고 안줘도되고 */}
              {/* <span className="discount">20%</span> */}
              <span className="price">{item.market_price}</span>


            
              <Star>
              <div className="star_rating">
                <div className="star_rating_fill" style={{width:`${(item.star_avg?item.star_avg:0 / 5) * 100}%`}} >
      
                  
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
              <span className="review_count">리뷰 {item.review_count?item.review_count:0}</span>
            </div>
          </ItemBlock>
))}
      </ContentsBlock>
    </>
  )
}

export default ProductItem
