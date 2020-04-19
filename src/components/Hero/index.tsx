import React from "react";
import { TILE_SIZE, HEAD_OFFSET, EDirection } from "../../settings/constants";
import useHeroMoviment from "../../hooks/useHeroMoviment";

import "./index.css";

const initialPosition = { x: 9, y: 3 };

const Hero = () => {
  const { positionState, direction } = useHeroMoviment(initialPosition);

  return (
    <div
      style={{
        animation: "hero-anomation 1s steps(4) infinite",
        backgroundImage: "url(./assets/HERO.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: `0 -${TILE_SIZE - HEAD_OFFSET}px`,
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        position: "absolute",
        bottom: TILE_SIZE * positionState.y,
        left: TILE_SIZE * positionState.x,
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
        zIndex: 1,
      }}
    />
  );
};

export default Hero;
