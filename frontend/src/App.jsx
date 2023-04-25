import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './components/page/HomePage';
import BoardPage from './components/page/BoardPage';
import OrderPage from './components/page/OrderPage';
import CartPage from './components/page/CartPage';
import MarketPage from './components/page/MarketPage';
import BoardWriteForm from './components/board/BoardWriteForm';
import BoardDetail from './components/board/BoardDetail';
import SignUpPage from './components/auth/SignUpPage';
import SignInPage from './components/auth/SignInPage';
import FaqPage from './components/page/FaqPage';
import MarketWrite from './components/market/MarketWrite';
import BoardUpdateForm from './components/board/BoardUpdateForm';
import MarketDetail from './components/market/MarketDetail';
import AdminPage from './components/page/AdminPage';
import FindUserPage from './components/auth/FindUserPage';
import InquiryWriteForm from './components/support/InquiryWriteForm';
import MarketReview from './components/market/MarketReview';
import AdminUserDetail from './components/admin/AdminUserDetail';
import AdminOrderDetail from './components/admin/AdminOrderDetail';
import PaymentResult from './components/order/PaymentResult';
import InquiryList from './components/support/InquiryList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthChange } from './service/authLogic';
import GoogleSignUp from './components/auth/GoogleSignUp';
import { sessionListDB } from './service/memberLogic';
import KakaoLogin from './components/auth/KakaoLogin';


function App({authLogic}) {
  console.log('App')
  //화면을 전환시킬 때 - window.location.href 차이점 - 새로고침 요청발생 - 가상돔 사용하지 않음
  const navigate = useNavigate()//가상돔 사용됨
  const dispatch = useDispatch()//허브 - action.type(switch-선택), action.payload(내용)
  const ssg = sessionStorage;
  useEffect(()=>{//의존성 배열 - 의존성 배열에 있는 변수, 함수, 훅이 변할때 마다 다시 호출 가능함
    console.log('effect')
    const asyncDB = async() => {//함수 선언 - memberListDB호출
      console.log('asyncDB')
      const auth = authLogic.getUserAuth()
      //현재 인증된 사용자 정보를 가져온다
      const user = await onAuthChange(auth)
      console.log(user)
      //사용자가 있으면 - userId가 있다
      //구글 로그인으로 사용자 정보를 가지고 있을 때
      //user정보가 있으면 sessionStorage에 담는다 - email
      if(user){
        console.log('user정보가 있을때')
        //세션스토리지에 이메일 주소가 등록됨 - 단 구글로그인이 되어있는 상태일때만
        //ssg.setItem('email',user.email)
        const res = await sessionListDB({user_id:user.uid})
        console.log(res.data)
        //오라클서버의 회원집합에 uid가 존재하면 - 세션 스토리지에 값을 담자
        if(res.data!==0){//스프링 부트 - RestMemberController - memberList에서 넘어오는 정보
          const temp = JSON.stringify(res.data)
          const jsonDoc = JSON.parse(temp)
          ssg.setItem('name',jsonDoc[0].USER_NAME)
          ssg.setItem('nickname',jsonDoc[0].USER_NICKNAME)
          ssg.setItem('email',jsonDoc[0].USER_EMAIL)
          ssg.setItem('id',jsonDoc[0].USER_ID)
          return //렌더링이 종료됨
         
        }
        //오라클서버의 회원집합에 uid가 존재하지 않으면
        else{
          console.log("해당 구글 계정은 회원가입 대상입니다. 회원가입 부탁드립니다.")
        }
      }
      //사용자 정보가 없을 때
      else{
        console.log('user정보가 없을때')
        if(ssg.getItem('email')){
          //세션스토리지에 있는 값 모두 삭제하기
          ssg.clear()
          window.location.reload()
        }
      }//end of else
    }
    asyncDB()
  },[dispatch])
  return (
    <>
    <Routes>
      <Route path='/' exact={true} element={<HomePage />} />
      <Route path='/board/:category'  element={<BoardPage />} />
      <Route path='/board/detail/:bno' element={<BoardDetail />} />
      <Route path='/board/write' exact={true} element={<BoardWriteForm />} />
      <Route path='/board/update/:bno' element={<BoardUpdateForm />} />
      <Route path='/admin/:category' element={<AdminPage />} />
      <Route path='/admin/userdetail/:user' element={<AdminUserDetail />} />
      <Route path='/admin/orderdetail/:ono' element={<AdminOrderDetail />} />
      <Route path='/cart' exact={true} element={<CartPage />} />
      <Route path='/order' exact={true} element={<OrderPage />} />
      <Route path='/payResult' exact={true} element={<PaymentResult />} />
      <Route path='/signup' exact={true} element={<SignUpPage authLogic ={authLogic}/>} />
      <Route path='/signin' exact={true} element={<SignInPage authLogic ={authLogic}/>} />
      <Route path='/market' exact={true} element={<MarketPage />} />
      <Route path='/market/review' exact={true} element={<MarketReview />} />
      <Route path='/market/write' exact={true} element={<MarketWrite />} />
      <Route path='/market/detail' element={<MarketDetail />} />
      <Route path='/support/:category' exact={true} element={<FaqPage />} />
      <Route path='/support/inquiryBoard' exact={true} element={<InquiryList />} />
      <Route path='/support/write' exact={true} element={<InquiryWriteForm />} />
      <Route path='/findEmail' exact ={true} element={<FindUserPage/>} />
      <Route path='/auth/googleSignUp' exact={true} element={<GoogleSignUp authLogic ={authLogic}/>}/>
      <Route path='/auth/kakao' exact={true} element={<KakaoLogin />}/>
    </Routes>
    </> 
  );
}

export default App;