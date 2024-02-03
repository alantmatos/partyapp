import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Event from './components/Event/Event';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {




  return (
    <>
      <Navbar />
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/events' element={<Event />} />
          <Route path='/oldEvents' element={<About />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
