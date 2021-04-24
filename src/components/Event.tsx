import React from "react";
import styled from "styled-components";
import { Orange } from "../types/ColorSystem";

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
  grid-template-columns: auto 1fr;
  border: 2px solid ${Orange.L500};
  padding: 1.5rem;
  width: max-content;

  & > .title {
    grid-row-end: span 2;
    padding-right: 3rem;
    margin: 0;
  }

  & > .when {
    font-style: italic;
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
