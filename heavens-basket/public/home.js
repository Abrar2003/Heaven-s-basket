import React from "react";

//Nextjs componentss
// import Image from 'next/image';

//Chakra components
import { Box, Stack, Flex, Text, Heading, Image } from "@chakra-ui/react";

//Assests
import ban1 from "../Assets/banner1.jpg";
import ban2 from "../Assets/banner2.jpg";

export default function home() {
  return (
    <Box>
      <Heading fontSize={"4xl"}>Home Page</Heading>
      <Stack>
        <Image src="banner1.jpg" alt="banner" />
        <img src={ban2} alt="banner" />
      </Stack>
    </Box>
  );
}
