import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap'
import { MdRateReview } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { reviewListDB } from '../../service/marketLogic';
import {  ReviewUI, Star } from '../../styles/MarketStyle';
import Pagination from '../include/Pagination';
import { reviewData } from './MarketData';
import ReviewRow from './ReviewRow';

const MarketReview = ({mno}) => {
  const navigate=useNavigate()
  
  //마켓글의 리뷰갯수
  const [rcount,setRcount]=useState(0);

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
        market_no: mno ,
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
    // setRcount(item.review_count)리뷰테이ㅡㄹ 로우 갯수 어캐가져오냐
  }
  reviewList()
},[])
console.log(reviews);

  //마켓글 평균별점
  let starAvg=5;

  //평균 star rating percentage 계산 후 style로 반영
  const ratingToPercentAvg = {
    width: `${(starAvg / 5) * 100}%`,
  };

  // 페이지넘기기
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;


  return (
    <>
      <ReviewUI>
        <div className='reviewheader'>
          <h5 >
            <MdRateReview size='30' color='#4996F3'/>
            &nbsp;&nbsp;리뷰&nbsp;{rcount}</h5>
          &nbsp;&nbsp;
          {/* 평균별점 */}
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
        </div>
          
        {/* 리뷰 리스트 */}
        {/* <ul>{reviews&&//데이터가 한건도 없는 경우를 고려
              reviews.map((review)=>(
                <ReviewRow key={review.review_no} review={review}/>
              ))
                }</ul> */}
                {/* 테스트 가데이터 */}
                <ul>
                  {reviewData.slice(offset, offset + limit).map((review)=>(
                    <ReviewRow key={reviewData.review_no} review={review}/>
                  ))}
                </ul>

        
           {/* <!-- Add review --> 마이페이지로 가야될듯
        <form className='reviewAdd'>
          <h5>리뷰쓰기</h5>            
          <div >
            <span>별점</span>           
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
            리뷰등록
          </Button> */}
        <Pagination total={reviewData.length} limit={limit} page={page} setPage={setPage} />
      </ReviewUI>
    </>
  )
}


export default MarketReview
