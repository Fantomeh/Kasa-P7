// Importer React
import React from 'react';
// Importer les images du logo pour le header et le footer
import logoHeader from '../img/Logo.svg';
import logoFooter from '../img/logo-footer.svg';

// Définir le composant Logo avec la prop "position"
export const Logo = ({ position }) => {
  // Choisir la source du logo en fonction de la position (header ou footer)
  const logoSrc = position === "footer" ? logoFooter : logoHeader;
  // Choisir le texte alternatif en fonction de la position (header ou footer)
  const altText = position === "footer" ? "Footer Logo" : "Logo";
  // Choisir la classe CSS en fonction de la position (header ou footer)
  const className = position === "footer" ? 'logo-Footer' : 'logo-Header';

  // Rendre l'image du logo avec la source, le texte alternatif et la classe CSS appropriés
  return <img src={logoSrc} alt={altText} className={className} />;
};