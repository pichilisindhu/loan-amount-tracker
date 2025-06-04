// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Pages/AboutUs';
import Contact from './Pages/ContactUs';
import Login from './Pages/Login-Form';
import Farmers from './Pages/Farmer-Details';
import Home from './Pages/Home';
import Signup from './Pages/SignUp';
import Land from './Pages/Land-Details';
import Crop from './Pages/Crop-Details';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/farmers" element={<Farmers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/land' element={<Land/>}/>
        <Route path='/crop' element={<Crop/>}/>
      </Routes>
    </Router>
  );
}

export default App;
