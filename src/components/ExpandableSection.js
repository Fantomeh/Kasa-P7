import React, { useState } from 'react';
import '../Styles/ExpandableSection.css';
import minifleche from '../img/minifleche.png';

const ExpandableSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='Expandable'>
      <div
        onClick={handleClick}
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        className='Expandable-Top'
      >
        <h3 className='Expandable-title'>{title}</h3>
        <img
          src={minifleche}
          alt='Toggle'
          className='Expandable-img'
          style={{
            marginLeft: 'auto',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.3s ease-in-out',
          }}
        />
      </div>
      {isOpen && <div className='Expandable-text'>{children}</div>}
    </div>
  );
};

export default ExpandableSection;
