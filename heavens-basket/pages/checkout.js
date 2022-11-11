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
      <Box w={"75%"} border={"1px"} m={"auto"} mt={"30px"} mb={"30px"}>
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
                  justifyContent={"space-between"}
                >
                  <Box w={"45%"}>
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
                  <Divider orientation="vertical" variant={"dashed"} />
                  <Box w={"45%"}>
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
            </TabPanel>
            {/*<TabPanel>
              <p>two!</p>
            </TabPanel> */}
          </TabPanels>
        </Tabs>
      </Box>
      <Footer />
    </>
  );
};

export default checkout;
