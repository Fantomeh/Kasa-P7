// Section.js
import React, { useState, useEffect } from 'react';
import { Article } from './Article';


export const Section = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/logements.json') // Mettez à jour le chemin d'accès ici
      .then((response) => response.json())
      .then((data) => {
        setAccommodations(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des données :', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Chargement des données...</div>;
  }

  return (
    <section className="Section">
      {
        accommodations.map(accommodation => (
          <Article key={accommodation.id} id={accommodation.id} title={accommodation.title} cover={accommodation.cover} />
        ))
      }
    </section>
  );
};
