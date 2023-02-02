import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/CardPension.scss";

function CardPension() {
  const [pensions, setPensions] = useState([]);

  const getPensions = () => {
    axios.get("http://localhost:5000/Pensions").then((res) => {
      setPensions(res.data);
    });
  };

  useEffect(() => {
    getPensions();
  }, []);

  return (
    <div className="pensions">
      <ul className="pensions-list">
        {pensions.map((pension) => (
          <li key={pension.id} className="card-pension">
            <img src="./backend/image-animaux-default.jpg" alt="img_pensions" />
            <p>{pension.nb_animal_prst}</p>
            <p>{pension.grandeur}m </p>
            <p>{pension.type} </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CardPension;
