import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Flex,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Search2Icon, StarIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { BsCart4 } from "react-icons/bs";
import SearchDropdown from "./SearchDropdown";
import DropDown from "./DropDown";
import SignupModal from "../SignupModal";

export const Navbar = () => {
  const [userData, setData] = useState(null);
  const [state, setState] = useState(null);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    //
    setData(data);
    // setState(1);
  }, []);
  const logout = () => {
    // setState(0);
    setData(null);
    localStorage.removeItem("userData");
    localStorage.removeItem("email_otp");
  };
  useEffect(() => {
    userData
      ? setState(
          <>
            <Text>{`Welcome ${userData.name}`}</Text>
            <Button
              onClick={logout}
              bg={"none"}
              size="sm"
              border={"none"}
              color="#6fa624"
            >
              Log out
            </Button>
          </>
        )
      : setState(<SignupModal />);
  }, [userData]);
  // const loginState =

  return (
    <Stack
      border={"1px solid"}
      m={"auto"}
      w={["100%", "100%", "100%", "100%", "100%"]}
      p="0% 2%"
      mb={"20px"}
    >
      <Flex
        justifyContent={"space-between"}
        alignItems="center"
        border={"1px solid red"}
        m={"auto"}
      >
        <Box w={["10%", "10%", "15%", "15%", "20%"]}>
          <Link href="/">
            <Image src="Logo.png" w={"100%"} />
          </Link>
        </Box>
        <Box w={["25%", "25%", "35%", "50%", "60%"]} w={"63%"}>
          <Flex m={"auto"}>
            <Text fontSize={["sm", "md", "md", "l"]}>
              Online Slots Available |
            </Text>
            <Text>Fresh & Fast |</Text>
            <Text>Store Locator |</Text>
            <Text>Contact Us |</Text>
          </Flex>
          <Box display={"flex"}>
            <Button>400001</Button>
            <Select w={"22%"}>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Delhi NCR">Delhi NCR</option>
              <option value="Thane">Thane</option>
              <option value="Kolkata">Kolkata</option>
            </Select>
            <Box m={"auto"}>
              <SearchDropdown />
            </Box>

            <Button bgColor={"#92be4d"} color="white">
              <Search2Icon />
            </Button>
          </Box>
        </Box>
        <Box w="12%">
          {/* <Text>
            <Link href="#">
              Login/Register <TriangleDownIcon boxSize={"10px"} />
            </Link>
          </Text> */}
          {state}
          <Box mt={"20px"} ml={"10px"}>
            <Button bgColor={"white"} color={"#92be4d"}>
              <StarIcon fontSize={"25px"} />
            </Button>
            <Link href="/cart">
              <Button bgColor={"white"} color={"#92be4d"}>
                <BsCart4 fontSize={"25px"} />
              </Button>
            </Link>
          </Box>
        </Box>
      </Flex>
      <DropDown />
    </Stack>
  );
};
