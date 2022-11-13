import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Select,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { Search2Icon, StarIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { BsCart4 } from "react-icons/bs";
import SearchDropdown from "./SearchDropdown";
import DropDown from "./DropDown";
const logo = require("../../public/Logo.png");
export const Navbar = () => {
  return (
    <Stack
      w={["100%", "100%", "100%", "100%", "100%"]}
      p="0% 2%"
      spacing={0}
      mb={1}
    >
      <Flex justify="space-betweeen" bg="white" w="100%">
        <Link href="/" w={"28%"}>
          <Image
            src="https://lh4.googleusercontent.com/NFtaHjtJLMP_akSk2ULeenG8stafqzjEXa8xEGSqLkT_ztNNgFduIeTuCG3gv2llHjo=w2400"
            h="120px"
            w="100%"
            alt=""
          />
        </Link>
        <Stack w="70%">
          <Flex justify="space-between" align="center">
            <HStack m={"10px"} ml={"5%"} fontSize="12px" gap={2}>
              <Text>Online Slots Available |</Text>
              <Text>Fresh & Fast |</Text>
              <Text>Store Locator |</Text>
              <Text>Contact Us |</Text>
            </HStack>
            <Text fontSize="12px" color="#880033">
              <Link href="#">
                Login/Register <TriangleDownIcon boxSize={"10px"} />{" "}
              </Link>
            </Text>
          </Flex>
          <Flex justify="space-between">
            <Stack w="100%">
              <Flex w="100%">
                <Button fontSize="12px" fontWeight="normal" borderRadius="none">
                  400001
                </Button>
                <Select w={"22%"} fontSize="12px" borderRadius="none">
                  <option value="Mumbai">Mumbai</option>
                  <option value="Pune">Pune</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="Thane">Thane</option>
                  <option value="Kolkata">Kolkata</option>
                </Select>
                <Box w="75%">
                  <SearchDropdown />
                </Box>
                <Button
                  bgColor={"#92be4d"}
                  color="white"
                  fontSize="14px"
                  borderRadius="none"
                >
                  <Search2Icon />
                </Button>
              </Flex>
            </Stack>
            <Flex>
              <Button
                bgColor={"white"}
                color={"#92be4d"}
                borderRight="1px solid gray"
                borderRadius="none"
              >
                <StarIcon fontSize={"25px"} />
              </Button>

              <Link href="/cart">
                <Button bgColor={"white"} color={"#92be4d"}>
                  <BsCart4 fontSize={"25px"} />
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Stack>
      </Flex>
      <DropDown />
    </Stack>
    // <Stack p={"0% 2%"} mb={"20px"}>
    //   <Box display="flex" m={"auto"} w={"100%"} align="center">
    //     <Link href="/" w={"28%"}>
    //       <Image src="Logo.png" h="120px" />
    //     </Link>
    //     <Box w={"63%"}>
    //       <HStack m={"10px"} ml={"5%"} fontSize="12px" gap={2}>
    //         <Text>Online Slots Available |</Text>
    //         <Text>Fresh & Fast |</Text>
    //         <Text>Store Locator |</Text>
    //         <Text>Contact Us |</Text>
    //       </HStack>
    //       <Box display={"flex"} fontSize="12px">
    //         <Button fontSize="12px" fontWeight="normal">
    //           400001
    //         </Button>
    //         <Select w={"22%"} fontSize="12px">
    //           <option value="Mumbai">Mumbai</option>
    //           <option value="Pune">Pune</option>
    //           <option value="Bangalore">Bangalore</option>
    //           <option value="Delhi NCR">Delhi NCR</option>
    //           <option value="Thane">Thane</option>
    //           <option value="Kolkata">Kolkata</option>
    //         </Select>
    //         <SearchDropdown />
    //         <Button bgColor={"#92be4d"} color="white" fontSize="14px">
    //           <Search2Icon />
    //         </Button>
    //       </Box>
    //     </Box>
    //     <Box w="12%">
    //       <Text>
    //         <Link href="#">
    //           Login/Register <TriangleDownIcon boxSize={"10px"} />
    //         </Link>
    //       </Text>
    //       <Box mt={"20px"} ml={"10px"}>
    //         <Button bgColor={"white"} color={"#92be4d"}>
    //           <StarIcon fontSize={"25px"} />
    //         </Button>
    //         <Link href="/cart">
    //           <Button bgColor={"white"} color={"#92be4d"}>
    //             <BsCart4 fontSize={"25px"} />
    //           </Button>
    //         </Link>
    //       </Box>
    //     </Box>
    //   </Box>
    //   <DropDown />
    // </Stack>
  );
};
