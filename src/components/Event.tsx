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
  image?: string;
  call?: string;
  rsvp?: string;
};

const Event: React.FC<Props> = ({
  location,
  mapKind: kind,
  description,
  date,
  time,
  title,
  image,
  call,
  rsvp,
}: Props) => {
  let mapKind = mapKindFromString(kind);
  if (mapKind === null) {
    return null;
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
          {image && <img src={`/events/${image}`} alt={title} />}
          <p className="description">{description}</p>
        </article>
        <aside className="event-sidebar">
          {call && (
            <div className="call">
              <a href={call} target="_blank" rel="noreferer">
                Artist Call
              </a>
            </div>
          )}
          {rsvp && (
            <div className="rsvp">
              <a href={rsvp} target="_blank" rel="noreferer">
                RSVP
              </a>
            </div>
          )}
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
