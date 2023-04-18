import React, { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../include/Header';
import Footer from '../include/Footer';

import { categories} from './MarketData';
import { dislikeDB, likeDB, marketDeleteDB, marketDetailDB, reviewInsertDB } from '../../service/marketLogic';
import MarketReview from './MarketReview';
import MarketQna from './MarketQna';
import { useCookies } from 'react-cookie';
import { Button } from 'react-bootstrap';


const MarketDetail = () => {
  
  const navigate = useNavigate()
  const [cookies, setCookies] = useCookies(['cart']);
  let cartList=[];
  let [cartAdd,setCartAdd]=useState({});
  //쿠키에 장바구니 담기
      
      if(cookies===undefined){//장바구니 없는 경우
        //앞의 키값은 바꾸지 않기! 은재언니가 씀 뒤에는 변수로 연결
        cartList={cartAdd}
      }else{//장바구니 이미 있는 경우
       cartList=[...cookies, {cartAdd}]
      }
  //3600000초 후에 없어지기-장바구니 리셋
  //Date.now() + 259200000의 값을 expires에 할당하면 3일 후 만료되는 쿠키를 설정할 수 있습니다.
  setCookies('cart', 
    cartList, {expires: new Date(Date.now() +259200000)}
    )

   // 해시값으로 글번호 가져오기
  const {mno} = useParams()
  console.log("mno => " + mno);

  // 로그인할때 세션스토리지에 담았다가 꺼낼 것!
  // 아이디, 닉네임 담을 변수 - 단위테스트용!
  const [userId, setUserId] = useState('test1')
  const [userNickname, setUserNickname] = useState('테스트1')

  // 상세보기 정보  변수 - file_exist(파일존재여부), liked(좋아요 누른 게시물인지 아닌지 판별) 고려하기!!
  const [detailPost, setDetailPost] = useState({})
  
  // 리뷰 좋아요 변수
  const [liked, setLiked] = useState([{}])
  // 리뷰 좋아요 판별 변수
  const [isLiked, setIsLiked] = useState(false)
  // useEffect 실행용 변수
  const [start, setStart] = useState('')
  // 해당글 카테고리 저장
  const [category, setCategory] = useState('all')

  /* db에서 판매글 상세보기 정보 가져오기 */
  useEffect(() => {
    const marketDetail = async() => {
      const market = {
        market_no: mno,
        user_nickname: userNickname
      }
      const res = await marketDetailDB(market)
      console.log(res.data)

      const temp = JSON.stringify(res.data)
      const jsonDoc = JSON.parse(temp)
      
     
      // 상세보기 db 담기
      setDetailPost({
        market_no: jsonDoc[0].MARKET_NO,
        user_nickname: jsonDoc[0].USER_NICKNAME,
        type_market: jsonDoc[0].TYPE_MARKET,
        market_category: jsonDoc[0].MARKET_CATEGORY,
        market_title: jsonDoc[0].MARKET_TITLE,
        market_content: jsonDoc[0].MARKET_CONTENT,
        market_price: jsonDoc[0].MARKET_PRICE,
        market_date: jsonDoc[0].MARKET_DATE,
      })
      //장바구니 카트에 담기
      setCartAdd({
        "marketNum" : jsonDoc[0].MARKET_NO, 
        "marketImg" : "대표이미지.png",//프론트에서 대표이미지 처리 할예정
        "marketName" : jsonDoc[0].MARKET_TITLE,
        "marketOption" : "시간선택",//프론트에서 시간선택 처리 할예정
        "marketCnt" : jsonDoc[0],//????????
        "marketPrice" : jsonDoc[0].MARKET_PRICE 
      })
      
      // 카테고리 담기
      {categories.map((item) => {
        if(item.name == jsonDoc[0].MARKET_CATEGORY) {
          setCategory(item.category)
          console.log('1!!!'+item.category);//1은 무슨 뜻인가여 정윤짱
        }
      })}
      console.log(category);
      //리뷰 전체조회
      
      // 리뷰 좋아요확인 db 담기
      const Likelist = []
      if(jsonDoc.length > jsonDoc[0].LIKE_COUNT+1) {
        for(let i=jsonDoc[0].LIKE_COUNT+1; i<jsonDoc.length; i++) {
          const obj = {
            like_type: jsonDoc[i].LIKE_TYPE,
            like_no: jsonDoc[i].LIKE_NO,
            like_group: jsonDoc[i].LIKE_GROUP,
            like_step: jsonDoc[i].LIKE_STEP,
            
          }
          Likelist.push(obj)
          if(obj.like_type == 0 && obj.like_no == mno && obj.like_group == -1) {
            setIsLiked(true)
          }
        }
      }
      setLiked(Likelist)
    }
    marketDetail()
  }, [isLiked, mno, start])

  /* 판매글 Dot버튼-신고하기*/
  const [is_ClickBtnDot, setClickBtnDot] = useState(false);
  const onClickBtnDot = () => {
    setClickBtnDot((is_ClickBtnDot) => !is_ClickBtnDot);
  };
  // 글 삭제 버튼
  const deletePost = async () => {
    console.log('deletePost' + mno);
    const market = {
      market_no: mno,
    }
    const res = await marketDeleteDB(market)
    console.log('deletePost=> ' + res.data);
    navigate('/market')//마켓페이지로 돌아가기
  }
  // 글 수정 버튼
  const editPost = () => {
    console.log('editPost');
  };
  // 글 신고 버튼
  const reportPost = () => {
    console.log('reportPost');
  };

  /* 리뷰 좋아요 버튼 */  
  const reviewlike = async(type, group, step) => {
    const market = {
      user_id: userId,
      like_type: type,
      like_no: mno,
      like_group: group,
      like_step: step,
    }
    const res = await likeDB(market)
    console.log('likeOn=> ' + res.data);
    // review 좋아요인 경우
    if(type === 2) {
      setIsLiked(true)
    }
  }
  //리뷰 좋아요 취소
  const reviewDislike = async(type, group, step) => {
    const market = {
      user_id: userId,
      like_type: type,
      like_no: mno,
      like_group: group,
      like_step: step,
    }
    const res = await dislikeDB(market)
    console.log('likeOff=> ' + res.data);
    // 리뷰 좋아요인 경우
    if (type === 2) {
        setStart(new Date())
    }
  }
  // 리뷰 좋아요 설정 ?????????
  // useEffect (() => {
  //   {liked && liked.map((item) => (
  //     item.like_type === 2 && item.like_no === mno && item.like_group === -1 ?
  //     setIsLiked(true) : setIsLiked(false)
  //   ))}
  // }, [setDetailPost, setComments, setLiked, mno])
  // 리뷰 좋아요 버튼
  const btnReviewLike = (rno, rstep) => {
    let judge = 0
    {liked && liked.map((item) => {
      if(item.like_type === 1 && item.like_group == rno && item.like_step == rstep) {
        judge = judge+1
      }
    })}
    // 리뷰 좋아요 누른 기록이 있을 경우
    if(judge > 0) {
      reviewDislike(1, rno, rstep)
      console.log('좋아요취소=> ' + judge);
    }
    // 리뷰 좋아요 누른 기록 없는 경우
    else {
      reviewlike(1, rno, rstep)
      console.log('좋아요확인=> ' + judge);
    }
  }
  // 리뷰 좋아요 색 판별
  const commentColor = (cno, cstep) => {
    let judge = 0
    {liked && liked.map((item) => {
      if(item.like_type === 1 && item.like_group == cno && item.like_step == cstep) {
        judge++
      }
    })}
    // 리뷰 좋아요 누른 기록이 있을 경우
    if(judge > 0) {
      return "#4996F3"
    }
  }

  /* 리뷰 */
  // 리뷰 내용 담기
  const [review, setReview] = useState('');
  const handleReview = (e) => {
    console.log(e);
    setReview(e);
  };
  // 리뷰달기 버튼
  const btnReview = async() => {
    const market = {
      market_no: mno,
      user_id: userId,
      review_content: review
    }
    const res = await reviewInsertDB(market)
    console.log(res.data)
    setReview('') // 리뷰 초기화
    const reviewInput = document.getElementById('reviewInput')
    reviewInput.value = '' // 코멘트 input창 초기화
    setStart(new Date()) // useEffect 부르는 용도
  }

  return (
    <>
    <Header />
     <h1>
      마켓 상세보기
      </h1>
      <Button onClick={setCartAdd}>장바구니담기</Button>
      <Button>결제하기</Button>
     <MarketReview />
     <MarketQna />
    <Footer />
    </>
  )
}

export default MarketDetail
