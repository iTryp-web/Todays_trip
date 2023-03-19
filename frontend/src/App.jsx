import './App.css';
import { Route, Routes } from 'react-router-dom';
import TestPage from './components/page/TestPage';
import HomePage from './components/page/HomePage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' exact={true} element={<HomePage />} />
      <Route path='/test' exact={true} element={<TestPage />} />
    </Routes>
    </>
  );
}

export default App;
