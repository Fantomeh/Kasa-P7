import React, { useState } from 'react';

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
    <div>
      {/* Affichez le titre et attachez le gestionnaire d'événements onClick */}
      <h3 onClick={handleClick} style={{ cursor: 'pointer' }}>
        {title}
      </h3>
      {/* Si la section est ouverte, affichez les enfants */}
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default ExpandableSection;
