import React, { useState } from 'react'
import { useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { BsBookmarkStar, BsBookmarkStarFill, BsFillEyeFill, BsThreeDotsVertical } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import { RLikedListDB, dislikeDB, likeDB, reviewDeleteDB, reviewUpdateDB } from '../../service/marketLogic';
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

  // 리뷰 삭제 버튼
  const reviewDelete = async (mno,rno) => {
    console.log('reviewDelete 리뷰번호 : ' + rno);
    const market = {
      market_no:mno,
      review_no: rno,
    }
    const res = await reviewDeleteDB(market)
    console.log('reviewDelete=> ' + res.data);
    navigate('/market/detail'+mno)
  }
  // 리뷰 수정 버튼
  // Form 컴포넌트에서 받아온 리뷰 내용과 별점을 market 객체에 추가
  const [reviewContent, setReviewContent] = useState('');
  const [reviewStar, setReviewStar] = useState(0);
  const reviewUpdate = async(mno, rno) => {

    const market = {
      review_content: reviewContent,
      review_star: reviewStar,
      review_no: rno,
    }

    const res = await reviewUpdateDB(market);
    console.log('reviewUpdate => ' + res.data);
    navigate('/market/detail/' + mno);
  };
  // 리뷰 좋아요 변수
  const [liked, setLiked] = useState([{}])

  // 좋아요 판별 변수
  const [isLiked, setIsLiked] = useState(false)
  //좋아요 때문에 돌겠네... 낼 정윤언니한테 물어보기...
  const rcount=review.review_count
  // let [rcount,setRcount]=useState(parseInt(review.review_count))
  const mno=review.like_no
  const rno=review.like_group


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
    // if (rcount) {
    //   setRcount(prevCount => prevCount + 1);
    // }
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
    const reviewDislike = async(mno, rno) => {
      const market= {
        user_id: userId,
        like_group:rno
      }
      const res = await dislikeDB(market)
      console.log('reviewDislike=> ' + res.data);
      setIsLiked(false)
      // if (rcount > 0) {
      //   setRcount(prevCount => prevCount - 1)
      // }
    }
  }
  // 좋아요 설정???????????????like_no=market_no, like_group=review_no
  useEffect(() => {
    {liked && liked.map((item) => (
       item.like_no === mno && item.like_group === rno ?
      setIsLiked(true) : setIsLiked(false)
    ))}
  }, [liked,setIsLiked, mno, rno])

  // 별점
  let star=review.review_star;

  //star rating percentage 계산 후 style로 반영
  const ratingToPercent = {
    width: `${(star / 5) * 100}%`,
  };
  
  useEffect(() => {
    const reviewRow = async () => {
      let tempNick = ''
      if(userNickname != null) {
        tempNick = window.sessionStorage.getItem('user_nickname')
      }
      const market = {
        user_nickname:tempNick
      }
      const res = await RLikedListDB(market)
      console.log(res.data)
      const temp = JSON.stringify(res.data)
      const jsonDoc = JSON.parse(temp)
      // 유저 좋아요확인 db 담기
      const list = []
      if(jsonDoc.length > 0) {
        for(let i=rcount+1; i<jsonDoc.length; i++) {
          const obj = {
            like_no: jsonDoc[i].LIKE_NO,
            like_group: jsonDoc[i].LIKE_GROUP,
          }
          list.push(obj)
          if(obj.like_no === mno && obj.like_group === rno) {
            setIsLiked(true)
          }
        }
      }
      setLiked(list)
    }
  
    reviewRow();
  }, [mno, rno,rcount, userNickname]);

  const [Ushow, setUShow]=useState(false)//수정모달창초기값
  const [Dshow, setDShow]=useState(false)//삭제모달창초기값
  const UhandleClose=()=>setUShow(false)//수정모달창닫기
  const DhandleClose=()=>setDShow(false)//삭제모달창닫기
  const handleShowUpdate=()=>setUShow(true)//수정모달창보여주기
  const handleShowDelete=()=>setDShow(true)//삭제모달창보여주기


  const handleUpdateForm = (e) => {
    const { name, value } = e.target;
    
      if (name === 'reviewContent') {
        setReviewContent(value);
      } else if (name === 'reviewStar') {
        setReviewStar(value);
      }
    }
  

  return (
    <>
        {/* ========================== [[ 리뷰 수정하기 Modal ]] ========================== */}
        <Modal show={Ushow} onHide={UhandleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>리뷰수정</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form id="f_memo">         
          <Form.Group className="mb-3 row" controlId="mStar">
            <Form.Label className="col-sm-2 col-form-label">별점</Form.Label>
            <div className='col-sm-10'>
              <Form.Control as="select" name="reviewStar" onChange={handleUpdateForm}>
                <option value="5">★★★★★</option>
                <option value="4">★★★★☆</option>
                <option value="3">★★★☆☆</option>
                <option value="2">★★☆☆☆</option>
                <option value="1">★☆☆☆☆</option>
              </Form.Control>
            </div>
          </Form.Group>
          <Form.Group className="mb-3 row" controlId="mContent">
            <Form.Label className="col-sm-2 col-form-label">내용</Form.Label>
            <div className='col-sm-10'>
              <Form.Control name="reviewContent" onChange={handleUpdateForm} as="textarea" rows={3} className='form-control form-control-sm' placeholder="리뷰 내용을 입력하세요." />
            </div>
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={UhandleClose}>
            닫기
          </Button>
          <Button variant="primary" onClick={()=>{UhandleClose(); reviewUpdate(review.market_no, review.review_no);}}>
            수정하기
          </Button>
        </Modal.Footer>
      </Modal>     
    {/* ========================== [[ 수정하기 Modal ]] =========================>*/}
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
                   <ModalUl onClick={() => {
                      handleShowUpdate();
                    }}>수정하기</ModalUl>
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
                {isLiked ? (
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
