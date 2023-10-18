import { Platform } from "../hooks/useGame";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIcons = ({ platforms }: Props) => {
  const icons_map = new Map<string, IconType>([
    ["pc", FaWindows],
    ["playstation", FaPlaystation],
    ["xbox", FaXbox],
    ["nintendo", SiNintendo],
    ["mac", FaApple],
    ["linux", FaLinux],
    ["android", FaAndroid],
    ["ios", MdPhoneIphone],
    ["web", BsGlobe],
  ]);

  return (
    <>
      <HStack>
        {platforms.map((platform) => (
          <Icon as={icons_map.get(platform.slug)} color="white"></Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIcons;
