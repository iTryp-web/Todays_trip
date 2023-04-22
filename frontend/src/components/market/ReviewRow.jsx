import React, { useState } from 'react'
import {  AiTwotoneHeart } from 'react-icons/ai';
import { BsBookmarkStar, BsBookmarkStarFill, BsFillEyeFill, BsThreeDotsVertical } from 'react-icons/bs';
import { FaCommentDots } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { dislikeDB, likeDB, reviewDeleteDB } from '../../service/marketLogic';
import { FontContent, Like, ModalDiv, ModalUl} from '../../styles/BoardStyle';
import { Star } from '../../styles/MarketStyle';

const PostLi = styled.li`
  list-style: none;
  padding: 16px 8px;
  margin-right: 3em;
  border-bottom: 1px solid #f4f4f4;
  font-size: 14px;
  .categoryP {
    display: inline-block;
    margin-bottom: 12px;
    padding: 2px 8px;
    border-radius: 4px;
    background: #dbeafd;
    color: #4a71a4;
    font-size: 12px;
    font-weight: 600;
  }
  .postLink {
    text-decoration-line: none;
  }
  .star-icon{
    margin-bottom: 3px;
    margin-left: 3px;
    margin-right: 3px;
    font-size:15px;
  }
`;

 const PostContent = styled.div`
  display: flex;
  justify-content: space-between;
  .titleP {
    color: black;
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
  
  .contentP {
    overflow: hidden;
    display: -webkit-box;
    margin: 8px 0 5px 0;
    padding-right: 16px;
    color: #888;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  ul.list-count {
    list-style: none;
    display: flex;
    gap: 10px;
    padding-left: 0;
    svg {
      width: 20px;
      height: 17px;
      margin-right: 2px;
      padding-bottom: 3px;
      fill: #c5c5c5;
      &:last-child {
        transform: rotateY(180deg);
      }
    }
    li {
      color: #c5c5c5;
      font-size: 18px;
    }
  }
  small {
    font-size: 12px;
    letter-spacing: -0.2px;
    color: #c5c5c5;
  }
`;
const BtnDot = styled.button`
  position: absolute;
  right: 200px;
  padding: 2px;
  font-size: 20px;
  border-radius: 50%;
  background: transparent;
  color: #464646;
  border: none;
  &:hover {
    color: #4996f3;
    outline: none;
  }
`;

const ReviewRow = ({review}) => {
  const navigate=useNavigate();
  console.log(review);


   // 로그인할때 세션스토리지에 담았다가 꺼낼 것!
  // 아이디, 닉네임 담을 변수
  const [userId] = useState(window.sessionStorage.getItem('user_id'))
  // const [userNickname] = useState(window.sessionStorage.getItem('user_nickname'))
  const userNickname = '숙자'


  /* 리뷰 Dot버튼 */
  const [is_ClickBtnDot, setClickBtnDot] = useState(false);
  const onClickBtnDot = () => {
    setClickBtnDot((is_ClickBtnDot) => !is_ClickBtnDot);
  };
  //  해시값으로 글번호 가져오기
  const {rno} = 2
  // const {rno} = useParams()
  console.log("rno => " + rno);
  // 글 삭제 버튼
  const reviewDelete = async () => {
    console.log('reviewDelete' + rno);
    const review = {
      review_no: rno,
    }
    const res = await reviewDeleteDB(review)
    console.log('reviewDelete=> ' + res.data);
    navigate('/market/detail')
  }
  // 글 수정 버튼
  const reviewUpdate = () => {
    console.log('reviewUpdate');
    navigate('/market/detail'+rno)
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
            {review.review_no}
            {review.like_count >= 5 ? (review.like_count >= 10 ? (
                  <BsBookmarkStarFill className='star-icon' color={'#4996F3'} />
                
                ): (
                  <BsBookmarkStar className='star-icon' color={'#4996F3'} />
                )) : null}
                  {review.user_nickname}
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
          
          <p className='contentP'>
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
          </p>
          <p className='contentP'>{review.review_content}</p>
        </div>
      </PostContent>
      <PostFooter>
        <ul className="list-count">
          
            <Like
                  onClick={() => {
                    {
                      isLiked ? reviewLike() : reviewDislike();
                    }
                  }}
                >
               
                    <AiTwotoneHeart color={isLiked ? '#4996F3' : 'gray'} />
                 
                  <FontContent liked={isLiked}>
                    좋아요 {review.like_count ? review.like_count : 0}
                  </FontContent>
                </Like>
              
      </ul>
      <li>
        {review.review_date}
      </li>
      </PostFooter>
    </PostLi>


      
    </>
  )
}

export default ReviewRow
