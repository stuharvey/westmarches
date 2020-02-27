import React from "react";

import { Nav, NavLink, NavItems, NavItem } from "./styles";

function Navbar() {
  return (
    <Nav>
      <NavItems>
        <NavItem>
          <NavLink to="/" exact>
            Map
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/players">Players</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/pawn">Perenolde's Pawn Palace</NavLink>
        </NavItem>
      </NavItems>
    </Nav>
  );
}

export default Navbar;
