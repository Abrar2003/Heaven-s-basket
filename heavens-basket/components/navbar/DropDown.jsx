import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import styles from "./DropDown.module.css";

const DropDown = () => {
  return (
    <Box
      w={"75%"}
      m="auto"
      border={"1px"}
      borderRadius={"5px"}
      display={"flex"}
      justifyContent={"space-evenly"}
      fontSize="16px"
    >
      <Text color={"#b71761"}>
        SHOP BY CATEGORY
        <TriangleDownIcon fontSize={"10px"} ml={"10px"} />
        {/* <Box className={styles.dropdowncontent}>
          <Text>Fruits & Vegetables</Text>
          <Text>Cheese, meat & Fruit Platter</Text>
          <Text>Gifting</Text>
          <Text>Fruits & Vegetables</Text>
          <Text>Cheese, meat & Fruit Platter</Text>
          <Text>Gifting</Text>
          <Text>Fruits & Vegetables</Text>
          <Text>Cheese, meat & Fruit Platter</Text>
          <Text>Gifting</Text>
          <Text>Fruits & Vegetables</Text>
          <Text>Cheese, meat & Fruit Platter</Text>
        </Box> */}
      </Text>
      <Text>MY ORDERS</Text>
      <Text>GIFTING</Text>
      <Text>REWARDS</Text>
      <Text>BLOG</Text>
      <Text>OFFERS</Text>
      <Text>CONNOISSEUR'S SELECTION</Text>
      <Text>BOOKS STORE VISIT</Text>
    </Box>
  );
};

export default DropDown;
