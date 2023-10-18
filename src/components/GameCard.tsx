import { Card, CardBody, HStack, Heading, Img } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformIcons from "./PlatformIcons";
import CriticsScore from "./CriticsScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius="10" overflow="hidden">
      <Img src={game.background_image}></Img>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIcons>
          <CriticsScore score={game.metacritic}></CriticsScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
