import React, { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../include/Header';
import Footer from '../include/Footer';

import { categories} from './MarketData';
import { dislikeDB, likeDB, marketDeleteDB, marketDetailDB, reviewInsertDB } from '../../service/marketLogic';
import MarketReview from './MarketReview';
import MarketQna from './MarketQna';
// import { useCookies } from 'react-cookie';
import { Button } from 'react-bootstrap';
import ProductDetail from './ProductDetail';
import MarketCategory from './MarketCategory';
import DetailNav from './DetailNav';


const MarketDetail = () => {
  
  const navigate = useNavigate()
  // /* 장바구니 */
  // const [cookies, setCookies] = useCookies(['cart']);
  // let cartList=[];
  // const [cartAdd, setCartAdd]=useState({});
  // let count=0;
  
  
  // //쿠키에 장바구니 담기 함수
  // const cookieAdd=()=>{
  //   console.log("cookieAdd")
  //   if(cookies===undefined){//장바구니 없는 경우
  //       //앞의 키값은 바꾸지 않기! 은재언니가 씀 뒤에는 변수로 연결
  //       cartList.push(cartAdd)
  //     }else{//장바구니 이미 있는 경우
  //       cartList=[...cookies.cart,cartAdd]
  //       console.log(cookies.cart);
  //     }
  //     //3600000초 후에 없어지기-장바구니 리셋
  //     //Date.now() + 259200000의 값을 expires에 할당하면 3일 후 만료되는 쿠키를 설정할 수 있습니다.
  //     setCookies('cart', 
  //       cartList, {expires: new Date(Date.now() +259200000)}
  //       )

  // }

   // 해시값으로 글번호 가져오기
  const {mno} = useParams()
  console.log("mno => " + mno);

  // 로그인할때 세션스토리지에 담았다가 꺼낼 것!
  // 아이디, 닉네임 담을 변수
  const [userId] = useState(window.sessionStorage.getItem('user_id'))
  const [userNickname] = useState(window.sessionStorage.getItem('user_nickname'))


  // 상세보기 정보  변수 - file_exist(파일존재여부), liked(좋아요 누른 게시물인지 아닌지 판별) 고려하기!!
  const [detailPost, setDetailPost] = useState({})
  console.log(detailPost);
  // const detailPost=detailPosts.map((product)=>(
  //   console.log(product)
  // ))
  
  // useEffect 실행용 변수
  const [start, setStart] = useState('')

  // 해당글 카테고리 저장
  const [category, setCategory] = useState('all')

  //썸네일 노썸네일 URL구분
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [detailImageUrls, setDetailImageUrls] = useState([]);


  /* db에서 판매글 상세보기 정보 가져오기 */
  useEffect(() => {
    const marketDetail = async() => {
      let tempNick = ''
      if(userNickname != null) {
        tempNick = window.sessionStorage.getItem('user_nickname')
      }
      const market = {
        market_no: mno,
        user_nickname: tempNick
      }
      const res = await marketDetailDB(market)
      console.log(res.data)
     
      const temp = JSON.stringify(res.data)
      const jsonDoc = JSON.parse(temp)
      
      // //쿠키에 상품정보담기
      // setCartAdd({
      //   "marketNum" : jsonDoc[0].MARKET_NO, 
      //   "marketImg" : "대표이미지.png",//프론트에서 대표이미지 처리 할예정
      //   "marketName" : jsonDoc[0].MARKET_TITLE,
      //   "marketOption" : "시간선택",//프론트에서 시간선택 처리 할예정
      //   "marketCnt" : count,//사용자가 선택한 갯수
      //   "marketPrice" : jsonDoc[0].MARKET_PRICE 
      // })
     
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
        review_count:jsonDoc[0].REVIEW_COUNT,
        star_avg:jsonDoc[0].STAR_AVG,
        file_urls: jsonDoc.map((doc) => doc.FILE_URL),
        file_steps:jsonDoc.map((doc) => doc.FILE_STEP),
      })

      let thumbnailUrl = "";
      const detailImageUrls = [];
    
      for (let i = 0; i < jsonDoc.length; i++) {
        if (jsonDoc[i].FILE_STEP === 1) {
          thumbnailUrl = jsonDoc[i].FILE_URL;
        } else if (jsonDoc[i].FILE_STEP === 0) {
          detailImageUrls.push(jsonDoc[i].FILE_URL);
        }
      }
    
      setThumbnailUrl(thumbnailUrl);
      setDetailImageUrls(detailImageUrls);

     
      // 카테고리 담기
      {categories.map((gory) => {
        if(gory.name == jsonDoc[0].MARKET_CATEGORY) {
          setCategory(gory.category)
          console.log('넣어준 카테고리'+gory.category);
        }
      })}
      console.log(category);
    
    }
    marketDetail()
  }, [mno, start])

  
  // 글 삭제 버튼
  const deletePost = async () => {
    console.log('deletePost' + mno);
    const market = {
      market_no: mno,
    }
    const res = await marketDeleteDB(market)
    console.log('deletePost=> ' + res.data);
    navigate('/market/all')//마켓페이지로 돌아가기
  }
  // 글 수정 버튼
  const editPost = () => {
    console.log('editPost');
  };
  
  return (
    <>
    <Header />
      <MarketCategory />
      {/* <ProductDetail detailPost={detailPost} thumbnailUrl={thumbnailUrl} detailImageUrls={detailImageUrls} cookieAdd={cookieAdd}/> */}
      <ProductDetail detailPost={detailPost} thumbnailUrl={thumbnailUrl} detailImageUrls={detailImageUrls}/>
        <DetailNav  mno={mno}/>
    <Footer />
    </>
  )
}

export default MarketDetail
