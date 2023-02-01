import React from "react";
import CardPension from "./CardPension";
import "../../styles/App.scss";

function Pensions() {
  return (
    <div className="Pensions">
      <h1 className="heading">Mes pensions</h1>
      <CardPension />
    </div>
  );
}

export default Pensions;
