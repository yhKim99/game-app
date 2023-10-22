import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Text } from "@chakra-ui/react";

const PlatformSelector = () => {
  const { data, errors, loading } = usePlatform();

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
            Platforms
          </MenuButton>
          <MenuList>
            {data.map((platform) => (
              <MenuItem>{platform.name}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      )}
    </>
  );
};

export default PlatformSelector;
