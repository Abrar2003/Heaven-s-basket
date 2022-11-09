import React from "react";
import { Box, HStack, Image, VStack } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    // <Box>
    <HStack>
      <Image src="https://www.naturesbasket.co.in/Images/logosnew.png?v=2" />
      <VStack>
        <HStack>
          <Text>Onlile slots Availability |</Text>
          <Text>fresh & Fast |</Text>
          <Text>Store Locator |</Text>
          <Text>Contact Us |</Text>
        </HStack>
      </VStack>
    </HStack>
    // </Box>
  );
};
