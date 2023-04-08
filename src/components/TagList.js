// TagList.js
import React from "react";

// Déclarer le composant TagList qui prend en paramètre un objet contenant la propriété "tags"
export const TagList = ({ tags }) => {
  // Retourner un élément div contenant la liste des tags
  return (
    <div>
      {/* Afficher le titre "Tags" */}
      <h3>Tags</h3>
      {/* Créer un élément de liste non ordonnée (ul) pour contenir la liste des tags */}
      <ul>
        {/* Utiliser la méthode map pour itérer sur chaque élément du tableau "tags" */}
        {tags.map((tag, index) => (
          // Afficher chaque tag dans un élément de liste (li) avec une clé unique basée sur l'index
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};
