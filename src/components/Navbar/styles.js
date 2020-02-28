import styled from "styled-components";
import { NavLink as _NavLink } from "react-router-dom";

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
`;

export const NavItems = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  height: 50px;
  background: #eee;
`;

export const NavItem = styled.li`
  flex: 1 0 auto;
`;

export const NavLink = styled(_NavLink)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  min-width: 80px;
  text-transform: uppercase;
  font-weight: 900;
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px;
  line-height: 50px;
  height: 50px;

  padding: 0 16px;

  &.active {
    color: rgba(0, 0, 0, 0.87);
  }

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.87);
  }
`;
