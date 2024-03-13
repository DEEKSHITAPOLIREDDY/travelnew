import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Contact from './pages/Contact/Contact'; // Import the ContactPage component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Europe from './pages/description/Europe/Europe';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/description/Europe" element={<Europe/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
