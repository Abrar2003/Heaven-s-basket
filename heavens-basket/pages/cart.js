import React, { useState } from "react";
import {
  Box,
  Button,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { RepeatIcon, CloseIcon } from "@chakra-ui/icons";
import { TbTruckDelivery } from "react-icons/tb";
import CartSlider from "../components/cart/CartSlider";
import { Navbar } from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const data = [
  {
    name: "American Kale Curled - Exotic 200.00 g",
    src: "https://gnbdevcdn.s3.amazonaws.com/ProductVariantThumbnailImages/3bc083e7-3eee-4d3d-a54b-8be0fb2e7a4c_50x50.JPG",
    price: "159.00",
    discount: "20.00",
  },
  {
    name: "Kwality walls Ice cream- Magnum",
    src: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/578a02e6-8e0b-4868-9689-5733471e3b87_425x425.jpg",
    price: "269.00",
    discount: "15.00",
  },
  {
    name: "Moong dal- Exotic 200.00 g",
    src: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/13dbbb37-317e-46e3-a94f-477772c22f0d_425x425.jpg",
    price: "189.00",
    discount: "25.00",
  },
  {
    name: "Raw pressery",
    src: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/eb67bb12-a336-4dab-9913-652d224e83a9_425x425.jpg",
    price: "89.00",
    discount: "5.00",
  },
];

const Cart = () => {
  const [count, setCount] = useState(1);
  const changeQty = (q) => {
    setCount(count + q);
  };

  return (
    <>
      <Navbar />
      <Box w={"75%"} m={"auto"}>
        <Image
          w={"100%"}
          mb={"20px"}
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
            <Button bg={"#92be4d"} color={"white"}>
              CONTINUE SHOPPING
            </Button>
            <Button bg={"#92be4d"} color={"white"}>
              PROCEED TO CHECKOUT
            </Button>
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
            GET YOUR ORDER DELIVERED IN 90 MINUTES . SERVICE TIMINGS BETWEEN
            10:00 AM TO 9.30 PM .
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
              {data.map((el, i) => {
                return (
                  <Tr key={i}>
                    <Td display={"flex"} gap={"20px"} alignItems={"center"}>
                      <Image src={el.src} w="50px" />
                      <Text>{el.name}</Text>
                    </Td>
                    <Td>₹ {el.price}</Td>
                    <Td>₹ {el.discount}</Td>
                    <Td align={"center"}>
                      <Button
                        bg={"#92be4d"}
                        color={"white"}
                        borderRadius={"10px"}
                        borderTopRightRadius={"0px"}
                        borderBottomRightRadius={"0px"}
                        disabled={count === 1}
                        mr={"1px"}
                        onClick={() => changeQty(-1)}
                      >
                        -
                      </Button>
                      <Button
                        borderRadius={"0px"}
                        bg={"#92be4d"}
                        color={"white"}
                        variant={"ghost"}
                        mr={"1px"}
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
                    <Td>₹ {el.price * count - el.discount}.00</Td>
                    <Td>
                      <Button borderRadius={"50%"}>
                        <CloseIcon w={3} h={3} />
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <Box align={"right"}>
          <Box w={"20%"} align={"left"} p={"10px"}>
            <Text>Sub-Total: ₹ 214.80</Text>
            <Text>Delivery Charges: ₹ 50.00</Text>
            <Text fontSize="lg">TOTAL: ₹265.00</Text>
          </Box>
        </Box>
        <Box
          align={"right"}
          borderTop={"1px solid #dedede"}
          borderBottom={"2px solid #dedede"}
          p={"10px 0px 10px 0px"}
        >
          <Button bg={"#92be4d"} color={"white"}>
            CONTINUE SHOPPING
          </Button>
          <Button ml={"20px"} bg={"#92be4d"} color={"white"}>
            PROCEED TO CHECKOUT
          </Button>
        </Box>
        <Text textAlign={"center"} color={"#b71761"} fontWeight={"semibold"}>
          RESTOCK YOUR BASKET
        </Text>
        <CartSlider />
      </Box>
      <Footer />
    </>
  );
};

export default Cart;