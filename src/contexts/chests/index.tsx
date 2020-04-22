import React, { ReactNode, useState, createContext } from "react";

interface IProps {
  children: ReactNode;
}

export const ChestsContext = createContext({
  totalChest: 0,
  opendChests: {
    total: 0,
    position: [],
  },
  updateOpendChests: () => null,
});

const ChestsProvider = (props: IProps) => {
  const [chestsState, setChestsState] = useState({
    totalChest: 2,
    opendChests: {
      total: 0,
      position: [],
    },
    updateOpendChests: () => {},
  });

  return (
    <ChestsContext.Provider value={chestsState}>
      {props.children}
    </ChestsContext.Provider>
  );
};

export default ChestsProvider;
