import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon></SearchIcon>
      </InputLeftElement>
      <Input
        borderRadius={20}
        type="search"
        placeholder="Search games..."
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
