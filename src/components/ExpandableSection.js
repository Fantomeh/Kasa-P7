import React, { useState } from 'react';
import '../Styles/ExpandableSection.css';
import minifleche from '../img/minifleche.png';

// Ajoutez la prop "id" au composant ExpandableSection
const ExpandableSection = ({ id, title, children }) => {
  // Utilisez l'état pour déterminer si la section est ouverte ou fermée
  const [isOpen, setIsOpen] = useState(false);

  // Créez un gestionnaire d'événements pour gérer le clic sur le titre
  const handleClick = () => {
    // Basculer l'état isOpen à chaque clic
    setIsOpen(!isOpen);
  };

  return (
    // Créez un conteneur pour le composant ExpandableSection
    <div className='Expandable'>
      {/* Lorsque l'utilisateur clique sur le titre, déclenchez le gestionnaire d'événements handleClick */}
      <div
        onClick={handleClick}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        className='Expandable-Top'
      >
        {/* Affichez le titre de la section */}
        <h3 className='Expandable-title'>{title}</h3>
        {/* Affichez l'image de la flèche et modifiez son style en fonction de l'état isOpen */}
        <img
          src={minifleche}
          alt='Toggle'
          className='Expandable-img'
          style={{
            marginLeft: 'auto',
            // Faites pivoter l'image de 180 degrés lorsque la section est ouverte
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
            // Ajoutez une transition pour que l'image pivote doucement
            transition: 'transform 0.3s ease-in-out',
          }}
        />
      </div>
      {/* Si la section est ouverte, affichez les enfants (le contenu de la section) */}
      {isOpen && <div className='Expandable-text'>{children}</div>}
    </div>
  );
};

export default ExpandableSection;
