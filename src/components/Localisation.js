// Localisation.js
import React from "react";

// Déclarer le composant Localisation qui prend en paramètre un objet contenant la propriété "location"
export const Localisation = ({ location }) => {
  // Retourner un élément <div> contenant les informations de localisation
  return (
    <div>
      {/* Afficher la localisation dans un élément <h3> */}
      <h3 className="Location">{location}</h3>
    </div>
  );
};
