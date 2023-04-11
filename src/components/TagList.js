import React from "react";
import "../Styles/Accommodation.css";

// Déclarer le composant TagList qui prend en paramètre un objet contenant la propriété "tags"
export const TagList = ({ tags }) => {
  // Retourner un élément div contenant la liste des tags
  return (
    <div>
      {/* Créer un élément de liste non ordonnée (ul) pour contenir la liste des tags */}
      <ul className="tag-list">
        {/* Utiliser la méthode map pour itérer sur chaque élément du tableau "tags" */}
        {tags.map((tag, index) => (
          // Afficher chaque tag dans un élément de liste (li) avec une clé unique basée sur l'index
          <li key={index} className="tag-item">{tag}</li>
        ))}
      </ul>
    </div>
  );
};
