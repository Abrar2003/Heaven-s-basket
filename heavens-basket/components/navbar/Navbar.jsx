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
      w={["100%", "100%", "100%", "100%", "100%"]}
      p="0% 2%"
      spacing={0}
      mb={1}
    >
      <Flex justify="space-betweeen" bg="white" w="100%">
        <Link href="/" w={"28%"}>
          <Image
            src="https://doc-0o-1k-docs.googleusercontent.com/docs/securesc/knmcfrftg6ptbs9sa7a7cn4ed443gpgk/22328evqomcn9ag4reu1o3ege81s0d2o/1668331425000/03003399728676051104/03003399728676051104/18TWmTX2zb3njPGocNx7jllEBe8U_o3z9?e=view&ax=AEKYgyRCUhb2CqTBIlLo_cJvEgajEws015S3kCwK1NRbo5_YIreGguz7tdBVO7CAef4Fhxf8vFxhGwGGcThP4I_gH_4h6o7szwTz3AaGzN6pwd2MRsJIwieqam68yoCHGBMes67k8DRJ2RX6yH5jrqVwCTOjWJTaXFnPY_QwoQo5njE4AUZNXXfg4jo_Go4WzUkBUK4CfxjRtISrEFDAHLFBfaRNdpTt-xBJa6wulUDYEBdpG-Ov3krrusa5plHDY1xnR-zLsSnPrIVxEKjGwoEEi08YlOMebFxW2uJ7fyQ8j0q7W4A37YKlw-ZBm3G-c1Ff8EDhEOf92XX8NVK3RUScH3mzikYQwtLJR38UKMHQcOMExvMj9WXxI709JF8VjfOSUwBUZDWN8nJ7VRGn6ZDHzQpWm0Vn8gsVq0lQInlP0rZCwaWFb3fNH9uGFCthh7uHVslf_GcsKVIjFUf5n6iZeuQQN_GFDzJWvyzGRkJDfXdX0UwWPw4QgXIS--LZY1Drdq_3ojwc2oo2wJ3YBJpnM58k5E_XihSSlRj2Pq4WSJlPamvcgKdR9bZJPW2jULp1w-ahcUqLdR_t3B8_unY0f_ttB0P9BZIR5_-myZH_Rdq7yyctGY7926fMp_8SoIXnCXbBvK5xqjRx4rLQTUm9FPuyKFlLMQs-TwaTg6dE4OL-kZiiwBCf_hbmgvBkKdsU4rFvwfNJcLErQQlTz3oVr1Cj-2gVdoLB62D1PCphn3W3gdvfCn4IS0BWQNszp8hSy0hHfBp8eFZdZd_UmikiLKtEWTTdCtA29vNr5edVEh4cPjUJNRhjqV7-xaR4PorvruKHxn9CLgaf4yNDZrN3_gl6dgNafOkmfoZ4GEiYcyLXOGzqZvUD5OdKkOUjRok-scJ2zBt3z71SbiTHvML6luzsy1FX15KxRhTchpECt0LPQ2tBLNdEvXaFzA7jIFQBGIXHoThl2GMe&uuid=a51858c6-3680-4ca7-b4d2-e9ba0b141ab9&authuser=0&nonce=83145a7n7eihs&user=03003399728676051104&hash=p51dhdabo585ek41eoh5ufni0itpqmc9"
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
            {/* <Text fontSize="12px" color="#880033">
              <Link href="#">
                Login/Register <TriangleDownIcon boxSize={"10px"} />{" "}
              </Link>
            </Text> */}
            {state}
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
