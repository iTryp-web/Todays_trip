import React, { useState } from 'react'
import {  AiTwotoneHeart } from 'react-icons/ai';
import { BsBookmarkStar, BsBookmarkStarFill, BsFillEyeFill, BsThreeDotsVertical } from 'react-icons/bs';
import { FaCommentDots } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { dislikeDB, likeDB, reviewDeleteDB } from '../../service/marketLogic';
import { FontContent, Like, ModalDiv, ModalUl, } from '../../styles/BoardStyle';
import { PostContent, PostLi, Star, PostFooter, BtnDot} from '../../styles/MarketStyle';



const ReviewRow = ({review}) => {
  const navigate=useNavigate();
  console.log(review);


   // 로그인할때 세션스토리지에 담았다가 꺼낼 것!
  // 닉네임 담을 변수
  const [userId] = useState(window.sessionStorage.getItem('user_id'))
  const [userNickname] = useState(window.sessionStorage.getItem('user_nickname'))


  /* 리뷰 Dot버튼 */
  const [is_ClickBtnDot, setClickBtnDot] = useState(false);
  const onClickBtnDot = () => {
    setClickBtnDot((is_ClickBtnDot) => !is_ClickBtnDot);
  };
  //마켓번호
  const mno=review.market_no;
  //리뷰번호
  const rno=review.review_no;

  // 리뷰 삭제 버튼
  const reviewDelete = async () => {
    console.log('reviewDelete 리뷰번호 : ' + rno);
    const review = {
      review_no: rno,
    }
    const res = await reviewDeleteDB(review)
    console.log('reviewDelete=> ' + res.data);
    navigate('/market/detail'+mno)
  }
  // 리뷰 수정 버튼
  const reviewUpdate = () => {
    console.log('reviewUpdate');
    navigate('/market/detail'+mno)
  };

  // 좋아요 판별 변수
  const [isLiked, setIsLiked] = useState(false)

  /* 좋아요 버튼 */  
  const reviewLike = async() => {
    const market = {
      user_id: review.user_id,
      like_type: 2,
      like_group:review.review_no
    }
    const res = await likeDB(market)
    console.log('reviewLike=> ' + res.data);
    setIsLiked(true)
    
  }
  // 좋아요 취소
  const reviewDislike = async() => {
    const market= {
      user_id: review.user_id,
      like_type: 2,
      like_group:review.review_no
    }
    const res = await dislikeDB(market)
    console.log('reviewDislike=> ' + res.data);
    setIsLiked(false)
  }
  // // 글 좋아요 설정???????????????
  // useEffect (() => {
  //   {liked && liked.map((item) => (
  //     item.like_type === 0 && item.like_no === bno && item.like_group === -1 ?
  //     setIsLiked(true) : setIsLiked(false)
  //   ))}
  // }, [setDetailPost, setComments, setLiked, bno])

  // 별점
  let star=review.review_star;

  //star rating percentage 계산 후 style로 반영
  const ratingToPercent = {
    width: `${(star / 5) * 100}%`,
  };

  return (
    <>
    <PostLi>
      <PostContent >
        <div>
          <p className='titleP'>
            {review.review_no}&nbsp;
            {review.like_count >= 5 ? (review.like_count >= 10 ? (
                  <BsBookmarkStarFill className='star-icon' color={'#4996F3'} />
                
                ): (
                  <BsBookmarkStar className='star-icon' color={'#4996F3'} />
                )) : null}
                  &nbsp;{review.user_nickname}
          </p>
          <p>
            <Star>
              <div className="star_rating">
                <div className="star_rating_fill" style={ratingToPercent } >
                  
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
          </p>
          
            {userNickname && (
              <BtnDot onClick={() => onClickBtnDot()}>
                <BsThreeDotsVertical />
              </BtnDot>
            )}
            {is_ClickBtnDot ? (
              userNickname === review.user_nickname ? (
                <ModalDiv>
                  <ModalUl onClick={reviewUpdate}>수정하기</ModalUl>
                  <ModalUl onClick={reviewDelete}>삭제하기</ModalUl>
                </ModalDiv>
              ) : null
            ) : null}
       
          <p className='contentP'>{review.review_content}</p>
        </div>
      </PostContent>
      <PostFooter>
        <ul className="list-count">

                <Like>
                {isLiked ? (
                  <lord-icon
                  onClick={() => {
                    {
                      isLiked ? reviewLike() : reviewDislike();
                    }
                  }}
                  className='heart-icon'
                  src="https://cdn.lordicon.com/xryjrepg.json"
                  trigger="click"
                  colors="primary:#4996F3"
                  style={{width:"20px", height:"20px"}}>
                </lord-icon>
                  ) : (
                  <lord-icon
                    onClick={() => {
                      {
                        isLiked ? reviewLike() : reviewDislike();
                      }
                    }}
                    className='heart-icon'
                    src="https://cdn.lordicon.com/xryjrepg.json"
                    trigger="click"
                    colors="primary:#808080"
                    style={{width:"20px", height:"20px"}}>
                  </lord-icon>
                  )}
                  <FontContent liked={isLiked}>
                    좋아요 {review.like_count ? review.like_count : 0}
                  </FontContent>
                </Like>

           
              
      </ul>
      <li>
        {/* {review.review_date} */}
      </li>
      <small>
              {new Date(review.review_date).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              })}
        </small>
      </PostFooter>
    </PostLi>


      
    </>
  )
}

export default ReviewRow
