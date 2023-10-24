import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onSearch: (searchGame: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (inputRef.current != null) {
          onSearch(inputRef.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon></SearchIcon>
        </InputLeftElement>
        <Input
          ref={inputRef}
          borderRadius={20}
          type="search"
          placeholder="Search games..."
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
