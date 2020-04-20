import React from "react";
import { TILE_SIZE, HEAD_OFFSET, EDirection } from "../../settings/constants";
import useEnemyMoviment from "../../hooks/useEnemyMoviment";

import "./index.css";

// const moviment = {
//   position: { x: 5, y: 10 },
//   direction: EDirection.RIGHT,
// };

interface IProps {
  initialPosition: { x: number; y: number };
}

const MiniDemon = (props: IProps) => {
  const moviment = useEnemyMoviment(props.initialPosition);

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
        top: TILE_SIZE * moviment.positionState.y,
        left: TILE_SIZE * moviment.positionState.x,
        transform: `scaleX(${
          moviment.direction === EDirection.RIGHT ? 1 : -1
        })`,
      }}
    />
  );
};

export default MiniDemon;
