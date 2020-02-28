import React from "react";

import { Nav, NavLink, NavItems, NavItem } from "./styles";

function Navbar() {
  return (
    <Nav>
      <NavItems>
        <NavItem>
          <NavLink to="/westmarches" exact>
            Map
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/westmarches/players">Characters</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/westmarches/adventures">Adventures</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/westmarches/pawn">Perenolde's Pawn Palace</NavLink>
        </NavItem>
      </NavItems>
    </Nav>
  );
}

export default Navbar;
