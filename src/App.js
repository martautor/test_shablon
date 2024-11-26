import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Rates from './pages/Rates';
import Contact from './pages/Contact';
import PhoneNumberSearch from './pages/PhoneNumberSearch';

const App = () => {
  return (
    <Router>
      <Header />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/phone-search" element={<PhoneNumberSearch />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;