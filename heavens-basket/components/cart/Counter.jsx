import { CloseIcon } from "@chakra-ui/icons";
import { Button, Image, Td, Text, Tr } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { NEXT_URL } from "../../lib/helper";

const Counter = ({
  title,
  image,
  price,
  qty,
  _id,
  // changeQty,
  handleDelete,
}) => {
  const [count, setCount] = useState(1);
  // const changeQty = (q) => {
  //   setCount(qty + q);
  // };

  let url = `${NEXT_URL}/api/cart/`;

  const subT = count * price;
  console.log("subT", subT);

  console.log("qty", qty);
  return (
    <Tr>
      <Td display={"flex"} gap={"20px"} alignItems={"center"}>
        <Image src={image} w="50px" />
        <Text>{title}</Text>
      </Td>
      <Td>₹ {price}</Td>
      <Td>₹ 0.00</Td>
      <Td align={"center"}>
        <Button
          bg={"#92be4d"}
          color={"white"}
          borderRadius={"10px"}
          borderTopRightRadius={"0px"}
          borderBottomRightRadius={"0px"}
          disabled={count === 1}
          mr={"1px"}
          onClick={() => setCount(count - 1)}
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
          onClick={() => setCount(count + 1)}
        >
          +
        </Button>
      </Td>
      <Td>₹ {price * count}.00</Td>
      <Td>
        <Button borderRadius={"50%"} onClick={() => handleDelete(_id)}>
          <CloseIcon w={3} h={3} />
        </Button>
      </Td>
    </Tr>
  );
};

export default Counter;
