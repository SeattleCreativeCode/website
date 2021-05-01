import React from "react";
import styled from "styled-components";
import { Black, Blue, Orange, White } from "../types/ColorSystem";
import { Typescale } from "../types/Typescale";
import type { Event as EventType } from "../types/Event";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto;
  padding: 1.5rem;

  &.with-border {
    border: 2px solid ${Orange.L500};
    width: max-content;
  }

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

const EventContents = ({
  title,
  link,
  repetition,
  date,
  time,
  children,
}: React.PropsWithChildren<EventType>) => (
  <>
    <h4 className="title">{title}</h4>
    <div className="when">
      <div className="time">{time.toLocaleTimeString("en-US")} Pacific</div>
      {date && <div className="date">{date.toLocaleDateString("en-US")}</div>}
      {repetition && <div className="repetition">{repetition.toText()}</div>}
    </div>
    {children}
    <div className="signup">
      <a href={link} className="arrowed">
        Join Event
      </a>
    </div>
  </>
);

const EventShort = ({ event }: { event: EventType }) => (
  <Container className="with-border">
    <EventContents {...event} />
  </Container>
);

const EventLong = ({ event }: { event: EventType }) => (
  <Container>
    <EventContents {...event}>
      <MDXRenderer>{event.description}</MDXRenderer>
    </EventContents>
  </Container>
);

const Event = ({ event, full }: { event: EventType; full: boolean }) => {
  if (full) {
    return <EventLong event={event} />;
  } else {
    return <EventShort event={event} />;
  }
};

export default Event;
