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
import SignUp from './components/member/SignUp';
import SignIn from './components/member/SignIn';
import BoardLayout from './components/board/BoardLayout';
import BoardDetail from './components/board/BoardDetail';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' exact={true} element={<HomePage />} />
      <Route path='/board' exact={true} element={<BoardPage />} />
      <Route path='/board/all' exact={true} element={<BoardLayout />} />
      <Route path='/board/detail/:bno' element={<BoardDetail />} />
      <Route path='/board/write' exact={true} element={<BoardWriteForm />} />
      <Route path='/test' exact={true} element={<TestPage />} />
      <Route path='/cart' exact={true} element={<CartPage />} />
      <Route path='/order' exact={true} element={<OrderPage />} />
      <Route path='/market' exact={true} element={<MarketPage />} />
      <Route path='/order/success' exact={true} element={<OrderSuccess />} />
      <Route path='/order/fail' exact={true} element={<OrderFail />} />
      <Route path='/signup' exact={true} element={<SignUp />} />
      <Route path='/signin' exact={true} element={<SignIn />} />
    </Routes>
    </> 
  );
}

export default App;