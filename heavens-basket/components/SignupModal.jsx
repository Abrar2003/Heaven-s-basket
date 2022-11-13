import React from "react";
import jwt from "jsonwebtoken";

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
  Form
} from "@chakra-ui/react";

import axios from "axios";
import { useState } from "react";

export default function SignupModal() {
    const initialUser = {
        name: "",
        email: "",
        pincode: ""
    }
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isEmail, setIsemail] = useState(false);
  const [signup, setSignup] = useState(false);
  const [formData, setFormData] = useState(initialUser);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  // console.log(email);
  const handleClick = async (e) => {
    setIsemail(true);
    const res = await axios.post("http://localhost:3000/api/users/auth", {
      email,
    });

    localStorage.setItem("email_otp",JSON.stringify(res.data));
    if (res.data === "user not found") {
        // setIsemail(false);
      setSignup(true);
    }
  };

  const handleFormSubmit = async(e)=>{
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/api/users/auth/signup", formData);
    // console.log(res);
    const user = jwt.decode(res);
    setFormData(initialUser)
    console.log(user);
    setIsemail(false);
    onClose();
  }
  const handleForm = (e)=>{
    const { name: key, value } = e.target;
    setFormData({
        ...formData,
        [key]: value,
    })
    console.log(formData)
  }
const handleOtp = (e)=>{
    setOtp(e.target.value);
}
const SubmitOtp = async()=>{
  const storedOTP = JSON.parse(localStorage.getItem("email_otp"))
    const res = await axios.post("http://localhost:3000/api/users/auth/login", {otp: otp}, {
      headers: {
        Authorization: storedOTP.otp,
        email: storedOTP.userData
      }
    });
    localStorage.setItem("userData",JSON.stringify(jwt.decode(res.data)));
    setIsemail(false);
    window.location.reload();
    onClose();
}
  return (
    <>
      <Text onClick={onOpen}>Login/Register</Text>

      <Modal
        size={"3xl"}
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent rounded={0} borderTop="5px solid #6fa624">
          {!isEmail ? 
            <>
              <ModalHeader>ENTER YOUR EMAIL ADDRESS</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <Input
                  onChange={handleChange}
                  rounded={0}
                  w="40%"
                  mb={"10px"}
                  type={"email"}
                  placeholder="Enter your email here..."
                />
                <br />
                <Highlight
                  query="Refund term and policies"
                  styles={{ px: "1", py: "1", color: "purple" }}
                >
                  By continuing, You agree to our Refund term and policies
                </Highlight>
                <br />
                <Button
                  mt={"50px"}
                  rounded={0}
                  h="30px"
                  w="40%"
                  bg={"#6fa624"}
                  color="white"
                  onClick={handleClick}
                >
                  PROCEED
                </Button>
              </ModalBody>
            </>
           : !signup ? 
            <>
              <ModalHeader>ENTER YOUR OTP</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                  <Input
                    name="name"
                    onChange={handleOtp}
                    rounded={0}
                    w="40%"
                    mb={"10px"}
                    type={"text"}
                    placeholder="Enter your OTP here..."
                    value={otp}
                  />
                  <br />
                  <Button
                  mt={"50px"}
                  rounded={0}
                  h="30px"
                  w="40%"
                  bg={"#6fa624"}
                  color="white"
                  onClick={SubmitOtp}
                >
                  PROCEED
                </Button>
              </ModalBody>
            </>
           : 
           <>
           <ModalHeader>ENTER YOUR DETAILS</ModalHeader>
           <ModalCloseButton />
           <ModalBody pb={6}>
             <form onSubmit={handleFormSubmit}>
               <Input
                 name="name"
                 onChange={handleForm}
                 rounded={0}
                 w="40%"
                 mb={"10px"}
                 type={"text"}
                 placeholder="Enter your name here..."
               />
               <br />
               <Input
                 name="email"
                 onChange={handleForm}
                 rounded={0}
                 w="40%"
                 mb={"10px"}
                 type={"email"}
                 placeholder="Enter your email here..."
               />
               <br />
               <Input
                 name="pincode"
                 onChange={handleForm}
                 rounded={0}
                 w="40%"
                 mb={"10px"}
                 type={"text"}
                 placeholder="Enter your zip code here..."
               />
               <br />
               <Input
                 mt={"50px"}
                 rounded={0}
                 h="30px"
                 w="40%"
                 bg={"#6fa624"}
                 color="white"
                 type={"submit"}
                value="PROCEED"
               />
               
             </form>
           </ModalBody>
         </>}
        </ModalContent>
      </Modal>
    </>
  );
}

//sign up form

//OTP form
{
  /* <ModalHeader>ENTER YOUR EMAIL ADDRESS</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Input
              onChange={handleChange}
              rounded={0}
              w="40%"
              mb={"10px"}
              type={"email"}
              placeholder="Enter your email here..."
            />
            <br />
            <Highlight
              query="Refund term and policies"
              styles={{ px: "1", py: "1", color: "purple" }}
            >
              By continuing, You agree to our Refund term and policies
            </Highlight>
            <br />
            <Button
              mt={"50px"}
              rounded={0}
              h="30px"
              w="40%"
              bg={"#6fa624"}
              color="white"
              onClick={handleClick}
            >
              PROCEED
            </Button>
          </ModalBody> */
}
