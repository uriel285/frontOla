import React from 'react';
import './App.css';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router';
import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import UbicacionPage from './pages/UbicacionPage';
import ComentariosPage from './pages/ComentariosPage';

function App(){
  return(
    <div className='App'>
      <BrowserRouter>
      <Header>
      <Nav/>
      </Header>
      <div className="content">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/nosotros' element={<NosotrosPage/>} />
        <Route path='/ubicacion' element={<UbicacionPage/>} />
        <Route path='/contacto' element={<ContactoPage/>} />
        <Route path='/comentarios' element={<ComentariosPage/>} />
      </Routes>
      </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
