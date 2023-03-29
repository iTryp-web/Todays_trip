import { Route, Routes } from 'react-router-dom';
import TestPage from './components/page/TestPage';
import HomePage from './components/page/HomePage';
import BoardPage from './components/page/BoardPage';
import OrderPage from './components/page/OrderPage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' exact={true} element={<HomePage />} />
      <Route path='/community' exact={true} element={<BoardPage />} />
      <Route path='/test' exact={true} element={<TestPage />} />
      <Route path='/order' exact={true} element={<OrderPage />} />
    </Routes>
    </> 
  );
}

export default App;