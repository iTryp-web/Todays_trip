import React, { useState } from 'react'
import { useEffect } from 'react';
import { Button, Form, Modal, ModalBody } from 'react-bootstrap';
import { BsBookmarkStar, BsBookmarkStarFill, BsFillEyeFill, BsThreeDotsVertical } from 'react-icons/bs';
import { HiOutlineX } from 'react-icons/hi';
import { useNavigate, useParams } from 'react-router-dom';
import { RLikedListDB, dislikeDB, likeDB, reviewDeleteDB, reviewUpdateDB } from '../../service/marketLogic';
import { FontContent, Like, ModalDiv, ModalUl, } from '../../styles/BoardStyle';
// import { PostContent, PostLi, Star, PostFooter, BtnDot} from '../../styles/MarketStyle';
import { Star, PostContent, PostLi, PostFooter, BtnDot, RModalBody, BtnReview, ReviewModal, ReviewText} from '../../styles/MarketStyle';

import RStar from '../mypage/Star'





const ReviewRow = ({review, start, setStart}) => {
  const navigate=useNavigate();
  console.log(review);

  // 로그인할때 세션스토리지에 담았다가 꺼낼 것!
  // 닉네임 담을 변수
  const [userId] = useState(window.sessionStorage.getItem('user_id'))
  const [userNickname] = useState(window.sessionStorage.getItem('user_nickname'))

   // 해시값으로 글번호 가져오기
  const {mno} = useParams()
  console.log("mno => " + mno);

  /* 리뷰 Dot버튼 */
  const [is_ClickBtnDot, setClickBtnDot] = useState(false);
  const onClickBtnDot = () => {
    setClickBtnDot((is_ClickBtnDot) => !is_ClickBtnDot);
  };

  // 리뷰 삭제 버튼
  const reviewDelete = async (mno,rno) => {
    console.log('reviewDelete 리뷰번호 : ' + rno);
    const market = {
      market_no:mno,
      review_no: rno,
    }
    const res = await reviewDeleteDB(market)
    console.log('reviewDelete=> ' + res.data);
    setStart(new Date())
  }
  // 리뷰 수정 버튼
  // Form 컴포넌트에서 받아온 리뷰 내용과 별점을 market 객체에 추가
  const [reviewContent, setReviewContent] = useState('');
  const [reviewStar, setReviewStar] = useState(0.0);
  // const reviewUpdate = async(mno, rno) => {
  //   console.log(reviewContent)
  //   console.log(reviewStar)
  //   console.log(rno)
  //   const market = {
  //     review_content: reviewContent,
  //     review_star: reviewStar,
  //     review_no: rno,
  //   }

  //   const res = await reviewUpdateDB(market);
  //   console.log('reviewUpdate => ' + res.data);
  //   setClickBtnDot(false)
  //   setStart(new Date())
  // };

  // 리뷰 DB등록 버튼
  const sendReview = () => {
    if(reviewContent.length >= 10) {
      console.log(review.review_content);
      
      let star = 0.0
      if(state.rating == 2) {
        star = state.idx + 1
      } else if (state.rating == 1) {
        star = state.idx + 0.5
      }
      console.log(star);
      // db전송
      const reviewUpdate = async() => {
        // review.market_no, review.review_no
        const market = {
          review_content: reviewContent,
          review_star: star,
          review_no: review.review_no,
        }
    
        const res = await reviewUpdateDB(market);
        console.log('reviewUpdate => ' + res.data);
        setClickBtnDot(false)
        setStart(new Date())
      };
      reviewUpdate()
      // 모달 리셋
      resetModal()
      // 새로고침
      setStart(new Date())
    }
  }

  // 리뷰 좋아요 변수
  const [liked, setLiked] = useState([{}])

  // 좋아요 판별 변수
  const [isLiked, setIsLiked] = useState(false)

  /* 좋아요 버튼 */  
  const reviewLike = async(mno, rno) => {
    const market = {
      user_id:userId,
      market_no:mno,
      review_no:rno
    }
    const res = await likeDB(market)
    console.log('reviewLike=> ' + res.data);
    setIsLiked(true)
    setStart(new Date())
  
  }
  // 좋아요 취소
  const reviewDislike = async(mno, rno) => {
    const market= {
      user_id: userId,
      like_group:rno
    }
    const res = await dislikeDB(market)
    console.log('reviewDislike=> ' + res.data);
    setIsLiked(false)
    setStart(new Date())
  }
  // 리뷰 좋아요 색 판별
  const likeColor = (mno, rno) => {
    let judge = 0
    console.log(liked)
    {liked && liked.map((item) => {
      if(item.like_no === mno && item.like_group === rno) {
        judge++
      }
    })}
    // 리뷰 좋아요 누른 기록이 있을 경우
    if(judge > 0) {
      return "#4996F3"
    }
  }

  // 별점
  let star=review.review_star;

  //star rating percentage 계산 후 style로 반영
  const ratingToPercent = {
    width: `${(star / 5) * 100}%`,
  };
  
  useEffect(() => {
    const reviewRow = async () => {
      const market = {
        user_id: userId,
        like_no: mno,
      }
      const res = await RLikedListDB(market)
      console.log(res.data)
      const temp = JSON.stringify(res.data)
      const jsonDoc = JSON.parse(temp)
      // 유저 좋아요확인 db 담기
      const list = []
      if(jsonDoc.length > 0) {
        for(let i=0; i<jsonDoc.length; i++) {
          const obj = {
            like_no: jsonDoc[i].LIKE_NO,
            like_group: jsonDoc[i].LIKE_GROUP,
          }
          list.push(obj)
   
        }
      }
      setLiked(list)
    }
  
    reviewRow();
  }, [mno, userNickname, start]);

  const [Ushow, setUShow]=useState(false)//수정모달창초기값
  const [Dshow, setDShow]=useState(false)//삭제모달창초기값
  const UhandleClose=()=>setUShow(false)//수정모달창닫기
  const DhandleClose=()=>setDShow(false)//삭제모달창닫기
  const handleShowUpdate=()=>setUShow(true)//수정모달창보여주기
  const handleShowDelete=()=>setDShow(true)//삭제모달창보여주기

  
  /* 리뷰 별점 멋있게 주기 */
  // 모달창 표시 변수
  const [isView, setIsView] = useState(false)
 

     // 리뷰모달 닫기
  const resetModal = () => {
    setIsView(false)
    setReviewContent('')
   
    setState({
      idx: 0,
      rating: 0,
      cacheIdx: 0,
      cacheRating: 0
    })
  }

  // 별점 상태
  const [state, setState] = useState({
    idx: 0,
    rating: 0,
    cacheIdx: 0,
    cacheRating: 0
  })
  // 마우스오버 메소드
  const mouseOver = (e, i) => {
    e.persist();
    let offsetX = e.nativeEvent.offsetX;
    let clientX = e.target.clientWidth;

    if (offsetX > clientX / 2) {
      let value = 2;
      setState({
        idx: i,
        rating: value
      });
    } else {
      let value = 1;
      setState({
        idx: i,
        rating: value
      });
    }
  };
  // 상태변화 저장 메소드
  const handleChange = (i, v) => {
    setState({
      idx: 0,
      rating: 0,
      cacheIdx: i,
      cacheRating: v
    });
  };
  // 리뷰내용 담는 메소드
  const handleReviewContent = (e) => {
    console.log(e);
    setReviewContent(e)
  }
  //리뷰모달보이게
  const newReview = () => {
    setIsView(!isView)
  }

  return (
    <>
    
    {/*============================ 멋진별점 리뷰수정 =============================*/}
    {isView&&
      <ReviewModal onClick={() => newReview()}>
        {/* <ReviewModal > */}
          <RModalBody onClick={(e) => e.stopPropagation()}>
            <HiOutlineX className='x-icon' onClick={() => resetModal()} />
            <div className='market_title'>{review.market_title}</div>
            <div className='title'>
              상품은 만족하셨나요?
            </div>
            <RStar
              mouseOver={mouseOver}
              onChange={handleChange}
              idx={state.idx}
              rating={state.rating}
              cacheIdx={state.cacheIdx}
              cacheRating={state.cacheRating}
            />
            <ReviewText
              type="text"
              minLength="10"
              maxLength="252"
              defaultValue={review.review_content}
              autoComplete="off"
              onChange={(e)=>{handleReviewContent(e.target.value)}}>
            </ReviewText>
            <BtnReview content={reviewContent.length} onClick={() => sendReview()}>등록하기</BtnReview>
          </RModalBody>
        </ReviewModal>
    }
    {/*============================ 멋진별점 리뷰수정 =============================*/}
    
    
    
    
    {/* ========================== [[ 삭제하기 Modal ]] ========================== */}
    <Modal show={Dshow} onHide={DhandleClose} animation={true}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
        삭제하시겠습니까?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={DhandleClose}>
            닫기
          </Button>
          <Button variant="primary" onClick={()=>{DhandleClose(); reviewDelete(review.market_no, review.review_no);}}>
            삭제하기
          </Button>
        </Modal.Footer>
      </Modal>     
    {/* ========================== [[ 삭제하기 Modal ]] =========================>*/}
    <PostLi>
      <PostContent >
        <div>
          <p className='titleP'>
            {/* {review.review_no}&nbsp; */}{/* 리뷰넘버가 순서대로 아님... */}
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
                   <ModalUl onClick={() => 
                      setIsView(true)
                    }>수정하기</ModalUl>
                  <ModalUl onClick={()=>{
                    handleShowDelete();
                  }}>삭제하기</ModalUl>
                </ModalDiv>
              ) : null
            ) : null}
       
          <p className='contentP'>{review.review_content}</p>
        </div>
      </PostContent>
      <PostFooter>
        <ul className="list-count">

                <Like>
                {likeColor(review.market_no, review.review_no) ? (
                  <lord-icon
                  onClick={() => {
                    {
                      isLiked ? reviewDislike(review.market_no, review.review_no) : reviewLike(review.market_no, review.review_no);
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
                        isLiked ? reviewDislike(review.market_no, review.review_no) :reviewLike(review.market_no, review.review_no) 
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
                    좋아요 {review.like_count? review.like_count : 0}
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
