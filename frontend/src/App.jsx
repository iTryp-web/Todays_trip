import './App.css'
import { Route, Routes } from 'react-router-dom';
import TestPage from './components/page/TestPage';
import HomePage from './components/page/HomePage';
import BoardPage from './components/page/BoardPage';
import OrderPage from './components/page/OrderPage';
import CartPage from './components/page/CartPage';
import OrderSuccess from './components/order/PaymentSuccess';
import OrderFail from './components/order/PaymentFail';
import MarketPage from './components/page/MarketPage';
import BoardWriteForm from './components/board/BoardWriteForm';
import BoardDetail from './components/board/BoardDetail';
import SignUpPage from './components/page/SignUpPage';
import SignInPage from './components/page/SignInPage';
import FaqPage from './components/page/FaqPage';
import MarketWrite from './components/market/MarketWrite';
import BoardUpdateForm from './components/board/BoardUpdateForm';
import MarketDetail from './components/market/MarketDetail';
import FindUserPage from './components/page/FindUserPage';



function App() {
  return (
    <>
    <Routes>
      <Route path='/' exact={true} element={<HomePage />} />
      <Route path='/board/:category'  element={<BoardPage />} />
      <Route path='/board/detail/:bno' element={<BoardDetail />} />
      <Route path='/board/write' exact={true} element={<BoardWriteForm />} />
      <Route path='/board/update/:bno' element={<BoardUpdateForm />} />
      <Route path='/test' exact={true} element={<TestPage />} />
      <Route path='/cart' exact={true} element={<CartPage />} />
      <Route path='/order' exact={true} element={<OrderPage />} />
      <Route path='/order/success' exact={true} element={<OrderSuccess />} />
      <Route path='/order/fail' exact={true} element={<OrderFail />} />
      <Route path='/signup' exact={true} element={<SignUpPage />} />
      <Route path='/signin' exact={true} element={<SignInPage />} />
      <Route path='/market' exact={true} element={<MarketPage />} />
      <Route path='/market/write' exact={true} element={<MarketWrite />} />
      <Route path='/market/detail' element={<MarketDetail />} />
      <Route path='/support/' exact={true} element={<FaqPage />} />
      <Route path='/support/refund' exact={true} element={<FaqPage />} />
      <Route path='/support/member-info' exact={true} element={<FaqPage />} />
      <Route path='/support/payment' exact={true} element={<FaqPage />} />
      <Route path='/support/login' exact={true} element={<FaqPage />} />
      <Route path='/support/service' exact={true} element={<FaqPage />} />
      <Route path='/findEmail' exact ={true} element={<FindUserPage/>} />
    </Routes>
    </> 
  );
}

export default App;