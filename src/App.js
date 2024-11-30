import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './view/Header';
import Destaque from './view/Destaque';
import Recusos from './view/Recursos';
import Informacao from './view/Informacao';
import Clientes from './view/Clientes';
import Precos from './view/Precos';
import Rodape from './view/Rodape';
import Login from './view/login';
import Signup from './view/signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={
          <div className="container">
            <Header />
            <Destaque />
            <Recusos />
            <Informacao />
            <Clientes />
            <Precos />
            <Rodape />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;