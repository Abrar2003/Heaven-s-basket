import { CloseIcon } from "@chakra-ui/icons";
import { Button, Image, Td, Text, Tr } from "@chakra-ui/react";
import React, { useState } from "react";

const Counter = ({ name, src, price, discount, qty, id, changeQty, i }) => {
  //   const [count, setCount] = useState(1);
  //   const changeQty = (q) => {
  //     qty + q;
  //   };
  return (
    <Tr key={i}>
      <Td display={"flex"} gap={"20px"} alignItems={"center"}>
        <Image src={src} w="50px" />
        <Text>{name}</Text>
      </Td>
      <Td>₹ {price}</Td>
      <Td>₹ {discount}</Td>
      <Td align={"center"}>
        <Button
          bg={"#92be4d"}
          color={"white"}
          borderRadius={"10px"}
          borderTopRightRadius={"0px"}
          borderBottomRightRadius={"0px"}
          disabled={qty === 1}
          mr={"1px"}
          onClick={() => changeQty(id, -1)}
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
          {qty}
        </Button>
        <Button
          borderRadius={"10px"}
          borderTopLeftRadius={"0px"}
          borderBottomLeftRadius={"0px"}
          bg={"#92be4d"}
          color={"white"}
          onClick={() => changeQty(id, 1)}
        >
          +
        </Button>
      </Td>
      <Td>₹ {price * qty - discount}.00</Td>
      <Td>
        <Button borderRadius={"50%"}>
          <CloseIcon w={3} h={3} />
        </Button>
      </Td>
    </Tr>
  );
};

export default Counter;
