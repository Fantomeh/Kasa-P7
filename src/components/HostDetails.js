// HostDetails.js
import React from "react";

export const HostDetails = ({ host }) => {
  return (
    <div>
      <p className="Host">{host.name}</p>
      {/* Modifier l'attribut alt pour être plus descriptif */}
      <img className="Host-img" src={host.picture} alt={`Hôte ${host.name}`} />
    </div>
  );
};
