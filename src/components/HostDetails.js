import React from "react";


export const HostDetails = ({ host }) => {
  return (
    <div className="host-details">
      <p className="host-name">{host.name}</p>
      {/* Modifier l'attribut alt pour être plus descriptif */}
      <img className="host-img" src={host.picture} alt={`Hôte ${host.name}`} />
    </div>
  );
};
