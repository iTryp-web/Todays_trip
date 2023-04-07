import './App.css'
import { Route, Routes } from 'react-router-dom';
import TestPage from './components/page/TestPage';
import HomePage from './components/page/HomePage';
import BoardPage from './components/page/BoardPage';
import OrderPage from './components/page/OrderPage';
import CartPage from './components/page/CartPage';
import OrderSuccess from './components/order/OrderSuccess';
import OrderFail from './components/order/OrderFail';
import MarketPage from './components/page/MarketPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' exact={true} element={<HomePage />} />
      <Route path='/board' exact={true} element={<BoardPage />} />
      <Route path='/test' exact={true} element={<TestPage />} />
      <Route path='/cart' exact={true} element={<CartPage />} />
      <Route path='/order' exact={true} element={<OrderPage />} />
      <Route path='/market' exact={true} element={<MarketPage />} />
      <Route path='/order/success' exact={true} element={<OrderSuccess />} />
      <Route path='/order/fail' exact={true} element={<OrderFail />} />
    </Routes>
    </> 
  );
}

export default App;