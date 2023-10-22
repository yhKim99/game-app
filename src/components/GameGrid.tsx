import { useEffect, useState } from "react";
import appClients from "../services/app-clients";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGame, { Platform } from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, errors, loading } = useGame(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3}>
        {loading &&
          skeleton.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {data.map((games) => (
          <>
            <GameCardContainer key={games.id}>
              <GameCard game={games}></GameCard>
            </GameCardContainer>
          </>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
