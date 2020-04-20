import React from "react";
import {
  TILE_SIZE,
  DEMON_TILE_SIZE,
  EDirection,
} from "../../settings/constants";

import "./index.css";
import useEnemyMoviment from "../../hooks/useEnemyMoviment";

const initialPosition = { x: 12, y: 15 };

const Demon = () => {
  const { direction, positionState } = useEnemyMoviment(initialPosition);
  return (
    <div
      style={{
        animation: "demon-anomation 1s steps(2) infinite",
        backgroundImage: "url(./assets/DEMON.png)",
        backgroundRepeat: "no-repeat",
        width: DEMON_TILE_SIZE,
        height: DEMON_TILE_SIZE,
        position: "absolute",
        top: TILE_SIZE * positionState.y,
        left: TILE_SIZE * positionState.x,
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
      }}
    />
  );
};

export default Demon;
