// index.js

// Importez les bibliothèques nécessaires
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Home } from './pages/Home';
import { Accommodation } from './pages/Accommodation';
import NotFound from './pages/NotFound';

// Récupérez l'élément racine du DOM dans lequel vous voulez afficher votre application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendez votre application à l'intérieur de l'élément racine du DOM
root.render(
  <React.StrictMode>
    {/* Utilisez le composant Router pour gérer la navigation dans votre application */}
    <Router>
      <App>
        {/* Utilisez le composant Routes pour définir les différentes routes de votre application */}
        <Routes>
          {/* Définissez une route pour la page d'accueil */}
          <Route path="/" element={<Home />} />
          {/* Définissez une route pour une page de test */}
          <Route path="/test" element={<div>Salam</div>} />
          {/* Ajoutez une nouvelle route pour les pages de logement avec l'ID du logement en paramètre */}
          <Route
            path="/logement/:id"
            element={
              <Accommodation />
            }
          />
          {/* Ajoutez une route générique pour les pages 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

// Si vous voulez commencer à mesurer les performances de votre application, passez une fonction
// pour enregistrer les résultats (par exemple: reportWebVitals(console.log))
// ou envoyez-les à un point de terminaison d'analyse. Apprenez-en plus: https://bit.ly/CRA-vitals
reportWebVitals();
