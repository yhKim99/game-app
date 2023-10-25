import { Card, CardBody, HStack, Heading, Img } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformIcons from "./PlatformIcons";
import CriticsScore from "./CriticsScore";
import getCroppedImage from "../services/url-images";
import noImage from "../assets/Image Placeholder/no-image-placeholder-6f3882e0.webp";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const image =
    getCroppedImage(game.background_image) === ""
      ? noImage
      : getCroppedImage(game.background_image);

  return (
    <Card>
      <Img src={image}></Img>
      <CardBody>
        <HStack marginY={3} justifyContent="space-between">
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIcons>
          <CriticsScore score={game.metacritic}></CriticsScore>
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
        <Emoji rating={game.rating_top}></Emoji>
      </CardBody>
    </Card>
  );
};

export default GameCard;
