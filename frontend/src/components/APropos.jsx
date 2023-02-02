import React from "react";
import "../styles/App.scss";
import "../styles/APropos.scss";

import ImgLeftTop from "../assets/image-animal-contact.jpg";
import ImgBotom from "../assets/image-animal2-contact.jpg";
import ImgTopRight from "../assets/image-animal3-contact.jpg";
import ImgMiddleRight from "../assets/image-animal4-contact.jpg";

function APropos() {
  return (
    <div>
      <h1>A propos</h1>
      <p className="line" />
      <div className="APropos">
        <div className="carrée-img">
          <img src={ImgLeftTop} alt="ImgLeftTop" className="ImgLeftTop" />
          <img
            src={ImgMiddleRight}
            alt="ImgMiddleRight"
            className="ImgMiddleRight"
          />
          <img src={ImgTopRight} alt="ImgTopRight" className="ImgTopRight" />
          <img src={ImgBotom} alt="ImgBotom" className="ImgBotom" />
        </div>
        <div className="text">
          <p>
            Je suis Karine, j’ai 42ans et mon métier est ma passion. Je suis en
            admiratioln devant tous les animaux, petits ou grands. J’ai moi meme
            plusieurs chiens et je sais comment il est important de savoir que
            notre compagnon à 4 pattes soit chouchouté, détendu et en sécurité
            pendant notre absence. J’ai suivit différentes formations;
            d’éducateurs canin, d’éleveur, de toiletteur, venderus en
            animalerie, massages,et l’ACACED Chien/Chat/Nac qui est la formation
            obligatoire pour pouvoir travailler auprès des animaux de compagnie.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default APropos;
