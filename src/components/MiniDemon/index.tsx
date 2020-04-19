import React from "react";
import { TILE_SIZE, HEAD_OFFSET, EDirection } from "../../settings/constants";
import useEnemyMoviment from "../../hooks/useEnemyMoviment";

import "./index.css";

const initialPosition = { x: 5, y: 10 };

const MiniDemon = () => {
  const { direction, positionState } = useEnemyMoviment(initialPosition);

  return (
    <div
      style={{
        animation: "mini-demon-anomation 1s steps(4) infinite",
        backgroundImage: "url(./assets/MINI-DEMON.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        position: "absolute",
        bottom: TILE_SIZE * positionState.y,
        left: TILE_SIZE * positionState.x,
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
      }}
    />
  );
};

export default MiniDemon;
