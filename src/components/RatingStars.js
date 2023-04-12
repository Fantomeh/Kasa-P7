// RatingStars.js
import React from "react";

// Importer les images
import etoilePleine from "../img/étoilePleine.png";
import etoileVide from "../img/étoileVide.png";

// Déclarer le composant RatingStars qui prend en paramètre un objet contenant la propriété "rating"
export const RatingStars = ({ rating }) => {
  // Initialiser un tableau vide pour contenir les étoiles
  const stars = [];

  // Utiliser une boucle for pour créer les étoiles en fonction du rating
  for (let i = 1; i <= 5; i++) {
    // Si i est inférieur ou égal au rating, ajouter une étoile pleine, sinon ajouter une étoile vide
    if (i <= rating) {
      stars.push(
        <img
          key={i}
          src={etoilePleine}
          alt={`Étoile pleine ${i}`}
          className="rating-star"
        />
      );
    } else {
      stars.push(
        <img
          key={i}
          src={etoileVide}
          alt={`Étoile vide ${i}`}
          className="rating-star"
        />
      );
    }
  }

  // Retourner un élément <div> contenant les étoiles
  return <div className="Container-rating-star">{stars}</div>;
};
