import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.scss";

function NavBar() {
  return (
    <div className="NavBar">
      <NavLink to="/pensions" className="logo">
        logo
      </NavLink>
      <NavLink to="/pensions" className="p-navbar">
        Mes pensions
      </NavLink>
      <NavLink to="/prestations" className="p-navbar">
        Mes prestations
      </NavLink>
      <NavLink to="/contact" className="p-navbar">
        contact
      </NavLink>
      <NavLink to="/a-propos-de-moi" className="p-navbar">
        A propos de moi
      </NavLink>
    </div>
  );
}

export default NavBar;
