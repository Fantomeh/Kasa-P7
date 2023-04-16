// Accommodation.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Styles/Accommodation.css";
import { AccommodationTitle } from "../components/AccommodationTitle";
import Carousel from "../components/Carousel";
import { EquipmentList } from "../components/EquipmentList";
import ExpandableSection from "../components/ExpandableSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HostDetails } from "../components/HostDetails";
import { Localisation } from "../components/Localisation";
import { RatingStars } from "../components/RatingStars";
import { TagList } from "../components/TagList";
import NotFound from "./NotFound";

// Déclarer le composant Accommodation
export const Accommodation = () => {
  // Utiliser les paramètres de l'URL pour récupérer l'ID du logement
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Utiliser useEffect pour exécuter du code lors du montage ou de la mise à jour du composant
  useEffect(() => {
    // Récupérer les données de logements à partir du fichier logements.json
    fetch('/logements.json')
      .then((response) => response.json()) // Convertir la réponse en JSON
      .then((data) => {
        // Trouver le logement correspondant à l'ID récupéré des paramètres de l'URL
        const foundAccommodation = data.find((item) => item.id === id);
        // Mettre à jour l'état du logement avec le logement trouvé
        setAccommodation(foundAccommodation);
        // Mettre à jour l'état de chargement pour indiquer que les données ont été chargées
        setIsLoading(false);
      })
      // Gérer les erreurs éventuelles lors de la récupération des données
      .catch((error) => {
        console.error('Erreur lors du chargement des données :', error);
        // Mettre à jour l'état de chargement pour indiquer que le chargement a échoué
        setIsLoading(false);
      });
  }, [id]); // Exécuter useEffect uniquement lorsque l'ID change

  // Si les données sont en cours de chargement, affichez un message de chargement
  if (isLoading) {
    return <div>Chargement des données...</div>;
  }

  // Si le logement n'est pas trouvé, afficher la page NotFound
  if (!accommodation) {
    return <NotFound />;
  }

  // Retourner le contenu du composant Accommodation avec les composants et les données du logement
  return (
    <>
    <div className="container">
      {/* Afficher le composant Header */}
      <Header />

      {/* Afficher le composant Carousel avec les images du logement */}
      <Carousel pictures={accommodation.pictures} />
      <div className="container-Destop">
        <div className="Mini-container-Destop">
          {/* Afficher le titre du logement */}
          <AccommodationTitle title={accommodation.title} />

          {/* Afficher les informations de localisation dans une section extensible */}
          <Localisation location={accommodation.location} />

          {/* Afficher la liste des tags */}
          <TagList tags={accommodation.tags} />
        </div>
        <div className="Rating-name">
          {/* Afficher les étoiles en fonction du rating */}
          <RatingStars rating={accommodation.rating} />

          {/* Afficher les détails de l'hôte */}
          <HostDetails host={accommodation.host} />
        </div>

      </div>
      <div className="ExpandableSection-Destop">
        
        {/* Ajoutez une div autour de la section extensible "Description" */}
        <div className="width">
          <ExpandableSection title="Description">
            <p>{accommodation.description}</p>
          </ExpandableSection>
        </div>
        
        {/* Ajoutez une div autour de la section extensible "Équipements" */}
        <div className="width">
          <EquipmentList equipments={accommodation.equipments} />
        </div>
       
      </div>
    </div>
    {/* Afficher le composant Footer */}
    <Footer />
  </>
  );
};
