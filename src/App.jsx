import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './App.scss';

import Header from './components/header/Header';
import Home from './pages/Home';
import Trailer from './components/home-section/trailer/Trailer'; // Import for Trailer component
import Credit from './components/home-section/credit/Credit'; // Import for Credit (The Game) component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/leglp" element={<Home />} />
          <Route path="/overview" element={<Home />} />
          <Route path="/trailer" element={<Trailer />} />
          <Route path="/game" element={<Credit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
