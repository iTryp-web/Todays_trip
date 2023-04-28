import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap'
import { MdRateReview } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { reviewListDB } from '../../service/marketLogic';
import {  ParentContainer, ReviewUI, RSelectBlock, SelectBlock, Star } from '../../styles/MarketStyle';
import Pagination from '../include/Pagination';
import { reviewData } from './MarketData';
import ReviewRow from './ReviewRow';

const MarketReview = ({mno}) => {
  //마켓글의 리뷰갯수
  let [rcount,setRcount]=useState(0);
  
/*
  //리뷰하나의 별점 
  const star=0;
  // 별 스타일
  const ratingToPercent = {
    width: `${(star / 5) * 100}%`,
  };*/

  //마켓글 별점 배열
  const [rstar, setRstar]=useState([{}]);
  console.log("별점배열 : "+ rstar);

  //평균 star rating percentage 계산 후 style로 반영
    const ratingToPercentAvg = {
      // width: `${(starAvg / 5) * 100}%`,
    };

  //필터선택
  let [filter,setFilter]=useState('high');
  console.log(filter)

  const handleFilter=(select)=>{
    setFilter(select.target.value)
  }
  

  /* 리뷰내용 가져오기 */
  //리뷰 배열
  const [reviews, setReviews]=useState([{}])
  useEffect(()=>{
    const reviewList=async()=>{
      let market = {}
      let starList=[]
      
      // DB로 보내는 조건 
      market = {
        market_no: mno ,
        sort:filter
      }
      const res = await reviewListDB(market)
      console.log(res.data)
      const list = []
      const datas = res.data
      //datas가 배열이다. 안에 객체있음. forEach로 돌려야된다...item으로 쪼갠다. 그안에 데이터있음
      datas.forEach((item) => {
        console.log("item"+item);
      // DB에서 받은 데이터
      //like_no=market_no
      //like_group=review_no
      const obj = {
        review_no: item.REVIEW_NO,
        market_no: item.MARKET_NO,
        user_nickname: item.USER_NICKNAME,
        review_star: item.REVIEW_STAR,
        review_content: item.REVIEW_CONTENT,
        review_date  : item.REVIEW_DATE,
        like_count: item.LIKE_COUNT,
        review_count:item.REVIEW_COUNT
      }
      list.push(obj)
      starList.push(item.REVIEW_STAR);
      console.log("별점리스트"+starList);
      console.log(list);//여기까지 나옴
      //리뷰테이블 로우 갯수 어캐가져오냐
      setRcount(item.REVIEW_COUNT)
      console.log("리뷰갯수 잘가져오나?=>"+rcount);
    })
    setReviews(list)
    setRstar(reviews.review_star)  

  }
  reviewList()
},[mno, filter, rcount])
console.log(reviews);




  // 페이지넘기기-pagination
  const limit= useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;


  return (
    <>

      <ReviewUI>
        <div className='reviewheader'>
          <h5 style={{fontWeight:'bold'}}>
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
          <ParentContainer>
          <SelectBlock defaultValue="high" onChange={handleFilter}>
            <option key="1" value="new">
              최신순
            </option>
            <option key="2" value="like">
              좋아요순
            </option>
            <option key="3" value="high">
              별점높은순
            </option>
            <option key="4" value="low">
              별점낮은순
            </option>
            
          </SelectBlock>
          </ParentContainer>
        </div>
          
       {/* 리뷰 리스트  */}
         <ul>{reviews&&//데이터가 한건도 없는 경우를 고려
              reviews.slice(offset, offset + limit).map((review)=>(
                <ReviewRow key={review.review_no} review={review}/>
              ))
          }
          </ul>

        {/* 테스트 가데이터
                <ul>
                  {reviewData.slice(offset, offset + limit).map((review)=>(
                    <ReviewRow key={reviewData.review_no} review={review}/>
                  ))}
                </ul> */}

        
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
        {/* <Pagination total={reviews.length} limit={limit} page={page} setPage={setPage} /> */}
      </ReviewUI>
    </>
  )
}


export default MarketReview
