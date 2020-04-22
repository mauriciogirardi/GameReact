import React, { ReactNode, useState, createContext } from "react";

interface IProps {
  children: ReactNode;
}

export const ChestsContext = createContext({
  totalChest: 0,
  opendChests: {
    total: 0,
    positions: [],
  },
  updateOpendChests: (position) => null,
});

const ChestsProvider = (props: IProps) => {
  const [chestsState, setChestsState] = useState({
    totalChest: 3,
    opendChests: {
      total: 0,
      positions: [],
    },
    updateOpendChests: (position) => {
      setChestsState((prevState) => {
        return {
          totalChest: prevState.totalChest,
          opendChests: {
            total: prevState.opendChests.total + 1,
            positions: prevState.opendChests.positions.concat(position),
          },
          updateOpendChests: prevState.updateOpendChests,
        };
      });
    },
  });

  return (
    <ChestsContext.Provider value={chestsState}>
      {props.children}
    </ChestsContext.Provider>
  );
};

export default ChestsProvider;
