import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Image,
  Stack,
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
import Link from "next/link";
import Counter from "../components/cart/Counter";
import axios from "axios";
import { NEXT_URL } from "../lib/helper";

// const d = [
//   {
//     id: 1,
//     name: "American Kale Curled - Exotic 200.00 g",
//     src: "https://gnbdevcdn.s3.amazonaws.com/ProductVariantThumbnailImages/3bc083e7-3eee-4d3d-a54b-8be0fb2e7a4c_50x50.JPG",
//     price: "159.00",
//     discount: "20.00",
//     qty: 1,
//   },
//   {
//     id: 2,
//     name: "Kwality walls Ice cream- Magnum",
//     src: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/578a02e6-8e0b-4868-9689-5733471e3b87_425x425.jpg",
//     price: "269.00",
//     discount: "15.00",
//     qty: 1,
//   },
//   {
//     id: 3,
//     name: "Moong dal- Exotic 200.00 g",
//     src: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/13dbbb37-317e-46e3-a94f-477772c22f0d_425x425.jpg",
//     price: "189.00",
//     discount: "25.00",
//     qty: 2,
//   },
//   {
//     id: 4,
//     name: "Raw pressery",
//     src: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/eb67bb12-a336-4dab-9913-652d224e83a9_425x425.jpg",
//     price: "89.00",
//     discount: "5.00",
//     qty: 2,
//   },
// ];

const Cart = () => {
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);

  let url = `${NEXT_URL}/api/cart/`;
  let emails = "abrar.aalam003@gmail.com";
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let daa = await axios.get(url, {
      headers: {
        email: emails,
      },
    });
    setData(daa.data);
  };

  useEffect(() => {
    const t = data.reduce((acc, el) => {
      return acc + el.price;
    }, 0);
    setTotal(t);
  }, [data]);

  ////delete
  const handleDelete = async (_id) => {
    await axios
      .delete(url, {
        headers: {
          productid: _id,
        },
      })
      .then(() => fetchData())
      .catch((e) => {
        console.log(e);
      });
  };

  const changeQty = (id, q) => {
    const newData = data.map((el) =>
      id === el.id ? { ...el, qty: el.qty + q } : el
    );
    // console.log(newData);
    setData(newData);
  };

  // console.log("datttttta", data);
  return (
    <Stack>
      <Navbar />
      <Box w={"100%"} p="0% 2%">
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
              <Link href="/">CONTINUE SHOPPING</Link>
            </Button>
            <Button bg={"#92be4d"} color={"white"}>
              <Link href="/checkout">PROCEED TO CHECKOUT</Link>
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
                  <Counter
                    key={i}
                    {...el}
                    changeQty={changeQty}
                    i={i}
                    handleDelete={handleDelete}
                  />
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <Box align={"right"}>
          <Box w={"20%"} align="left" p={"10px"}>
            <Text>Sub-Total: ₹ {total}.00</Text>
            <Text>Delivery Charges: ₹ 0.00</Text>
            <Text fontSize="lg">Total: ₹ {total}.00</Text>
          </Box>
        </Box>
        <Box
          align={"right"}
          borderTop={"1px solid #dedede"}
          borderBottom={"2px solid #dedede"}
          p={"10px 0px 10px 0px"}
        >
          <Button bg={"#92be4d"} color={"white"}>
            <Link href="/">CONTINUE SHOPPING</Link>
          </Button>
          <Button ml={"20px"} bg={"#92be4d"} color={"white"}>
            <Link href="/checkout">PROCEED TO CHECKOUT</Link>
          </Button>
        </Box>
        <Text textAlign={"center"} color={"#b71761"} fontWeight={"semibold"}>
          RESTOCK YOUR BASKET
        </Text>
        <CartSlider />
      </Box>
      <Footer />
    </Stack>
  );
};

export default Cart;
