import { useEffect, useState } from "react";
import appClients from "../services/app-clients";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, errors } = useGame();

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {games.map((games) => (
          <GameCard key={games.id} game={games}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
