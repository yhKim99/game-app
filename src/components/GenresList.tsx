import {
  List,
  ListItem,
  Image,
  HStack,
  Text,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImage from "../services/url-images";

interface Prop {
  onSelectGenre: (genre: Genre) => void;
}

const GenresList = ({ onSelectGenre }: Prop) => {
  const { data, loading, errors } = useGenres();

  return (
    <>
      {errors && <Text>{errors}</Text>}
      {loading && <Spinner marginLeft="5"></Spinner>}
      <List>
        {data.map((genre) => (
          <ListItem marginBottom="3" key={genre.id}>
            <HStack>
              <Image
                borderRadius="8"
                boxSize="32px"
                src={getCroppedImage(genre.image_background)}
              ></Image>
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
