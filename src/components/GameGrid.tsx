import { useEffect, useState } from "react";
import appClients from "../services/app-clients";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, errors, loading } = useGame();
  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
        {loading &&
          skeleton.map((skeleton) => (
            <GameCardSkeleton key={skeleton}></GameCardSkeleton>
          ))}
        {games.map((games) => (
          <>
            <GameCard key={games.id} game={games}></GameCard>
          </>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
