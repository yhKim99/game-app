import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorSwitch from "./ColorSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchGame: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image boxSize="70px" src={logo} alt="logo" />
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorSwitch></ColorSwitch>
    </HStack>
  );
};

export default Navbar;
