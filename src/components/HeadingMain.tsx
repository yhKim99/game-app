import { Heading } from "@chakra-ui/react";

interface Props {
  heading: string | undefined | null;
}

const HeadingMain = ({ heading }: Props) => {
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default HeadingMain;
