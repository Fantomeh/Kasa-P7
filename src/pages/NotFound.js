// src/pages/NotFound.js
import React from 'react';
import { Header } from "../components/Header"
import { Link } from 'react-router-dom';
import { Footer } from "../components/Footer"
import '../Styles/NotFound.css'


const NotFound = () => {
  return (
    <div className='container'>
      <Header />
      <div className='Erreur-container'>
        <h1 className='H1-erreur'>404</h1>
        <p className='p-erreur'>Oups! La page que vous demandez n'existe pas.</p>
        <Link className='Link-Erreur' to="/">Retourner sur la page d’accueil</Link>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
