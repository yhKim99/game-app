import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";

const Navbar = () => {
  return (
    <HStack>
      <Image boxSize="70px" src={logo} alt="logo" />
    </HStack>
  );
};

export default Navbar;
