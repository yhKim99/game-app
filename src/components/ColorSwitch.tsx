import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text mb="3px">{colorMode === "dark" ? "Dark Mode" : "Light Mode"}</Text>
    </HStack>
  );
};

export default ColorSwitch;
