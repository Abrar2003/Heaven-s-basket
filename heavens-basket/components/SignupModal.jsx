import React from "react";

//Chakra-ui components
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Divider,
  Input,
  Highlight,
  Button,
  Stack,
  Box,
} from "@chakra-ui/react";

import axios from "axios"
import { useState } from "react";

export default function SignupModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(0);
    // const [  ]

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleClick = async (e) => {
    // const res = await fetch("http://localhost:3000/api/users/auth/", { 
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({email})
    // }).then( res => res.json());
    const res = await("http://localhost:3000/api/users/auth",{email});
    // const data = res.json();
    
  };

  return (
    <>
      <Text onClick={onOpen}>Login/Register</Text>

      <Modal size={"3xl"} closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded={0} borderTop="5px solid #6fa624">
          <ModalHeader>ENTER YOUR EMAIL ADDRESS</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Input onChange={handleChange} rounded={0} w="40%" mb={"10px"} type={"email"} placeholder="Enter your email here..." />
            <br />
            <Highlight

              query="Refund term and policies"
              styles={{ px: "1", py: "1", color: "purple" }}
            >
              By continuing, You agree to our Refund term and policies
            </Highlight>
            <br />
            <Button mt={"50px"} rounded={0} h="30px" w="40%" bg={"#6fa624"} color="white" onClick={handleClick}>PROCEED</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
