import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import CalculatorPage from '../CalculatorPage/CalculatorPage';
import Home from '../Home/Home';
import Quote from '../Quote/Quote';
import './App.css';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/CalculatorPage" element={<CalculatorPage />} />
      <Route path="/Quote" element={<Quote />} />
    </Routes>
  </BrowserRouter>
);

export default App;
