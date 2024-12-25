import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar/AppNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Featured from './pages/Featured';
import Footer from './pages/Footer'; 
import Menu from './pages/Menu';

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

        </Routes>
      </div>
    </Router>
  );
}

export default App;
