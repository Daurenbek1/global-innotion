import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './containers/home/Home';
import News from './containers/news/News';

import './styles/App.css';
import './styles/slick/slick.css';
import './styles/slick/slick-theme.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news/:newId' element={<News />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
