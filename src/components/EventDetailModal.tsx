import React from "react";
import styled from "styled-components";
import { Orange, White } from "../types/ColorSystem";
import type { Event as EventType } from "../types/Event";
import { Typescale } from "../types/Typescale";
import Event from "./Event";

const Modal = styled.div`
  position: fixed;
  width: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;

  & > div {
    background: ${White.L000};
    padding: 1rem;
    border: 2px solid ${Orange.L500};
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: ${Typescale.S1_5};
  float: right;
`;

export const EventDetailModal = ({
  event,
  onClose,
}: {
  event?: EventType;
  onClose: () => void;
}) => {
  if (!event) {
    return null;
  }

  return (
    <Modal>
      <div>
        <CloseButton onClick={onClose}>⨯</CloseButton>
        <Event event={event} full={true} />
      </div>
    </Modal>
  );
};
