import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Input,
  Text,
} from "@chakra-ui/react";

export default function SearchDropdown() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton variant="ghost" onMouseEnter={onOpen} onMouseLeave={onClose}>
        <Input
          textAlign={"center"}
          w={"400px"}
          placeholder="Start shopping..."
        />
      </MenuButton>
      <MenuList
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        align={"left"}
        w={"850px"}
        border={"3px solid #3e9d15"}
        textAlign="center"
      >
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </MenuList>
    </Menu>
  );
}
