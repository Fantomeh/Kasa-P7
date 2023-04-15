// EquipmentList.js
import React from "react";
import ExpandableSection from "./ExpandableSection";

export const EquipmentList = ({ equipments }) => {
  return (
    <div className="List-Destop">
      <ExpandableSection title="Équipements">
        <div>
          <div>
            {equipments.map((equipment, index) => (
              <p key={index}>{equipment}</p>
            ))}
          </div>
        </div>
      </ExpandableSection>
    </div>
  );
};
