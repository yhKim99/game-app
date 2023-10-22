import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatform";
import { Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectedPlatform }: Props) => {
  const { data, errors } = usePlatform();
  const [platformName, setPlatformName] = useState("");
  return (
    <>
      {errors ? (
        <Text>{errors}</Text>
      ) : (
        <Menu>
          <MenuButton
            marginBottom="5"
            as={Button}
            rightIcon={<BsChevronDown></BsChevronDown>}
          >
            {platformName === "" ? "Platform" : platformName}
          </MenuButton>
          <MenuList>
            {data.map((platform) => (
              <MenuItem
                onClick={() => {
                  onSelectedPlatform(platform);
                  setPlatformName(platform.name);
                }}
                key={platform.id}
              >
                {platform.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      )}
    </>
  );
};

export default PlatformSelector;
