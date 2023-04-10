import React, { useState } from 'react';
import '../Styles/ExpandableSection.css';

// Définissez le composant ExpandableSection, qui prend un titre et des enfants en tant que props
const ExpandableSection = ({ title, children }) => {
  // Utilisez l'état pour déterminer si la section est ouverte ou fermée
  const [isOpen, setIsOpen] = useState(false);

  // Créez un gestionnaire d'événements pour gérer le clic sur le titre
  const handleClick = () => {
    // Basculer l'état isOpen à chaque clic
    setIsOpen(!isOpen);
  };

  return (
    <div className='Expandable'>
      {/* Affichez le titre et attachez le gestionnaire d'événements onClick */}
      <h3 onClick={handleClick} style={{ cursor: 'pointer' }} className='Expandable-title'>
        {title}
      </h3>
      {/* Si la section est ouverte, affichez les enfants */}
      {isOpen && <div className='Expandable-text'>{children}</div>}
    </div>
  );
};

export default ExpandableSection;
