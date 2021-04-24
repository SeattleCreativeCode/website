import React from "react";
import styled from "styled-components";
import { NavLink } from "../types/Nav";
import NavItem from "./NavItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

type Props = {
  links?: NavLink[];
};

const defaultNavLinks: NavLink[] = [
  // { text: "Members", to: "/members" },
  // { text: "Articles", to: "/articles" },
  // { text: "Events", to: "/events" },
  // { text: "Join Us", to: "/join" },
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
