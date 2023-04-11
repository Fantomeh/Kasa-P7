// Importer la bibliothèque React
import React from "react";

// Déclarer le composant AccommodationTitle qui prend en paramètre un objet contenant la propriété "title"
export const AccommodationTitle = ({ title }) => {
  // Retourner un élément de titre h2 contenant le titre du logement
  return <h2 className="AccommodationTitle">{title}</h2>;
};
