// Importer les bibliothèques et composants nécessaires
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data/logements.json";
import NotFound from "./NotFound";
import Carousel from "../components/Carousel";
import ExpandableSection from "../components/ExpandableSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { AccommodationTitle } from "../components/AccommodationTitle";
import { HostDetails } from "../components/HostDetails";
import { EquipmentList } from "../components/EquipmentList";
import { TagList } from "../components/TagList";
import { Localisation } from "../components/Localisation";
import { RatingStars } from "../components/RatingStars";



// Déclarer le composant Accommodation
export const Accommodation = () => {
  // Utiliser les paramètres de l'URL pour récupérer l'ID du logement
  const { id } = useParams();

  // Déclarer l'état du logement et l'initialiser à null
  const [accommodation, setAccommodation] = useState(null);

  // Déclarer l'état pour vérifier si le logement est introuvable et l'initialiser à false
  const [notFound, setNotFound] = useState(false);

  // Utiliser l'effet pour rechercher le logement correspondant à l'ID et mettre à jour l'état du logement
  useEffect(() => {
    const foundAccommodation = data.find((item) => item.id === id);
    if (foundAccommodation) {
      setAccommodation(foundAccommodation);
    } else {
      setNotFound(true);
    }
  }, [id]);

  // Si le logement n'est pas trouvé, afficher la page NotFound
  if (notFound) {
    return <NotFound />;
  }

  // Si le logement n'a pas encore été trouvé, afficher un message de chargement
  if (!accommodation) {
    return <div>Chargement...</div>;
  }

  // Retourner le contenu du composant Accommodation avec les composants et les données du logement
  return (
    <div>
      {/* Afficher le composant Header */}
      <Header />

      {/* Afficher le composant Carousel avec les images du logement */}
      <Carousel pictures={accommodation.pictures} />

      {/* Afficher le titre du logement */}
      <AccommodationTitle title={accommodation.title} />

      {/* Afficher les informations de localisation dans une section extensible */}
      <Localisation location={accommodation.location} />


      {/* Afficher la liste des tags */}
      <TagList tags={accommodation.tags} />

      {/* Afficher les étoiles en fonction du rating */}
      <RatingStars rating={accommodation.rating} />

      {/* Afficher les détails de l'hôte */}
      <HostDetails host={accommodation.host} />

      {/* Afficher la description du logement dans une section extensible */}
      <ExpandableSection title="Description">
        <p>{accommodation.description}</p>
      </ExpandableSection>

      {/* Afficher la liste des équipements dans une section extensible */}
      <EquipmentList equipments={accommodation.equipments} />

      {/* Afficher le composant Footer */}
      <Footer />
    </div>
  );
};
