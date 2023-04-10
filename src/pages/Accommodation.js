// Importer les bibliothèques et composants nécessaires
import React from "react";
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
import data from "../data/logements.json";
import NotFound from "./NotFound";

// Déclarer le composant Accommodation
export const Accommodation = () => {
  // Utiliser les paramètres de l'URL pour récupérer l'ID du logement
  const { id } = useParams();

  // Utiliser l'effet pour rechercher le logement correspondant à l'ID et mettre à jour l'état du logement
  const accommodation = data.find((item) => item.id === id)

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

      
    </div>
    {/* Afficher le composant Footer */}
    <Footer />
    </>
  );
};
