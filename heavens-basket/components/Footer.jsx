import React from "react";
import { Box, VStack, Text, Image, Input, Button } from "@chakra-ui/react";
import { FaFacebookF } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { SiYoutube } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";

export default function Footer() {
  return (
    <Box bg="#fbfbfb">
      <Box w={"95%"} m={"auto"} display="flex" gap={"20px"} mb={"20px"}>
        <VStack w={"17%"} align="left">
          <Text fontWeight="bold">DOWNLOAD THE APP</Text>
          <Image
            w={"80%"}
            src="https://cdn.worldvectorlogo.com/logos/get-it-on-google-play.svg"
          />
          <Image
            w={"80%"}
            src="https://cdn.worldvectorlogo.com/logos/available-on-the-app-store.svg"
          />
        </VStack>
        <VStack w={"17%"} align="left">
          <Text fontWeight="bold">ABOUT US</Text>
          <Text>About Us</Text>
          <Text>Our Vision & Purpose</Text>
          <Text>Quality Standards</Text>
          <Text>Awards</Text>
          <Text>FAQ</Text>
          <Text>Available Delivery Slot</Text>
          <Text>Vendor Contact</Text>
          <Text fontWeight="bold" pt={"20px"}>
            CAREERS
          </Text>
          <Text>Work with us</Text>
        </VStack>
        <VStack w={"17%"} align="left">
          <Text fontWeight="bold">NEWS & MEDIA</Text>
          <Text>Press releases</Text>
          <Text>Newsletters</Text>
          <Text>Events</Text>
          <Text>Photo Gallary</Text>
          <Text>Recipes</Text>
          <Text>NBTV</Text>
          <Text>Our Virtual Store</Text>
        </VStack>
        <VStack w={"17%"} align="left">
          <Text fontWeight="bold">OUR POLICIES</Text>
          <Text>Privacy Policy</Text>
          <Text>Payment policy</Text>
          <Text>Disclaimer</Text>
          <Text>Grievance Officer</Text>
        </VStack>
        <VStack w={"32%"} align="left">
          <Text fontWeight="bold">SIGNUP TO STAY UPDATED</Text>
          <Input placeHolder="ENTER YOUR EMAIL ADDRESS" w={"70%"} />
          <Button bg="#3e9d15" w={"30%"} color="white">
            SUBSCRIBE
          </Button>
        </VStack>
      </Box>
      <Box
        borderTop={"1px"}
        borderBottom={"1px"}
        display="flex"
        justifyContent="space-between"
        w={"95%"}
        m={"auto"}
      >
        <Box
          display="flex"
          alignItems="center"
          w={"50%"}
          ml={"50px"}
          gap={"20px"}
        >
          <Text>Payment Method</Text>
          <Image
            w={"80%"}
            src="https://www.naturesbasket.co.in/Images/icons-card-payments-mode.png"
          />
        </Box>
        <Box display="flex" alignItems="center" w={"25%"} gap={"20px"}>
          <Text>keep in Touch</Text>
          <FaFacebookF fontSize="25px" color="gray" />
          <GrTwitter fontSize="25px" color="gray" />
          <SiYoutube fontSize="25px" color="gray" />
          <BsInstagram fontSize="25px" color="gray" />
          <BsPinterest fontSize="25px" color="gray" />
        </Box>
      </Box>
    </Box>
  );
}
