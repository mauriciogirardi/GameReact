import React, { useState, useContext } from "react";
import useEventListener from "@use-it/event-listener";
import { EDirection, EWalker } from "../../settings/constants";
import { CanvasContext } from "../../contexts/canvas";
import { ChestsContext } from "../../contexts/chests";

export default (initialPosition: { x: number; y: number }) => {
  const canvasContext = useContext(CanvasContext);
  const chestsContext = useContext(ChestsContext);

  const [positionState, setPositionState] = useState(initialPosition);
  const [direction, setDirection] = useState(EDirection.RIGHT);

  useEventListener("keydown", (event: React.KeyboardEvent<HTMLDivElement>) => {
    const directionKey = event.key as EDirection;

    if (directionKey.indexOf("Arrow") === -1) {
      return;
    }

    const { nextMove, nextPosition } = canvasContext.updateCanvas(
      directionKey,
      positionState,
      EWalker.HERO
    );

    if (nextMove.valid) {
      setDirection(directionKey);
      setPositionState(nextPosition);
    }

    if (nextMove.dead) {
      alert("Você morreu!");
      window.location.reload();
    }

    if (nextMove.chest) {
      chestsContext.updateOpendChests(nextPosition);
    }

    if (
      chestsContext.totalChest === chestsContext.opendChests.total &&
      nextMove.door
    ) {
      alert("Você venceu");
      window.location.reload();
    }
  });

  return {
    positionState: positionState,
    direction: direction,
  };
};
