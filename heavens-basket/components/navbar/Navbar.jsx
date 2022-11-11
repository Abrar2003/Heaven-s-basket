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
import Link from "next/link";
import { Search2Icon, StarIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { BsCart4 } from "react-icons/bs";
import SearchDropdown from "./SearchDropdown";

export const Navbar = () => {
  return (
    <Box display="flex" m={"auto"} border="1px" w={"95%"}>
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
          <SearchDropdown />
          <Button bgColor={"#92be4d"} color="white">
            <Search2Icon />
          </Button>
        </Box>
      </Box>
      <Box w="9%">
        <Text>
          Welcome Jyoti <TriangleDownIcon boxSize={"10px"} />
        </Text>
        <Box mt={"20px"} ml={"10px"}>
          <Button bgColor={"white"} color={"#92be4d"}>
            <StarIcon fontSize={"25px"} />
          </Button>
          <Button bgColor={"white"} color={"#92be4d"}>
            <Link href="/cart">
              <BsCart4 fontSize={"25px"} />
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
