import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";

const App = () => {
  return (
    <Grid
      templateAreas={{
        // breakpoint
        base: `"nav" "main"`, // mobile devices
        lg: `"nav nav" "aside main"`, // web device more than 1024px
      }}
    >
      <GridItem area={"nav"}>
        <Navbar></Navbar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <GenresList></GenresList>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
};

export default App;
