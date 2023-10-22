import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <Navbar></Navbar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <GenresList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          ></GenresList>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector
          onSelectedPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        ></PlatformSelector>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
};

export default App;
