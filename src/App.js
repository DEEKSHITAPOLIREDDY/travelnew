import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Contact from './pages/Contact/Contact'; // Import the ContactPage component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>}/>


          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
