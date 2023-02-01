import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="/Contact">
        <p>contact</p>
      </NavLink>
      <NavLink to="/a-propos-de-moi">
        <p>A propos de moi</p>
      </NavLink>
    </div>
  );
}

export default NavBar;
