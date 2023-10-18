import { useEffect, useState } from "react";
import appClients from "../services/app-clients";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, errors, loading } = useGame();
  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3}>
        {loading &&
          skeleton.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton}></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {data.map((games) => (
          <>
            <GameCardContainer>
              <GameCard key={games.id} game={games}></GameCard>
            </GameCardContainer>
          </>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
