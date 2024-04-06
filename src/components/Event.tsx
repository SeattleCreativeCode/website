import "./Event.scss";
import React from "react";
import MapFrame, { MapKind, mapKindFromString } from "./MapFrame";
import Location from "./Location";

type Props = {
  location: string;
  mapKind: MapKind | null;
  description: string;
  title: string;
  date: string;
  time: string;
};

const Event: React.FC = ({
  location,
  mapKind: kind,
  description,
  date,
  time,
  title,
}: Props) => {
  let mapKind = mapKindFromString(kind);
  if (mapKind === null) {
    return undefined;
  }

  return (
    <div className="event-container">
      <header>
        <h1>{title}</h1>
        <h2>
          {date} - {time}
        </h2>
      </header>
      <div className="event-details">
        <article>
          <p className="description">{description}</p>
        </article>
        <aside className="event-sidebar">
          <div className="location">
            <Location location={location} />
          </div>
          <div className="map">
            <MapFrame kind={mapKind} />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Event;
