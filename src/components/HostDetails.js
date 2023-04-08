// HostDetails.js
import React from "react";

export const HostDetails = ({ host }) => {
  return (
    <div>
      <h3>Hôte</h3>
      <p>{host.name}</p>
      {/* Modifier l'attribut alt pour être plus descriptif */}
      <img src={host.picture} alt={`Hôte ${host.name}`} />
    </div>
  );
};
