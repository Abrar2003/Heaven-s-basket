import { Box, Button, Divider, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";

const Order = () => {
  const [order, setOrder] = useState("");
  const randomOrder = () => {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < 9; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setOrder(result);
  };
  useEffect(() => {
    randomOrder();
  }, []);
  return (
    <Stack p={"2%"}>
      <Navbar />
      <Box>
        <Text ml={"40px"}>
          <span
            style={{ color: "#b71761", fontSize: "20px", fontWeight: "bold" }}
          >
            Thank You
          </span>
          , your order has been placed.
        </Text>
        <Text ml={"40px"} fontWeight={"bold"}>
          Your Order No.{" "}
          <span style={{ color: "#b71761", fontSize: "18px" }}>{order}</span>
        </Text>
        <Divider />
        <Box display={"flex"} justifyContent="space-between" m={"40px"}>
          <Box w={"45%"}>
            <Text>You can view your order here.</Text>
            <Text>You can track this order in My Account section</Text>
          </Box>
          <Box borderLeft={"1px"}></Box>
          <Box w={"45%"}>
            <Text fontWeight={"bold"}>Delivery Details</Text>
            <p>Jyoti Prakash Mohapatra</p>
            <p>At- Alada, near-alada primary school</p>
            <p>Dist- Jajpur</p>
            <p>Near Hengula Temple</p>
            <p>Bazargate</p>
            <p>Mumbai, Maharashtra</p>
            <p>Pincode- 400001</p>
            <p>Phone No- 93378 41077</p>
          </Box>
        </Box>
        <Box align={"center"}>
          <Button bg={"#92be4d"} color={"white"} align={"center"}>
            <Link href={"/"}>CONTINUE SHOPPING</Link>
          </Button>
        </Box>
      </Box>
      <Footer />
    </Stack>
  );
};

export default order;
