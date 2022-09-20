import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Footer from './components/Footer';
import Nomatch from './pages/Nomatch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/logement/:id' element={<Logement/>}/>
        <Route path='*' element={<Nomatch/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();