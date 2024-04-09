import React, { ReactElement } from "react";
import "./EventTeaser.scss";
import MapFrame, { MapKind } from "./MapFrame";

type EventTeaserProps = {
  title: string;
  date: Date;
  address: ReactElement;
  map: MapKind;
};

const EventTeaser: React.FC<EventTeaserProps> = ({
  children,
  title,
  date,
  address,
  map,
}) => {
  // Destructure props if needed

  return (
    <div className="event-teaser">
      <h3>{title}</h3>
      <p className="event-date">{date.toDateString()}</p>
      {children}
      <MapFrame kind={map} />
      <p className="event-address">{address}</p>
    </div>
  );
};

export default EventTeaser;
