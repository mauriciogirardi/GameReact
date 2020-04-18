import React, { useState } from "react";
import useEventListener from "@use-it/event-listener";
import { TILE_SIZE, HEAD_OFFSET } from "../../settings/constants";
import "./index.css";

const initialPosition = { x: 9, y: 3 };

const Hero = () => {
  const [positionState, setPositionState] = useState(initialPosition);
  const [direction, setDirection] = useState("RIGHT");

  useEventListener("keydown", (event: React.KeyboardEvent<HTMLDivElement>) => {
    const key = event.key;

    if (key === "ArrowUp" || key === "w") {
      setPositionState({ x: positionState.x, y: positionState.y + 1 });
    }

    if (key === "ArrowLeft" || key === "a") {
      setPositionState({ x: positionState.x - 1, y: positionState.y });
      setDirection("LEFT");
    }

    if (key === "ArrowRight" || key === "d") {
      setPositionState({ x: positionState.x + 1, y: positionState.y });
      setDirection("RIGHT");
    }

    if (key === "ArrowDown" || key === "s") {
      setPositionState({ x: positionState.x, y: positionState.y - 1 });
    }
  });

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

        transform: `scaleX(${direction === "RIGHT" ? 1 : -1})`,
      }}
    />
  );
};

export default Hero;
