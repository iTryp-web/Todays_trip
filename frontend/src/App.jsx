import './App.css'
import { Route, Routes } from 'react-router-dom';
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




function App({authLogic}) {
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
    </Routes>
    </> 
  );
}

export default App;