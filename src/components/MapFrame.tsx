import React from "react";
import IFrame from "./IFrame";

export enum MapKind {
  // Add common map URLs here
  TWO_PLUS_U = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.0046390790008!2d-122.339435023607!3d47.60659947118977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906b355e695455%3A0xd309dae7912449f1!2sThe%20Studio%20at%202%2BU!5e0!3m2!1sen!2sus!4v1703834340104!5m2!1sen!2sus",
}

interface MapFrameProps {
  kind: MapKind;
}

const MapFrame: React.FC<MapFrameProps> = ({ kind }) => {
  return <IFrame title="map-frame" src={kind} width="100%" height="auto" />;
};

export default MapFrame;
