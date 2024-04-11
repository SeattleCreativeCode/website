import "./event-single.scss";
import React from "react";
import { useParams, Link } from "react-router-dom";
import useEventQuery from "../hooks/event-query";
import Event from "../components/Event";
import Logo from "../logo.svg?react";
import Nav from "../components/Nav";
import Social from "../components/Social";

const EventSingle: React.FC = (props) => {
  const params = useParams();
  const { event, isLoading, isError, error } = useEventQuery(
    params.event,
    params.date
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !event) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div className="event">
      <header>
        <Link to="/">
          <Logo />
        </Link>
        <Nav />
        <Social />
      </header>
      <Event
        location={event?.location}
        mapKind={event?.map}
        title={event?.name}
        description={event?.description}
        date={event?.date}
        time={event?.time}
        image={event?.image}
        call={event?.call}
        rsvp={event?.rsvp}
      />
    </div>
  );
};

export default EventSingle;
