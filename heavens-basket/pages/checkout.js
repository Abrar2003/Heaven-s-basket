import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import styles from "../styles/Checkout.module.css";

const slots = [
  { disable: true, radio: false, time: "Today" },
  { disable: true, radio: true, time: "Self Pickup" },
  { disable: true, radio: true, time: "Fresh & Fast" },
  { disable: true, radio: true, time: "09.00 am - 11.00 am" },
  { disable: false, radio: true, time: "11.00 am - 01.00 pm" },
  { disable: false, radio: true, time: "02.00 pm - 04.00 pm" },
  { disable: false, radio: true, time: "05.00 pm - 07.00 pm" },
  { disable: false, radio: true, time: "Same Day Delivery" },
  { disable: false, radio: true, time: "07.00 pm - 09.00 pm" },
  { disable: true, radio: false, time: "Tomorrow" },
  { disable: true, radio: true, time: "Self Pickup" },
  { disable: true, radio: true, time: "Fresh & Fast" },
  { disable: false, radio: true, time: "09.00 am - 11.00 am" },
  { disable: false, radio: true, time: "11.00 am - 01.00 pm" },
  { disable: false, radio: true, time: "02.00 pm - 04.00 pm" },
  { disable: false, radio: true, time: "05.00 pm - 07.00 pm" },
  { disable: false, radio: true, time: "Same Day Delivery" },
  { disable: false, radio: true, time: "07.00 pm - 09.00 pm" },
  { disable: true, radio: false, time: "Sun 13-11-2022" },
  { disable: true, radio: true, time: "Self Pickup" },
  { disable: true, radio: true, time: "Fresh & Fast" },
  { disable: false, radio: true, time: "09.00 am - 11.00 am" },
  { disable: false, radio: true, time: "11.00 am - 01.00 pm" },
  { disable: false, radio: true, time: "02.00 pm - 04.00 pm" },
  { disable: false, radio: true, time: "05.00 pm - 07.00 pm" },
  { disable: false, radio: true, time: "Same Day Delivery" },
  { disable: false, radio: true, time: "07.00 pm - 09.00 pm" },
];
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

const checkout = () => {
  const add = false;
  const [value, setValue] = useState("1");
  return (
    <>
      <Navbar />
      <Box w={"75%"} m={"auto"} mt={"30px"} mb={"30px"}>
        <Tabs variant="enclosed">
          <TabList justifyContent={"space-between"}>
            <Tab>Login</Tab>
            <Tab>Address Details</Tab>
            <Tab>Delivery Slot</Tab>
            <Tab>Order Summary</Tab>
            <Tab>Payment Options</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>
                You are logged in as jyotipm1999@gmail.com
                <span color="#b71761">Logout</span>
              </p>
              <p>Note: By signing out, you will lose your cart data.</p>
            </TabPanel>
            {add ? (
              <TabPanel className={styles.tabpanel}>
                <Box display={"flex"} justifyContent="space-between">
                  <Text fontSize={"lg"} color={"black"}>
                    ADDRESS DETAILS
                  </Text>
                  <Button bg={"#92be4d"} color={"white"}>
                    REVIEW AND PLACE ORDER
                  </Button>
                </Box>
                <Box w={"30%"}>
                  <FormControl isRequired>
                    <FormLabel>First name</FormLabel>
                    <Input placeholder="First name" />
                  </FormControl>{" "}
                  <FormControl isRequired>
                    <FormLabel>Last name</FormLabel>
                    <Input placeholder="First name" />
                  </FormControl>{" "}
                  <FormControl isRequired>
                    <FormLabel>Address</FormLabel>
                    <Input placeholder="First name" />
                  </FormControl>{" "}
                  <FormControl isRequired>
                    <FormLabel>Landmark</FormLabel>
                    <Input placeholder="First name" />
                  </FormControl>{" "}
                  <FormControl isRequired>
                    <FormLabel>Pincode</FormLabel>
                    <Input placeholder="First name" />
                  </FormControl>{" "}
                  <FormControl isRequired>
                    <FormLabel>Area</FormLabel>
                    <Select placeholder="Select">
                      <option value="Delhi">Delhi</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Bangalore">Bangalore</option>
                    </Select>
                  </FormControl>{" "}
                  <FormControl isRequired>
                    <FormLabel>Country</FormLabel>
                    <Input placeholder="First name" />
                  </FormControl>{" "}
                  <FormControl isRequired>
                    <FormLabel>City</FormLabel>
                    <Input placeholder="First name" />
                  </FormControl>{" "}
                  <FormControl isRequired>
                    <FormLabel>Mobile No</FormLabel>
                    <Input placeholder="First name" />
                  </FormControl>
                  <FormControl display={"flex"}>
                    <FormLabel>Billing Address</FormLabel>
                    <Checkbox defaultChecked>Same as shipping Address</Checkbox>
                  </FormControl>
                  <Checkbox>I would like to gift this order</Checkbox>
                </Box>
              </TabPanel>
            ) : (
              <TabPanel>
                <Box align={"right"}>
                  <Button align={"right"} bg={"#92be4d"} color={"white"}>
                    REVIEW AND PLACE ORDER
                  </Button>
                </Box>
                <Box
                  display={"flex"}
                  w={"100%"}
                  // justifyContent={"space-between"}
                  gap={"100px"}
                >
                  <Box w={"50%"} border={"0px"}>
                    <Text fontSize={"20px"}>Select an existing address</Text>
                    <Box border={"1px"} p={"10px"}>
                      <Text fontSize={"md"}>Jyoti Prakash</Text>
                      <Divider />
                      <Text>At-Jajpur, Odisha</Text>
                      <Text>Dist-Jajpur</Text>
                      <Text>Odisha - 755019</Text>
                      <Text>Ph. No.- +91 9337841077</Text>
                    </Box>
                  </Box>
                  <Box borderLeft={"1px"} borderColor={"gray.300"}></Box>
                  <Box w={"50%"} border={"0px"}>
                    <FormControl isRequired>
                      <FormLabel>First name</FormLabel>
                      <Input placeholder="First name" />
                    </FormControl>{" "}
                    <FormControl isRequired>
                      <FormLabel>Last name</FormLabel>
                      <Input placeholder="First name" />
                    </FormControl>{" "}
                    <FormControl isRequired>
                      <FormLabel>Address</FormLabel>
                      <Input placeholder="First name" />
                    </FormControl>{" "}
                    <FormControl isRequired>
                      <FormLabel>Landmark</FormLabel>
                      <Input placeholder="First name" />
                    </FormControl>{" "}
                    <FormControl isRequired>
                      <FormLabel>Pincode</FormLabel>
                      <Input placeholder="First name" />
                    </FormControl>{" "}
                    <FormControl isRequired>
                      <FormLabel>Area</FormLabel>
                      <Select placeholder="Select">
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                      </Select>
                    </FormControl>{" "}
                    <FormControl isRequired>
                      <FormLabel>Country</FormLabel>
                      <Input placeholder="First name" />
                    </FormControl>{" "}
                    <FormControl isRequired>
                      <FormLabel>City</FormLabel>
                      <Input placeholder="First name" />
                    </FormControl>{" "}
                    <FormControl isRequired>
                      <FormLabel>Mobile No</FormLabel>
                      <Input placeholder="First name" />
                    </FormControl>
                    <FormControl display={"flex"}>
                      <FormLabel>Billing Address</FormLabel>
                      <Checkbox defaultChecked>
                        Same as shipping Address
                      </Checkbox>
                    </FormControl>
                    <Checkbox>I would like to gift this order</Checkbox>
                  </Box>
                </Box>
                <Box align={"right"} mt={"20px"}>
                  <Button align={"right"} bg={"#92be4d"} color={"white"}>
                    REVIEW AND PLACE ORDER
                  </Button>
                </Box>
              </TabPanel>
            )}
            <TabPanel>
              <Text>SELECT DELIVERY SLOT</Text>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                mb={"10px"}
              >
                <Text>Selected slot : Today: 11.00am-01.00am</Text>
                <Button bg={"#92be4d"} color={"white"}>
                  PROCEED TO PAY
                </Button>
              </Box>

              <Box>
                <Grid
                  templateColumns="repeat(9, 1fr)"
                  gap={"1px"}
                  fontSize={"14px"}
                >
                  {slots.map((elem, i) => {
                    return elem.radio === false ? (
                      <GridItem bg={"rgb(220, 206, 206)"}>
                        <Text>{elem.time}</Text>
                      </GridItem>
                    ) : elem.disable === true ? (
                      <GridItem bg={"grey"}>
                        <Radio isDisabled>{elem.time}</Radio>
                      </GridItem>
                    ) : (
                      <GridItem bg={"white"}>
                        <Radio colorScheme="green">{elem.time}</Radio>
                      </GridItem>
                    );
                  })}
                </Grid>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                mt={"10px"}
              >
                <Box display={"flex"} gap={"10px"}>
                  <Checkbox size="lg" colorScheme="white" defaultChecked>
                    Available
                  </Checkbox>
                  <Checkbox size="lg" colorScheme="gray" defaultChecked>
                    Not Available
                  </Checkbox>
                  <Checkbox size="lg" colorScheme="green" defaultChecked>
                    Selected
                  </Checkbox>
                </Box>
                <Button bg={"#92be4d"} color={"white"}>
                  PROCEED TO PAY
                </Button>
              </Box>
            </TabPanel>
            <TabPanel>
              <Image src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/0ce4e3df-a943-435c-8223-74dfd2c573ae.png?v=5" />
              <Box border={"1px"} mt={"10px"} p={"10px"}>
                <Text fontSize={"12px"} fontWeight={"bold"}>
                  NOTE: Fresh & Fast Delivery service is applicable for select
                  for select pincodes.
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
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.map((el, i) => {
                      return (
                        <Tr key={i}>
                          <Td
                            display={"flex"}
                            gap={"20px"}
                            alignItems={"center"}
                          >
                            <Image src={el.src} w="50px" />
                            <Text>{el.name}</Text>
                          </Td>
                          <Td>₹ {el.price}</Td>
                          <Td>₹ {el.discount}</Td>
                          <Td align={"center"}>
                            <Button
                              borderRadius={"0px"}
                              bg={"#92be4d"}
                              color={"white"}
                              variant={"ghost"}
                              mr={"1px"}
                            >
                              1
                            </Button>
                          </Td>
                          <Td>₹ {el.price - el.discount}.00</Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
              <Box border={"1px"} p={"10px"}>
                <RadioGroup onChange={setValue} value={value}>
                  <Stack direction="row" w={"90%"}>
                    <Radio value="1">
                      <Text fontSize={"13px"}>
                        1 Month Silver Plan MRP ₹149 89.00
                      </Text>
                    </Radio>
                    <Radio value="2">
                      <Text fontSize={"13px"}>
                        3 Month Gold Plan + 2 Month Free MRP ₹299 199.00
                      </Text>
                    </Radio>
                    <Radio value="3">
                      <Text fontSize={"13px"}>
                        6 Month Platinum Plan MRP ₹599 299.00
                      </Text>
                    </Radio>
                    <Radio value="4">
                      <Text fontSize={"13px"}>None</Text>
                    </Radio>
                  </Stack>
                </RadioGroup>
                <Box className={styles.planText}>
                  <p>Note:</p>
                  <p>
                    Nature’s Basket membership program comes with perks like
                    free delivery and no minimum order value of Rs 500. The
                    current plans are available for one, three and six month
                    durations. Select “None” to avoid membership.
                  </p>
                  <p>T&C : Membership once subscribed cannot be cancelled.</p>
                </Box>
              </Box>
              <Box display={"flex"} justifyContent="space-between" gap={"20%"}>
                <Box w={"60%"}>
                  <FormControl p={"10px"} gap={"20px"} display={"flex"}>
                    <FormLabel fontSize={"14px"}>Enter Voucher Code:</FormLabel>
                    <Input w={"45%"} placeholder="Enter Voucher Code:" />
                    <Button variant="outline" color="#92be4d">
                      Submit
                    </Button>
                  </FormControl>
                  <FormControl p={"10px"} gap={"20px"} display={"flex"}>
                    <FormLabel fontSize={"14px"}>
                      Redeem Reward Points:
                    </FormLabel>
                    <Input w={"45%"} placeholder="Redeem Reward Points" />
                    <Button variant="outline" color="#92be4d">
                      Submit
                    </Button>
                  </FormControl>
                  <FormControl p={"10px"} gap={"20px"} display={"flex"}>
                    <FormLabel fontSize={"14px"}>
                      Redeem Gift Card/E-GV:
                    </FormLabel>
                    <Input w={"45%"} placeholder="Redeem Gift Card/E-GV" />
                    <Button variant="outline" color="#92be4d">
                      Submit
                    </Button>
                  </FormControl>
                </Box>
                <Box w={"40%"}>
                  <Text>Sub-Total (Inclusive of taxes.) ₹ 374.60</Text>
                  <Text>Delivery Charges ₹50</Text>
                </Box>
              </Box>
              <Box align={"right"}>
                <Text>TOTAL ₹ 425</Text>
                <Button bg={"#92be4d"} color={"white"}>
                  PROCEED TO PAY
                </Button>
              </Box>
            </TabPanel>
            <TabPanel>
              <Text fontWeight={"bold"}>PICK A PAYMENT METHOD</Text>
              <Tabs size="md" variant="enclosed" display={"flex"}>
                <TabList display={"block"} w={"30%"}>
                  <Tab w={"100%"} gap={"10px"}>
                    <Image
                      w={"80px"}
                      src="https://d1z88p83zuviay.cloudfront.net/Images/paytm-option.jpg"
                    />
                    <Text>Wallet</Text>
                  </Tab>
                  <Tab w={"100%"} gap={"10px"}>
                    <Image
                      w={"80px"}
                      src="https://www.naturesbasket.co.in/Images/mobikwik-wallet.png"
                    />
                    <Text>Wallet</Text>
                  </Tab>
                  <Tab w={"100%"} gap={"10px"}>
                    <Image
                      w={"80px"}
                      src="https://www.naturesbasket.co.in/Images/payUMoney-wallet.png"
                    />
                    <Text>Wallet</Text>
                  </Tab>
                  <Tab w={"100%"} gap={"10px"}>
                    <Text>ICICI</Text>
                    <Image
                      w={"80px"}
                      src="https://www.naturesbasket.co.in/Images/icon-icici-pockets.png"
                    />
                  </Tab>
                  <Tab w={"100%"} gap={"10px"}>
                    <Image
                      w={"80px"}
                      src="https://www.naturesbasket.co.in/Images/sodexo.jpeg"
                    />
                    <Text>Payment</Text>
                  </Tab>
                  <Tab w={"100%"} gap={"10px"}>
                    <Text>Cash on delivery</Text>
                  </Tab>
                  <Tab w={"100%"} gap={"10px"}>
                    <Text>Card on delivery</Text>
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Text>Pay by Paytm Wallet</Text>
                    <Box borderBottom={"1px"} bg={"gray.200"} p="5px">
                      <Text fontSize={"14px"}>
                        NOTE : When you click on Place Order - Your order will
                        be placed first and then you will be redirected to
                        payment page.
                      </Text>
                    </Box>
                    <Text mt={"20px"} mb={"15px"}>
                      TOTAL ₹ 265/-
                    </Text>
                    <Box
                      display={"flex"}
                      w="70%"
                      justifyContent={"space-between"}
                      mb="10px"
                    >
                      <Text>
                        Verify Order: Type the character you see in the image
                      </Text>
                      <Box bg={"gray.100"} p={"10px"}>
                        <Text>gBcSQ</Text>
                      </Box>
                    </Box>
                    <Box
                      display={"flex"}
                      w="70%"
                      justifyContent={"space-between"}
                      mb={"10px"}
                    >
                      <Text>Letters shown are not case-sensetive</Text>
                      <Input w={"20%"} />
                    </Box>
                    <Box w="70%" align={"right"} mb={"20px"}>
                      <Button bg={"#92be4d"} color={"white"}>
                        Place Order
                      </Button>
                    </Box>
                    <Text fontSize={"12px"} color={"gray"}>
                      By placing the order, you have read and agreed to Nature's
                      Basket Terms of Use and Privacy Policy
                    </Text>
                  </TabPanel>
                  <TabPanel>
                    <Text>Pay by Mobikwik Wallet</Text>
                    <Box borderBottom={"1px"} bg={"gray.200"} p="5px">
                      <Text fontSize={"14px"}>
                        NOTE : When you click on Place Order - Your order will
                        be placed first and then you will be redirected to
                        payment page.
                      </Text>
                    </Box>
                    <Text mt={"20px"} mb={"15px"}>
                      TOTAL ₹ 265/-
                    </Text>
                    <Box
                      display={"flex"}
                      w="70%"
                      justifyContent={"space-between"}
                      mb="10px"
                    >
                      <Text>
                        Verify Order: Type the character you see in the image
                      </Text>
                      <Box bg={"gray.100"} p={"10px"}>
                        <Text>gBcSQ</Text>
                      </Box>
                    </Box>
                    <Box
                      display={"flex"}
                      w="70%"
                      justifyContent={"space-between"}
                      mb={"10px"}
                    >
                      <Text>Letters shown are not case-sensetive</Text>
                      <Input w={"20%"} />
                    </Box>
                    <Box w="70%" align={"right"} mb={"20px"}>
                      <Button bg={"#92be4d"} color={"white"}>
                        Place Order
                      </Button>
                    </Box>
                    <Text fontSize={"12px"} color={"gray"}>
                      By placing the order, you have read and agreed to Nature's
                      Basket Terms of Use and Privacy Policy
                    </Text>
                  </TabPanel>
                  <TabPanel>
                    <Text>Pay by PayU Wallet</Text>
                    <Box borderBottom={"1px"} bg={"gray.200"} p="5px">
                      <Text fontSize={"14px"}>
                        NOTE : When you click on Place Order - Your order will
                        be placed first and then you will be redirected to
                        payment page.
                      </Text>
                    </Box>
                    <Text mt={"20px"} mb={"15px"}>
                      TOTAL ₹ 265/-
                    </Text>
                    <Box
                      display={"flex"}
                      w="70%"
                      justifyContent={"space-between"}
                      mb={"10px"}
                    >
                      <Text>
                        Verify Order: Type the character you see in the image
                      </Text>
                      <Box bg={"gray.100"} p={"10px"}>
                        <Text>gBcSQ</Text>
                      </Box>
                    </Box>
                    <Box
                      display={"flex"}
                      w="70%"
                      justifyContent={"space-between"}
                      mb={"10px"}
                    >
                      <Text>Letters shown are not case-sensetive</Text>
                      <Input w={"20%"} />
                    </Box>
                    <Box w="70%" align={"right"} mb={"20px"}>
                      <Button bg={"#92be4d"} color={"white"}>
                        PAY NOW
                      </Button>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Text>Pay by ICICI Wallet</Text>
                    <Box borderBottom={"1px"} bg={"gray.200"} p="5px">
                      <Text fontSize={"14px"}>
                        NOTE : When you click on Place Order - Your order will
                        be placed first and then you will be redirected to
                        payment page.
                      </Text>
                    </Box>
                    <Text mt={"20px"} mb={"15px"}>
                      TOTAL ₹ 265/-
                    </Text>
                    <Box
                      display={"flex"}
                      w="70%"
                      justifyContent={"space-between"}
                      mb={"10px"}
                    >
                      <Text>
                        Verify Order: Type the character you see in the image
                      </Text>
                      <Box bg={"gray.100"} p={"10px"}>
                        <Text>gBcSQ</Text>
                      </Box>
                    </Box>
                    <Box
                      display={"flex"}
                      w="70%"
                      justifyContent={"space-between"}
                      mb={"10px"}
                    >
                      <Text>Letters shown are not case-sensetive</Text>
                      <Input w={"20%"} />
                    </Box>
                    <Box w="70%" align={"right"} mb={"20px"}>
                      <Button bg={"#92be4d"} color={"white"}>
                        CONFIRM ORDER
                      </Button>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Text>Pay by Sodexo Wallet</Text>
                    <Box borderBottom={"1px"} bg={"gray.200"} p="5px">
                      <Text fontSize={"14px"}>
                        NOTE : When you click on Place Order - Your order will
                        be placed first and then you will be redirected to
                        payment page.
                      </Text>
                    </Box>
                    <Text mt={"20px"} mb={"15px"}>
                      TOTAL ₹ 265/-
                    </Text>
                    <Box
                      display={"flex"}
                      w="70%"
                      justifyContent={"space-between"}
                      mb={"10px"}
                    >
                      <Text>
                        Verify Order: Type the character you see in the image
                      </Text>
                      <Box bg={"gray.100"} p={"10px"}>
                        <Text>gBcSQ</Text>
                      </Box>
                    </Box>
                    <Box
                      display={"flex"}
                      w="70%"
                      justifyContent={"space-between"}
                      mb={"10px"}
                    >
                      <Text>Letters shown are not case-sensetive</Text>
                      <Input w={"20%"} />
                    </Box>
                    <Box w="70%" align={"right"} mb={"20px"}>
                      <Button bg={"#92be4d"} color={"white"}>
                        CONFIRM ORDER
                      </Button>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Text>Pay by Cash on Delivery</Text>
                    <Box borderBottom={"1px"} p="5px"></Box>
                    <Text mt={"20px"} mb={"15px"}>
                      TOTAL ₹ 265/-
                    </Text>
                    <Box
                      display={"flex"}
                      w="70%"
                      justifyContent={"space-between"}
                      mb={"10px"}
                    >
                      <Text>
                        Verify Order: Type the character you see in the image
                      </Text>
                      <Box bg={"gray.100"} p={"10px"}>
                        <Text>gBcSQ</Text>
                      </Box>
                    </Box>
                    <Box
                      display={"flex"}
                      w="70%"
                      justifyContent={"space-between"}
                      mb={"10px"}
                    >
                      <Text>Letters shown are not case-sensetive</Text>
                      <Input w={"20%"} />
                    </Box>
                    <Box w="70%" align={"right"} mb={"20px"}>
                      <Button bg={"#92be4d"} color={"white"}>
                        CONFIRM ORDER
                      </Button>
                    </Box>
                    <Box borderBottom={"1px"} p="5px"></Box>
                    <Text fontSize={"12px"}>
                      Pay the cash to our staff when you receive the delivery at
                      your doorstep.
                    </Text>
                    <Text fontSize={"12px"}>
                      Note: Please make only cash payment at the time of
                      delivery. Cheque / Demand Draft or any other payment mode
                      will not be entertained.
                    </Text>
                  </TabPanel>
                  <TabPanel>
                    <Text>Pay by Card on Delivery</Text>
                    <Box borderBottom={"1px"} p="5px"></Box>
                    <Text mt={"20px"} mb={"15px"}>
                      TOTAL ₹ 265/-
                    </Text>
                    <Box
                      display={"flex"}
                      w="70%"
                      justifyContent={"space-between"}
                      mb={"10px"}
                    >
                      <Text>
                        Verify Order: Type the character you see in the image
                      </Text>
                      <Box bg={"gray.100"} p={"10px"}>
                        <Text>gBcSQ</Text>
                      </Box>
                    </Box>
                    <Box
                      display={"flex"}
                      w="70%"
                      justifyContent={"space-between"}
                      mb={"10px"}
                    >
                      <Text>Letters shown are not case-sensetive</Text>
                      <Input w={"20%"} />
                    </Box>
                    <Box w="70%" align={"right"} mb={"20px"}>
                      <Button bg={"#92be4d"} color={"white"}>
                        CONFIRM ORDER
                      </Button>
                    </Box>
                    <Box borderBottom={"1px"} p="5px"></Box>
                    <Text fontSize={"12px"}>
                      Pay the cash to our staff when you receive the delivery at
                      your doorstep.
                    </Text>
                    <Text fontSize={"12px"}>
                      Note: Please make only cash payment at the time of
                      delivery. Cheque / Demand Draft or any other payment mode
                      will not be entertained.
                    </Text>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Footer />
    </>
  );
};

export default checkout;
