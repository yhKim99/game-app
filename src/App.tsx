import { Grid, GridItem, HStack, Heading, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import SortSelector from "./components/SortSelector";
import HeadingMain from "./components/HeadingMain";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortedOrder: string;
  searchGame: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const genreName = gameQuery.genre?.name || "";
  const platformName = gameQuery.platform?.name || "";
  const defaultGame =
    genreName === "" && platformName === ""
      ? "Games"
      : `${genreName} ${platformName}`;

  return (
    <Grid
      templateAreas={{
        // breakpoint
        base: `"nav" "main"`, // mobile devices
        lg: `"nav nav" "aside main"`, // web device more than 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: `300px 1fr`, // 1fr means take all the available spaces
      }}
    >
      <GridItem area={"nav"}>
        <Navbar
          onSearch={(searchGame) => setGameQuery({ ...gameQuery, searchGame })}
        ></Navbar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <Heading marginX={5} marginBottom={5} as="h5" size="lg">
            Genres
          </Heading>
          <GenresList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          ></GenresList>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HeadingMain heading={defaultGame}></HeadingMain>
        <HStack>
          <PlatformSelector
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          ></PlatformSelector>
          <SortSelector
            onSortedOrder={(sortedOrder) =>
              setGameQuery({ ...gameQuery, sortedOrder })
            }
          ></SortSelector>
        </HStack>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
};

export default App;
