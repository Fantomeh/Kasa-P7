// Importez les bibliothèques nécessaires
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data/logements.json";

// Créez un composant fonctionnel pour afficher les détails d'un logement
export const Accommodation = () => {
  // Récupérez l'ID du logement à partir des paramètres de l'URL
  const { id } = useParams();

  // Utilisez l'ID pour trouver le bon logement dans le fichier JSON
  // Initialisez l'état du logement avec null
  const [accommodation, setAccommodation] = useState(null);

  // Utilisez l'effet pour mettre à jour l'état du logement lors de la récupération de l'ID
  useEffect(() => {
    const foundAccommodation = data.find((item) => item.id === id);
    setAccommodation(foundAccommodation);
  }, [id]);

  // Si le logement n'est pas encore trouvé, affichez un message de chargement
  if (!accommodation) {
    return <div>Chargement...</div>;
  }

  // Affichez les détails du logement trouvé
  return (
    <div>
      // Affichez le titre du logement
      <h2>{accommodation.title}</h2>

      // Affichez l'image de couverture du logement
      <img src={accommodation.cover} alt={accommodation.title} />

      // Affichez la description du logement
      <p>{accommodation.description}</p>

      // Affichez les informations sur l'hôte
      <h3>Hôte</h3>
      <p>{accommodation.host.name}</p>

      // Affichez la photo de l'hôte
      <img
        src={accommodation.host.picture}
        alt={`Photo de l'hôte ${accommodation.host.name}`}
      />

      // Affichez la liste des équipements
      <h3>Équipements</h3>
      <ul>
        {accommodation.equipments.map((equipment, index) => (
          // Affichez chaque équipement dans un élément de liste
          <li key={index}>{equipment}</li>
        ))}
      </ul>

      // Affichez la liste des tags
      <h3>Tags</h3>
      <ul>
        {accommodation.tags.map((tag, index) => (
          // Affichez chaque tag dans un élément de liste
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};
