import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';

// Other imports
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './App.scss';
import Header from './components/header/Header';
import Home from './pages/Home';
import Trailer from './components/home-section/trailer/Trailer';
import Credit from './components/home-section/credit/Credit';
import Analytics from './components/Analytics/Analytics'; // Make sure this path is correct

function App() {
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  useEffect(() => {
    const consent = getCookieConsentValue();
    if (consent === "true") {
      setIsConsentGiven(true);
    }
  }, []);

  return (
    <Router>
   <CookieConsent
  location="bottom"
  buttonText="I agree"
  cookieName="userConsentCookie"
  style={{ background: "#2B373B" }} // Customize background color
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }} // Customize button style
  expires={150} // Cookie expiry
  onAccept={() => {
    setIsConsentGiven(true);
  }}
>
  This website uses cookies to enhance the user experience.{" "}
  <span style={{ fontSize: "12px" }}>Your use of the site indicates acceptance of our privacy policy.</span>
</CookieConsent>

      {isConsentGiven && <Analytics />} {/* Render Analytics only if consent is given */}
      
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
