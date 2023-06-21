import logo from './logo.svg';
import './App.css';
import Main from './pages/Main'
import Detail from './pages/Detail';
import { styled } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </Router>
  );
}


export default App;
