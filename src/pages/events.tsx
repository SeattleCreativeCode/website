import { graphql, Link } from "gatsby";
import React, { useState } from "react";
import Layout from "../components/Layout";
import type { Event as EventType } from "../types/Event";
import { generateEventsFor, fromQuery } from "../types/Event";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import styled from "styled-components";
import { EventDetailModal } from "../components/EventDetailModal";
import { Black, Blue, Orange } from "../types/ColorSystem";
import { Typescale } from "../types/Typescale";
import DefaultSidebar from "../components/DefaultSidebar";
const locales = {
  "en-US": enUS,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarContainer = styled.div`
  height: 50vh;
`;

const SideBySide = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  justify-content: start;
  gap: ${Typescale.S1_5};

  & > h5 {
    padding: ${Typescale.S_5};
    border-radius: 5px;
    margin: 0;
    text-align: center;
    color: ${Black.L900};
    font-weight: normal;
  }

  & > p {
    margin: 0;
  }

  margin-top: ${Typescale.S3};
`;

const eventStyler = (
  event: EventType,
  start: any,
  end: any,
  isSelected: boolean
) => {
  const isRepeating = !!event.repetition;
  const commonStyle = {};
  const stateStyle = isRepeating
    ? {
        backgroundColor: Blue.L300,
        color: Black.L900,
      }
    : {
        backgroundColor: Orange.L300,
        color: Black.L900,
      };
  return {
    style: {
      ...commonStyle,
      ...stateStyle,
    },
  };
};

const Sidebar = () => (
  <>
    <DefaultSidebar />
    <SideBySide>
      <h5 style={{ background: Orange.L300 }}>One Off Events</h5>
      <p>
        These events are one time deals, and once they have passed, you may or
        may not have access to them.
      </p>
      <h5 style={{ background: Blue.L300 }}>Regular Events</h5>
      <p>These are events that happen on a regular cadence.</p>
    </SideBySide>
  </>
);

const description = `We host regular events and many of our members twitch stream and teach
classes online. This is where you can find all the happenings going on
with Seattle Creative Code`;

export default ({ data }: any) => {
  const [selectedItem, setSelectedItmem] = useState<EventType | undefined>(
    undefined
  );
  const { allMdx } = data;

  const [repeatingEvents, nonRepeatingEvents] = allMdx.edges
    .map((e: any) => e.node)
    .map(fromQuery)
    .reduce(
      (out: any, e: any) => {
        out[!!e.repetition ? 0 : 1].push(e);
        return out;
      },
      [[], []]
    );

  const allEvents = nonRepeatingEvents.concat(
    repeatingEvents.flatMap(generateEventsFor)
  );

  return (
    <Layout sidebar={<Sidebar />} seo={{ title: "Events", description }}>
      <EventDetailModal
        event={selectedItem}
        onClose={() => setSelectedItmem(undefined)}
      />
      <h1>Events</h1>
      <p style={{ marginBottom: Typescale.S3 }}>{description}</p>
      <CalendarContainer>
        <Calendar
          events={allEvents}
          localizer={localizer}
          startAccessor={"date"}
          endAccessor={"date"}
          onSelectEvent={(e: any) => setSelectedItmem(e as EventType)}
          eventPropGetter={eventStyler}
        />
      </CalendarContainer>
      {/* {repeatingEvents.map((e: any) => (
        <div key={`${e.date.toDateString()}-${e.time}`}>
          {e.date.toDateString()} @ {e.date.toTimeString()}
          <MDXRenderer>{e.description}</MDXRenderer>
        </div>
      ))} */}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(filter: { fileAbsolutePath: { regex: "/events/" } }) {
      edges {
        node {
          internal {
            type
          }
          frontmatter {
            repetition
            time
            link
            date
            title
          }
          id
          slug
          body
        }
      }
    }
  }
`;
