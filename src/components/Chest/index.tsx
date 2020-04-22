import React, { useContext } from "react";
import { TILE_SIZE } from "../../settings/constants";
import { ChestsContext } from "../../contexts/chests";
import "./index.css";

interface IProps {
  initialPosition: { x: number; y: number };
}

export default (props: IProps) => {
  const chestsContext = useContext(ChestsContext);

  const shoulAnimate = chestsContext.opendChests.positions.find((position) => {
    const match =
      props.initialPosition.y === position.y &&
      props.initialPosition.x === position.x;

    return match;
  });

  return (
    <div
      style={{
        animation: shoulAnimate && "chest-anomation 1s steps(2) forwards",
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
