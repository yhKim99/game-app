import { Image, ImageProps } from "@chakra-ui/react";
import bulles from "../assets/Emojis/bulls-eye.webp";
import meh from "../assets/Emojis/meh.webp";
import thumbs from "../assets/Emojis/thumbs-up.webp";

interface Props {
  rating: number;
}

interface Dictonary {
  [key: number]: ImageProps;
}

const Emoji = ({ rating }: Props) => {
  let source: string;
  if (rating < 3) {
    return null;
  } else if (rating === 3) {
    source = meh;
  } else if (rating === 4) {
    source = thumbs;
  } else {
    source = bulles;
  }

  // Index signature
  /* const emojiMap: Dictonary = {
    3: {src: meh, alt: 'meh'},
    4: {src: thumbs, alt: "thumbs"},
    5: {src: bulles, alt: "bulles"}
  }; */

  // return <Image {...emojiMap[rating]}></Image>

  return <Image boxSize="30px" src={source} alt="none"></Image>;
};

export default Emoji;
