import './App.css';
import React from 'react'
import Header from './Component/Header/Header'
import Home from './Pages/Home';
import Booking from './Pages/Booking/Booking';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
