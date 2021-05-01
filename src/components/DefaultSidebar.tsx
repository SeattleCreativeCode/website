import React from "react";
import styled from "styled-components";
import { Orange } from "../types/ColorSystem";
import { NavLink } from "../types/Nav";
import { Typescale } from "../types/Typescale";
import NavItem from "./NavItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Typescale.S1_5};
  padding: ${Typescale.S_5} 0;
  border-top: 2px solid ${Orange.L500};
  border-bottom: 2px solid ${Orange.L500};
`;

type Props = {
  links?: NavLink[];
};

const defaultNavLinks: NavLink[] = [
  // { text: "Members", to: "/members" },
  // { text: "Articles", to: "/articles" },
  { text: "Events", to: "/events" },
  { text: "Join Us", to: "/" },
];

const DefaultSidebar = ({ links = defaultNavLinks }: Props) => {
  return (
    <Container>
      {links?.map((l, idx) => {
        return <NavItem key={idx} {...l} />;
      })}
    </Container>
  );
};

export default DefaultSidebar;
