import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSortedOrder: (order: string) => void;
}

const SortSelector = ({ onSortedOrder }: Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "-name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const [currentName, setName] = useState("");

  return (
    <Menu>
      <MenuButton
        marginBottom="5"
        as={Button}
        rightIcon={<BsChevronDown></BsChevronDown>}
      >
        Order by: {currentName === "" ? "Relevance" : currentName}
      </MenuButton>
      <MenuList>
        {sortOrder.map((order) => (
          <MenuItem
            onClick={() => {
              onSortedOrder(order.value);
              setName(order.label);
            }}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
