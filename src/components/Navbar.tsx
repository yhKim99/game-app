import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorSwitch from "./ColorSwitch";

const Navbar = () => {
  return (
    <HStack justify="space-between" padding="10px">
      <Image boxSize="70px" src={logo} alt="logo" />
      <ColorSwitch></ColorSwitch>
    </HStack>
  );
};

export default Navbar;
