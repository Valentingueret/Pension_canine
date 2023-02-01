import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <NavLink to="/pensions">
        <button type="button" className="btn-navbar">
          Mes pensions
        </button>
      </NavLink>
      <NavLink to="/prestations">
        <button type="button" className="btn-navbar">
          Mes prestations
        </button>
      </NavLink>
      <NavLink to="/contact">
        <button type="button" className="btn-navbar">
          contact
        </button>
      </NavLink>
      <NavLink to="/a-propos-de-moi">
        <button type="button" className="btn-navbar">
          A propos de moi
        </button>
      </NavLink>
    </div>
  );
}

export default NavBar;
