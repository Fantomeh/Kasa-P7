import React, { useState } from 'react';
import ExpandableSection from './ExpandableSection';

const ExpandableSupport = () => {
  const [openSection, setOpenSection] = useState(null);

  const handleClick = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <div>
      <ExpandableSection
        id="section1"
        title="Support section 1"
        isOpen={openSection === 'section1'}
        handleClick={() => handleClick('section1')}
      >
        Contenu de la section Support 1
      </ExpandableSection>
      <ExpandableSection
        id="section2"
        title="Support section 2"
        isOpen={openSection === 'section2'}
        handleClick={() => handleClick('section2')}
      >
        Contenu de la section Support 2
      </ExpandableSection>
    </div>
  );
};

export default ExpandableSupport;
