import React from "react";
import CardPrestation from "./CardPrestation";
import "../../styles/App.scss";

function Prestations() {
  return (
    <div className="Prestations">
      <h1 className="heading">Mes prestations</h1>
      <p className="line" />
      <CardPrestation />
    </div>
  );
}

export default Prestations;
