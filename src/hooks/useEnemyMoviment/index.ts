import { useState } from "react";
import useInterval from "@use-it/interval";
import { EDirection } from "../../settings/constants";
import {
  handleNextPosition,
  checkValueMoviment,
} from "../../contexts/canvas/helpers";

export default (initialPosition: { x: number; y: number }) => {
  const [positionState, setPositionState] = useState(initialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useInterval(function move() {
    let random = Math.floor(Math.random() * 4);
    let directionArray = Object.values(EDirection);
    const randomDirection = directionArray[random];

    const nextPosition = handleNextPosition(randomDirection, positionState);

    const isValidMoviment = checkValueMoviment(nextPosition);

    if (isValidMoviment) {
      setDirection(randomDirection);
      setPositionState(nextPosition);
    }
  }, 2000);

  return {
    positionState: positionState,
    direction: direction,
  };
};
