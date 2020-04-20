import React from "react";
import { TILE_SIZE } from "../../settings/constants";
import "./index.css";

interface IProps {
  initialPosition: { x: number; y: number };
}

export default (props: IProps) => {
  return (
    <div
      style={{
        animation: "chest-anomation 1.5s steps(3) infinite",
        backgroundImage: "url(./assets/CHEST.png)",
        backgroundRepeat: "no-repeat",
        width: TILE_SIZE,
        height: 100,
        position: "absolute",
        top: TILE_SIZE * props.initialPosition.y,
        left: TILE_SIZE * props.initialPosition.x,
      }}
    />
  );
};
