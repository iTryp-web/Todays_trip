import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap'
import styled from 'styled-components';
import { reviewListDB } from '../../service/marketLogic';
import ReviewRow from './ReviewRow';

const Star=styled.div`

.star_rating {
  color: #4996F3;
  position: relative;
  unicode-bidi: bidi-override;
  width: max-content;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: #4996F3;/* 테두리 */
  margin: 0px 10px 0px 0px;
}

.star_rating_fill {
  color: #4996F3;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: flex;
  top: 0;
  left: 0;
  overflow: hidden;
  -webkit-text-fill-color: #4996F3;/* 별색깔 */
}

.star_rating_base {
  z-index: 0;
  padding: 0;
}
`

const MarketReview = () => {
  //마켓글의 리뷰갯수
  const rcount=0;
  //리뷰하나의 별점
  const star=0;
  // 별 스타일
  const ratingToPercent = {
    width: `${(star / 5) * 100}%`,
  };
  /* 리뷰내용 가져오기 */
  //리뷰 배열
  const [reviews, setReviews]=useState([{}])
  useEffect(()=>{
    const reviewList=async()=>{
      let market = {}
      // DB로 보내는 조건 
      market = {
        market_no: 0 ,
        sort:"like"
      }
      const res = await reviewListDB(market)
      console.log(res.data)
      const list = []
      const datas = res.data
      //datas가 배열이다. 안에 객체있음. forEach로 돌려야된다...item으로 쪼갠다. 그안에 데이터있음
      datas.forEach((item) => {
      console.log(item)
      // DB에서 받은 데이터
      const obj = {
        review_no: item.REVIEW_NO,
        user_nickname: item.USER_NICKNAME,
        review_star: item.REVIEW_STAR,
        review_content: item.MARKET_CONTENT,
        review_date  : item.REVIEW_DATE,
        like_count: item.LIKE_COUNT,
      }
      list.push(obj)
      console.log(list);
    })
    setReviews(list)
  }
  reviewList()
},[])
console.log(reviews);
/*
  SELECT u.user_id
		     , u.user_nickname
	       , m.review_no
	       , m.market_no
	       , m.type_review
	       , m.review_star
	       , m.review_content
	       , m.review_date  
	       , l.like_count
		  FROM TB_M_REVIEW m
		  		, TB_USER u
		  		, (SELECT COUNT(user_id) like_count, like_group
				    FROM TB_LIKE
				    WHERE like_type = 2
				    GROUP BY like_group) l
  	  WHERE m.user_id = u.user_id(+)
  	  AND m.market_no = #{market_no}
  	  AND m.review_no = l.like_group(+)
*/


  //마켓글 평균별점
  let starAvg=5;

  //평균 star rating percentage 계산 후 style로 반영
  const ratingToPercentAvg = {
    width: `${(starAvg / 5) * 100}%`,
  };


  return (
    <>
    <h5>리뷰{rcount}</h5>
    {/* 리뷰 리스트 */}
    <ul>{reviews&&//데이터가 한건도 없는 경우를 고려
           reviews.map((review)=>(
            <ReviewRow key={review.review_no} review={review}/>
           ))
            }</ul>

    <Star>
        <div className="star_rating">
          <div className="star_rating_fill" style={ratingToPercentAvg}>
            
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
      {/*  <!-- Add review --> */}
    <form >
											<h5 className="mtext-108 cl2 p-b-7">
												리뷰쓰기
											</h5>

											
											<div className="flex-w flex-m p-t-50 p-b-23">
												<span className="stext-102 cl3 m-r-16">
													별점
												</span>
                        

											
					<input className="dis-none" type="number" name="rating"/>
											
				</div>

					<div className="row p-b-25">
						<div className="col-12 p-b-5">
							<label>리뷰</label>
							<textarea className="review"></textarea>
						</div>
          </div>
		</form>
      <Button >
				리뷰좋아요
			</Button>
    </>
  )
}


export default MarketReview
