import React, { useState } from 'react';
import flecheGauche from '../img/FlecheGauche.png';
import flecheDroit from '../img/FlecheDroit.png';


const Carousel = ({ pictures }) => {
  // Reçoit un tableau avec les URL des images
  const [index, setIndex] = useState(0); // Variable de compteur, défini au départ sur 0
  const totalPictures = pictures.length - 1; // Nombre max d'images

  // Si l'index est inférieur à zéro, définit le nombre d'images max
  if (index < 0) setIndex(totalPictures);
  // Si l'index est supérieur au max d'images, alors met à zéro
  if (index > totalPictures) setIndex(0);

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
        <div>
          {/* Les boutons qui afficheront les flèches */}
          <button onClick={() => setIndex(index - 1)}>
            <img
              src={flecheGauche}
              className="classFlecheGauche"
              alt={"flèche gauche pour changer de photo " + index}
            />
          </button>
          <button onClick={() => setIndex(index + 1)}>
            <img
              src={flecheDroit}
              className="classFlecheDroit"
              alt={"flèche droite pour changer de photo " + index}
            />
          </button>
        </div>
      )}
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
