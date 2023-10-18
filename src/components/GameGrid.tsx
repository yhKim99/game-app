import { useEffect, useState } from "react";
import appClients from "../services/app-clients";
import { Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";

const GameGrid = () => {
  const { games, errors } = useGame();

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <ul>
        {games.map((games) => (
          <li key={games.id}>{games.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
