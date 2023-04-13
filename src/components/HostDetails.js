import React from "react";

export const HostDetails = ({ host }) => {
  // Diviser le nom de l'hôte en prénom et nom en utilisant la méthode split().
  // La méthode split() divise une chaîne de caractères en un tableau de sous-chaînes
  // en fonction du séparateur spécifié (ici, l'espace " ").
  const [firstName, lastName] = host.name.split(" ");

  // Retourner le rendu du composant HostDetails avec les éléments HTML suivants :
  return (
    <div className="host-details">
      <div className="host-name">
      <p className="host-firstName">{firstName}</p>
      <p className="host-lastName">{lastName}</p>
      </div>
      <img className="host-img" src={host.picture} alt={`Hôte ${host.name}`} />
    </div>
  );
};
