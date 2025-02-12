import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar/AppNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Featured from './pages/Featured';
import Footer from './pages/Footer'; 
import Menu from './pages/Menu';
import Location from './pages/Location';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <AppNavbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/featured" element={<Featured />} /> 
          <Route path="/menu" element={<Menu />} /> 
          <Route path="/store" element={<Location />} /> 
          <Route path="/faq" element={<FAQ />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
