import React from "react";
import {
  Stack,
  Image,
  Box,
  Flex,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

const Index = () => {
  return (
    <Stack>
      <Box>
        <Image
          src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Web_Sup_5_F&V.png"
          alt="Vegetables & Fruites"
          w="100%"
        />
      </Box>
      <Flex>
        <Stack>
          <Flex>
            <Heading>FILTER</Heading>
            <Text>CLEAR ALL</Text>
          </Flex>
        </Stack>
        <Stack></Stack>
      </Flex>
    </Stack>
  );
};

export default Index;
