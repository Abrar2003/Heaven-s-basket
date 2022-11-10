import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { RepeatIcon, CloseIcon } from "@chakra-ui/icons";
import { TbTruckDelivery } from "react-icons/tb";
const Cart = () => {
  const [count, setCount] = useState(1);
  const changeQty = (q) => {
    setCount(count + q);
  };

  return (
    <Box w={"90%"} m={"auto"}>
      <Image
        w={"100%"}
        src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/40ffdf36-959e-49f1-9c5c-e43639e69a01.png?v=4"
      />
      <Box display={"flex"} justifyContent={"space-between"} mb={"10px"}>
        <Box display={"flex"} alignItems="center" gap={"20px"}>
          <Text>MY CART(LENGTH OF CART) |</Text>
          <Box gap={"5px"}>
            <RepeatIcon color={"#92be4d"} fontSize={"20px"} /> Refresh
          </Box>
        </Box>
        <Box display={"flex"} gap={"20px"}>
          <Button>CONTINUE SHOPPING</Button>
          <Button>PROCEED TO CHECKOUT</Button>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent="center"
        gap={"10px"}
        alignItems={"center"}
        borderTop={"2px solid #dedede"}
      >
        <TbTruckDelivery fontSize={"25px"} />
        <Text color={"#b71761"} fontWeight={"semibold"}>
          GET YOUR ORDER DELIVERED IN 90 MINUTES . SERVICE TIMINGS BETWEEN 10:00
          AM TO 9.30 PM .
        </Text>
      </Box>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th w={"40%"}>Name</Th>
              <Th w={"14%"}>Price</Th>
              <Th w={"14%"}>Discount</Th>
              <Th w={"14%"}>Qty</Th>
              <Th w={"14%"}>Sub-Total</Th>
              <Th w={"4%"}></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td display={"flex"} gap={"20px"} alignItems={"center"}>
                <Image src="https://gnbdevcdn.s3.amazonaws.com/ProductVariantThumbnailImages/3bc083e7-3eee-4d3d-a54b-8be0fb2e7a4c_50x50.JPG" />
                <Text>American Kale Curled - Exotic 200.00 g</Text>
              </Td>
              <Td isNumeric>₹ 159.50</Td>
              <Td isNumeric>₹ 0.00</Td>
              <Td display={"flex"} align={"center"} gap={"1px"}>
                <Button
                  bg={"#92be4d"}
                  color={"white"}
                  borderRadius={"10px"}
                  borderTopRightRadius={"0px"}
                  borderBottomRightRadius={"0px"}
                  disabled={count === 1}
                  onClick={() => changeQty(-1)}
                >
                  -
                </Button>
                <Button
                  borderRadius={"0px"}
                  bg={"#92be4d"}
                  color={"white"}
                  variant={"ghost"}
                >
                  {count}
                </Button>
                <Button
                  borderRadius={"10px"}
                  borderTopLeftRadius={"0px"}
                  borderBottomLeftRadius={"0px"}
                  bg={"#92be4d"}
                  color={"white"}
                  onClick={() => changeQty(1)}
                >
                  +
                </Button>
              </Td>
              <Td isNumeric>₹ 159.50</Td>
              <Td>
                <Button borderRadius={"50%"}>
                  <CloseIcon w={3} h={3} />
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Box align={"right"}>
        <Box w={"20%"} border={"1px"} align={"left"}>
          <Text>Sub-Total: ₹ 214.80</Text>
          <Text>Delivery Charges: ₹ 50.00</Text>
          <Text>TOTAL: ₹265.00</Text>
        </Box>
      </Box>
      <Box
        align={"right"}
        borderTop={"1px solid #dedede"}
        borderBottom={"2px solid #dedede"}
        p={"10px 0px 10px 0px"}
      >
        <Button>CONTINUE SHOPPING</Button>
        <Button ml={"20px"}>PROCEED TO CHECKOUT</Button>
      </Box>
      <Text textAlign={"center"} color={"#b71761"} fontWeight={"semibold"}>
        RESTOCK YOUR BASKET
      </Text>

      <Grid templateColumns="repeat(4, 1fr)">
        <GridItem bg={"blue"} w="100%" h="30"></GridItem>
        <GridItem bg={"red"} w="100%" h="30"></GridItem>
        <GridItem bg={"green"} w="100%" h="30"></GridItem>
        <GridItem bg={"teal"} w="100%" h="30"></GridItem>
      </Grid>
    </Box>
  );
};

export default Cart;
