import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/CardPension.scss";
import defaultImage from "../../assets/image-animaux-default.jpg";

function CardPension() {
  const [pensions, setPensions] = useState([]);

  const getPensions = () => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/Pensions`).then((res) => {
      setPensions(res.data);
      console.warn(res.data);
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
            <img
              src={defaultImage}
              alt="img_pensions"
              className="img-card-pension"
            />
            <p>{pension.type} </p>
            <p>{pension.nbAnimalPrst}</p>
            <p>{pension.grandeur}m²</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CardPension;
