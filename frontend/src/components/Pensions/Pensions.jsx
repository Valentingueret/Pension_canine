import React from "react";
import CardPension from "./CardPension";
import "../../styles/App.scss";
import "../../styles/Pensions.scss";

function Pensions() {
  return (
    <div className="Pensions">
      <h1 className="heading">Mes pensions</h1>
      <p className="line" />
      <CardPension />
    </div>
  );
}

export default Pensions;
