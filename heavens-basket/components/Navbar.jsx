import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Search2Icon, StarIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { BsCart4 } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";

export const Navbar = () => {
  return (
    <Box display="flex" m={"auto"} border="1px">
      <Image src="Logo.png" w={"28%"} h="120px" />
      <Box w={"63%"}>
        <HStack m={"10px"} ml={"5%"}>
          <Text>Online Slots Available |</Text>
          <Text>Fresh & Fast |</Text>
          <Text>Store Locator |</Text>
          <Text>Contact Us |</Text>
        </HStack>
        <Box display={"flex"}>
          <Button>400001</Button>
          <Select w={"28%"}>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Delhi NCR">Delhi NCR</option>
            <option value="Thane">Thane</option>
            <option value="Kolkata">Kolkata</option>
          </Select>
          <Input textAlign={"center"} placeholder="Start shopping..." />
          <Button bgColor={"#3e9d15"} color="white">
            <Search2Icon />
          </Button>
        </Box>
      </Box>
      <Box w="9%">
        <Text>
          Welcome Jyoti <TriangleDownIcon boxSize={"10px"} />
        </Text>
        <Box mt={"20px"} ml={"10px"}>
          <Button bgColor={"white"} color={"#3e9d15"}>
            <StarIcon fontSize={"25px"} />
          </Button>
          <Button bgColor={"white"} color={"#3e9d15"}>
            <BsCart4 fontSize={"25px"} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
