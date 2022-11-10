import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import styles from "../styles/Checkout.module.css";

const checkout = () => {
  const add = false;
  return (
    <>
      <Navbar />
      <Box w={"75%"} border={"1px"} m={"auto"} mt={"30px"}>
        <Tabs variant="enclosed">
          <TabList>
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
            {/* <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
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
