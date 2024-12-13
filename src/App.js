import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Featured from './pages/Featured'; 

function App() {
  return (
    <Router>
      <AppNavbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/featured" element={<Featured />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
