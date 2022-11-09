import React from "react";

//Chakra components
import {
  Box,
  Stack,
  HStack,
  Flex,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";

//Assests
import ban1 from "../Assets/banner1.jpg";
import ban2 from "../Assets/banner2.jpg";

export default function home() {
  return (
    <Box w={["100%", "100%", "100%", "100%", "70%"]} m="auto">
      <Heading fontSize={"4xl"}>Home Page</Heading>
      <Stack gap={"30px"}>
        
        <Image
          rounded={["5px", "10px", "10px", "15px", "20px"]}
          src="banner1.jpg"
          alt="banner"
        />
        <Image
          rounded={["5px", "10px", "10px", "15px", "20px"]}
          src="banner2.jpg"
          alt="banner"
        />

        <Flex w="100%" justifyContent={"space-evenly"}>
          <Image
            w="30%"
            rounded={["5px", "10px", "10px", "15px", "20px"]}
            src="card1.jpeg"
            alt="banner"
          />
          <Image
            w="30%"
            rounded={["5px", "10px", "10px", "15px", "20px"]}
            src="card2.png"
            alt="banner"
          />
          <Image
            w="30%"
            rounded={["5px", "10px", "10px", "15px", "20px"]}
            src="card3.png"
            alt="banner"
          />
        </Flex>

      </Stack>
    </Box>
  );
}
