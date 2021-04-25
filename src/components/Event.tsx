import React from "react";
import styled from "styled-components";
import { Black, Blue, Orange, White } from "../types/ColorSystem";
import { Typescale } from "../types/Typescale";

type Props = {
  title: string;
  link: string;
  repetition?: string;
  date?: Date;
  time: string;
};

const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto;
  border: 2px solid ${Orange.L500};
  padding: 1.5rem;
  width: max-content;

  & > .title {
    grid-row-end: span 2;
    padding-right: 3rem;
    margin: 0;
  }

  & > .when {
    font-size: ${Typescale.S_5};
    line-height: 1.5em;
    font-style: italic;
  }

  & > .signup {
    margin-top: 1rem;
    border-radius: 8px;
    background: ${Blue.L700};
    width: fit-content;

    &:hover {
      background: ${Blue.L500};
    }
    & > a {
      color: ${White.L000};
      display: block;
      width: 100%;
      height: 100%;
      padding: 5px 1rem;
    }
  }
`;

const Event = ({ title, link, repetition, date, time }: Props) => (
  <Container>
    <h4 className="title">{title}</h4>
    <div className="when">
      <div className="time">{time}</div>
      {date && <div className="date">{date}</div>}
      {repetition && <div className="repetition">{repetition}</div>}
    </div>
    <div className="signup">
      <a href={link} className="arrowed">
        Join Event
      </a>
    </div>
  </Container>
);

export default Event;
