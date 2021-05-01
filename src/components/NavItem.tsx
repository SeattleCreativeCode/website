import { NavLink } from "../types/Nav";
import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Orange } from "../types/ColorSystem";

const MyLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  text-transform: lowercase;
  font-weight: 700;
  position: relative;
  height: 1em;

  &:hover {
    &:before {
      content: "<";
      position: absolute;
      left: -0.75em;
      top: 0.15em;
      color: ${Orange.L500};
      font-size: 1.5rem;
    }
    &:after {
      content: ">";
      color: ${Orange.L500};
      margin-left: 0.15em;
      font-size: 1.5rem;
      position: absolute;
      top: 0.15em;
    }
  }
`;

const NavItem = ({ text, to, onClick }: NavLink) => {
  if (to) {
    return <MyLink to={to}>{text}</MyLink>;
  }

  if (onClick) {
    return <button onClick={onClick}>{text}</button>;
  }

  return null;
};

export default NavItem;
