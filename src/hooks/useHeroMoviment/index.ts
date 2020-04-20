import React, { useState } from "react";
import useEventListener from "@use-it/event-listener";
import { EDirection } from "../../settings/constants";
import {
  handleNextPosition,
  checkValueMoviment,
} from "../../contexts/canvas/helpers";

export default (initialPosition: { x: number; y: number }) => {
  const [positionState, setPositionState] = useState(initialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useEventListener("keydown", (event: React.KeyboardEvent<HTMLDivElement>) => {
    const directionKey = event.key as EDirection;

    if (directionKey.indexOf("Arrow") === -1) {
      return;
    }

    const nextPosition = handleNextPosition(directionKey, positionState);

    const isValidMoviment = checkValueMoviment(nextPosition);

    if(isValidMoviment) {
      setDirection(directionKey);
      setPositionState(nextPosition);
    }  
  });

  return {
    positionState: positionState,
    direction: direction,
  };
};
