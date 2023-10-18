import { List, ListItem, Image, HStack, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImage from "../services/url-images";

const GenresList = () => {
  const { data, loading, errors } = useGenres();

  return (
    <>
      {errors && <Text>{errors}</Text>}
      {loading && <Spinner marginLeft="5"></Spinner>}
      <List>
        {data.map((genre) => (
          <ListItem>
            <HStack>
              <Image
                borderRadius="8"
                boxSize="32px"
                src={getCroppedImage(genre.image_background)}
              ></Image>
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
