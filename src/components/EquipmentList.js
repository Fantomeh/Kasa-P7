// EquipmentList.js
import React from "react";
import ExpandableSection from "./ExpandableSection";

// Déclarer le composant EquipmentList qui prend en paramètre un objet contenant la propriété "equipments"
export const EquipmentList = ({ equipments }) => {
  // Retourner un composant ExpandableSection contenant la liste des équipements
  return (
    <div className="List-Destop">
    <ExpandableSection title="Équipements">
      {/* Créer un élément div pour contenir la liste des équipements */}
      <div>
        {/* Utiliser la méthode map pour itérer sur chaque élément du tableau "equipments" */}
        {equipments.map((equipment, index) => (
          // Afficher chaque équipement dans un élément <p> avec une clé unique basée sur l'index
          <p key={index}>{equipment}</p>
        ))}
      </div>
    </ExpandableSection>
    </div>
  );
};
