import React, { useState } from 'react';
import flecheGauche from '../img/FlecheGauche.png';
import flecheDroit from '../img/FlecheDroit.png';

const Carousel = ({ pictures }) => {
  // Reçoit un tableau avec les URL des images
  const [index, setIndex] = useState(0); // Variable de compteur, défini au départ sur 0
  const totalPictures = pictures.length - 1; // Nombre max d'images

  // Fonction pour passer à l'image précédente
  const onPreviousBtnClick = () => {
    if (index === 0) setIndex(pictures.length - 1); // pour obtenir l'index de la dernière image
    else setIndex(index - 1);
  };

  // Fonction pour passer à l'image suivante
  const onNextBtnClick = () => {
    if (index === pictures.length - 1) setIndex(0);
    else setIndex(index + 1);
  };

  return (
    <div className="carousel">
      <div className="div-image">
        {/* Affiche l'image */}
        <img
          src={pictures[index]}
          className="classImage"
          key={"car-" + index}
          alt={"photo " + index}
        />
      </div>

      {/* Si plus d'une image, alors ce code sera exécuté */}
      {totalPictures > 0 && (
        <div className="div-boutons">
          {/* Les boutons qui afficheront les flèches */}
          <button onClick={onPreviousBtnClick}>
            <img
              src={flecheGauche}
              className="classFlecheGauche"
              alt={"flèche gauche pour changer de photo " + index}
            />
          </button>
          <button onClick={onNextBtnClick}>
            <img
              src={flecheDroit}
              className="classFlecheDroit"
              alt={"flèche droite pour changer de photo " + index}
            />
          </button>
        </div>
      )}

      {/* Affiche le compteur d'images s'il y a plus d'une image */}
      {totalPictures > 0 && (
        <div className="div-compteur">
          {/* Compteur d'images */}
          <p className="compteurImages">{index + 1}/{totalPictures + 1}</p>
        </div>
      )}
    </div>
  );
};

export default Carousel;
