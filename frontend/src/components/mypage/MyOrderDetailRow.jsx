import React, { useState } from 'react'
import { BtnReview, DetailTd, DetailTitleTd, MarketImg, ModalBody, ReviewModal, ReviewText } from '../../styles/MypageStyle'
import { useNavigate } from 'react-router-dom'
import { BiAddToQueue } from 'react-icons/bi'
import { HiOutlineX } from 'react-icons/hi'
import { useEffect } from 'react'
import Star from './Star'
import { useDispatch, useSelector } from 'react-redux'
import { setToastMsg } from '../../redux/toastStatus/action'
import Toast from '../include/Toast'
import { myReviewDB } from '../../service/myPageLogic'

const MyOrderDetailRow = ({order, setStart}) => {
  const navigate = useNavigate()

  // 페이지 이동
  const pageMove = (mno) => {
    console.log(mno);
    navigate('/market/detail/'+mno)
  }

  // 모달창 표시 변수
  const [isView, setIsView] = useState(false)
  // 리뷰 번호와 유저아이디 담기
  const [reviewInfo, setReviewInfo] = useState({
      market_no: -1, 
      detail_no: -1, 
      user_id: '',
      market_title: '',
  })
  // 리뷰 내용 담기
  const [reviewContent, setReviewContent] = useState('')
  
  // 리뷰쓰기 버튼
  const newReview = (dno, uid, title, mno) => {
    setIsView(!isView)
    setReviewInfo({
      market_no: mno, 
      detail_no: dno, 
      user_id: uid,
      market_title: title,
    })
  }

  // 리뷰모달 닫기
  const resetModal = () => {
    setIsView(false)
    setReviewContent('')
    setReviewInfo({
      market_no: -1, 
      detail_no: -1, 
      user_id: '',
      market_title: '',})
    setState({
      idx: 0,
      rating: 0,
      cacheIdx: 0,
      cacheRating: 0
    })
  }

  // 리뷰내용 담는 메소드
  const handleReviewContent = (e) => {
    console.log(e);
    setReviewContent(e)
  }

  // 리뷰 DB등록 버튼
  const sendReview = () => {
    if(reviewContent.length >= 10) {
      console.log(reviewContent);
      console.log(reviewInfo);
      let star = 0.0
      if(state.rating == 2) {
        star = state.idx + 1
      } else if (state.rating == 1) {
        star = state.idx + 0.5
      }
      console.log(star);
      // db전송
      const reviewInsert = async() => {
        const review = {
          market_no: reviewInfo.market_no,
          detail_no: reviewInfo.detail_no,
          user_id: reviewInfo.user_id,
          review_star: star,
          review_content: reviewContent,
        }
        const res = await myReviewDB(review)
        console.log(res.data);
      }
      reviewInsert()
      // 모달 리셋
      resetModal()
      // 새로고침
      setStart(new Date())
    }
  }

  // 모달창 있을땐 스크롤 금지
  useEffect(() => {
    if(isView) { 
      document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      resetModal()
    }
  }, [isView]);

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

  return (
    <>
      <tr>
        <DetailTd onClick={() => pageMove(order.market_no)}>
          <MarketImg src={order.file_url} />
        </DetailTd>
        <DetailTitleTd onClick={() => pageMove(order.market_no)}>
          {order.market_title}
        </DetailTitleTd>
        <DetailTd>
          {order.market_order_date}
        </DetailTd>
        <DetailTd>
          {order.market_count}개
        </DetailTd>
        <DetailTd>
          {order.market_count && (order.order_amount * order.market_count).toLocaleString('ko-KR')}원
        </DetailTd>
        <DetailTd>
          {order.r_count == 1 ? (
            <div className='done' >
              작성완료
            </div>
          ) : (
            <div onClick={() => newReview(order.detail_no, order.user_id, order.market_title, order.market_no)}>
              <BiAddToQueue className='icon' />
                리뷰작성
            </div>
          )}
        </DetailTd>
      </tr>
      {isView ? (
        <ReviewModal onClick={() => newReview()}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <HiOutlineX className='x-icon' onClick={() => resetModal()} />
            <div className='market_title'>{reviewInfo.market_title}</div>
            <div className='title'>
              상품은 만족하셨나요?
            </div>
            <Star
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
              placeholder="상품 후기를 작성해주세요.(최소 10자)"
              autoComplete="off"
              onChange={(e)=>{handleReviewContent(e.target.value)}}>
            </ReviewText>
            <BtnReview content={reviewContent.length} onClick={() => sendReview()}>등록하기</BtnReview>
          </ModalBody>
        </ReviewModal>
      ) : null}
    </>
  )
}

export default MyOrderDetailRow