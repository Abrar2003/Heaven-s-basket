import React from "react";

//React-Icons
import { IconContext } from "react-icons";
import { AiFillCaretRight } from "react-icons/ai";

//Chakra components
import { Box, Stack, Flex, Text, Image, Divider } from "@chakra-ui/react";

import style from "../styles/Home.module.css";
import Link from "next/link";
import MutliSider from "../components/crousels/MultiSlider";

export default function homePage() {
  return (
    <Box w={ [ "100%", "100%", "100%", "100%", "100%" ] } p="0% 2%">
      {/* <Heading fontSize={"4xl"}>Home Page</Heading> */ }
      <Stack gap={ "30px" }>
        <Image
          rounded={ [ "5px", "10px", "10px", "15px", "20px" ] }
          src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/d8cc09f5-5d68-4853-ae9a-233ceabe3acd.jpg?v=14"
          alt="banner"
        />
        <Image
          rounded={ [ "5px", "10px", "10px", "15px", "20px" ] }
          src="https://d1z88p83zuviay.cloudfront.net/BannerImages/bd139272-384b-4d66-8932-8bc8093f5b6d_1320x376.jpg"
          alt="banner"
        />

        <Flex w="100%" justifyContent={ "space-evenly" }>
          <Box
            w="30%"
            rounded={ [ "5px", "10px", "10px", "15px", "20px" ] }
            className={ style.box }
          >
            <Image
              w="100%"
              rounded={ [ "5px", "10px", "10px", "15px", "20px" ] }
              src="https://www.naturesbasket.co.in/Images/NaturesBasketGifting.jpeg?v=8"
              alt="banner"
            />
          </Box>
          <Box
            w="30%"
            rounded={ [ "5px", "10px", "10px", "15px", "20px" ] }
            className={ style.box }
          >
            <Image
              w="100%"
              rounded={ [ "5px", "10px", "10px", "15px", "20px" ] }
              src="https://www.naturesbasket.co.in/Images/Fruits-Vegetables.png?v=17"
              alt="banner"
            />
          </Box>
          <Box
            w="30%"
            rounded={ [ "5px", "10px", "10px", "15px", "20px" ] }
            className={ style.box }
          >
            <Image
              w="100%"
              rounded={ [ "5px", "10px", "10px", "15px", "20px" ] }
              src="https://www.naturesbasket.co.in/Images/Gluten-free-web%20box%20banner.png?v=15"
              alt="banner"
            />
          </Box>
        </Flex>
        <IconContext.Provider value={ { color: "black", size: "10px" } }>
          <Flex gap={ ".5%" } alignItems={ "center" } justifyContent="center">
            <Divider borderColor={ "black" } />
            <Box w={ [ "80%", "70%", "65%", "60%", "54%" ] }>
              <Text
                w="100%"
                p={ "none" }
                textAlign={ "center" }
                fontSize={ [ "xs", "md", "xl", "2xl", "3xl" ] }
              >
                SHOP BY CATAGORY
              </Text>
            </Box>
            <Divider borderColor={ "black" } />
          </Flex>
          <Flex justifyContent={ "space-evenly" }>
            <Stack w={ "24%" }>
              <Link href="/fruitesvegetables">
                <Box>
                  <Image
                    className={ style.box }
                    mb="10px"
                    rounded={ [ "5px", "10px", "10px", "15px", "20px" ] }
                    w={ "100%" }
                    src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Exoticvegetablesweb.png"
                  />
                  <Text fontSize={ "large" }>Exotic Vegitables</Text>
                </Box>
                <Flex
                  pr={ "10%" }
                  alignItems={ "center" }
                  justifyContent={ "space-between" }
                >
                  <Text fontSize={ [ "7px", "9px", "11px", "13px", "15px" ] }>
                    Asparagus Artichokes
                  </Text>
                  <AiFillCaretRight />
                </Flex>
                <Flex
                  pr={ "10%" }
                  alignItems={ "center" }
                  justifyContent={ "space-between" }
                >
                  <Text fontSize={ [ "7px", "9px", "11px", "13px", "15px" ] }>
                    Avocados Peppers
                  </Text>
                  <AiFillCaretRight />
                </Flex>
                <Flex
                  pr={ "10%" }
                  alignItems={ "center" }
                  justifyContent={ "space-between" }
                >
                  <Text fontSize={ [ "7px", "9px", "11px", "13px", "15px" ] }>
                    Broccoli Zucchini
                  </Text>
                  <AiFillCaretRight />
                </Flex>
                <Text color={ "green.500" }>veiw all</Text>
              </Link>
            </Stack>

            <Stack w={ "24%" }>
              <Box>
                <Image
                  className={ style.box }
                  mb="10px"
                  rounded={ [ "5px", "10px", "10px", "15px", "20px" ] }
                  w={ "100%" }
                  src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/coldcutweb.png"
                />
                <Text fontSize={ "large" }>Meat, Poultry and Seafood</Text>
              </Box>
              <Flex
                pr={ "10%" }
                alignItems={ "center" }
                justifyContent={ "space-between" }
              >
                <Text fontSize={ [ "7px", "9px", "11px", "13px", "15px" ] }>
                  Chicken Cuts Lollipops Mince
                </Text>
                <AiFillCaretRight />
              </Flex>
              <Flex
                pr={ "10%" }
                alignItems={ "center" }
                justifyContent={ "space-between" }
              >
                <Text fontSize={ [ "7px", "9px", "11px", "13px", "15px" ] }>
                  Fish Other Seafood
                </Text>
                <AiFillCaretRight />
              </Flex>
              <Flex
                pr={ "10%" }
                alignItems={ "center" }
                justifyContent={ "space-between" }
              >
                <Text fontSize={ [ "7px", "9px", "11px", "13px", "15px" ] }>
                  Fresh Kebabs Others
                </Text>
                <AiFillCaretRight />
              </Flex>
              <Text color={ "green.500" }>veiw all</Text>
            </Stack>

            <Stack w={ "24%" }>
              <Box>
                <Image
                  className={ style.box }
                  mb="10px"
                  rounded={ [ "5px", "10px", "10px", "15px", "20px" ] }
                  w={ "100%" }
                  src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Freshartisinalbreadsweb.png"
                />
                <Text fontSize={ "large" }>Fresh Artisanal Breads</Text>
              </Box>
              <Flex
                pr={ "10%" }
                alignItems={ "center" }
                justifyContent={ "space-between" }
              >
                <Text fontSize={ [ "7px", "9px", "11px", "13px", "15px" ] }>
                  Breadsticks Crostinni Lavache
                </Text>
                <AiFillCaretRight />
              </Flex>
              <Flex
                pr={ "10%" }
                alignItems={ "center" }
                justifyContent={ "space-between" }
              >
                <Text fontSize={ [ "7px", "9px", "11px", "13px", "15px" ] }>
                  Buns Croissants Bagels
                </Text>
                <AiFillCaretRight />
              </Flex>
              <Flex
                pr={ "10%" }
                alignItems={ "center" }
                justifyContent={ "space-between" }
              >
                <Text fontSize={ [ "7px", "9px", "11px", "13px", "15px" ] }>
                  Muffins Cakes Brownies
                </Text>
                <AiFillCaretRight />
              </Flex>
              <Text color={ "green.500" }>veiw all</Text>
            </Stack>

            <Stack w={ "24%" }>
              <Box>
                <Image
                  className={ style.box }
                  mb="10px"
                  rounded={ [ "5px", "10px", "10px", "15px", "20px" ] }
                  w={ "100%" }
                  src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/dailyessentialsweb.png"
                />
                <Text fontSize={ "large" }>Daily Essentials</Text>
              </Box>
              <Flex
                pr={ "10%" }
                alignItems={ "center" }
                justifyContent={ "space-between" }
              >
                <Text fontSize={ [ "7px", "9px", "11px", "13px", "15px" ] }>
                  Snacks & Beverages
                </Text>
                <AiFillCaretRight />
              </Flex>
              <Flex
                pr={ "10%" }
                alignItems={ "center" }
                justifyContent={ "space-between" }
              >
                <Text fontSize={ [ "7px", "9px", "11px", "13px", "15px" ] }>
                  Breakfast, Dairy & Bakery
                </Text>
                <AiFillCaretRight />
              </Flex>
              <Flex
                pr={ "10%" }
                alignItems={ "center" }
                justifyContent={ "space-between" }
              >
                <Text fontSize={ [ "7px", "9px", "11px", "13px", "15px" ] }>
                  Staples
                </Text>
                <AiFillCaretRight />
              </Flex>
              <Text color={ "green.500" }>veiw all</Text>
            </Stack>
          </Flex>
        </IconContext.Provider>
      </Stack>
      <Flex gap={ ".5%" } alignItems={ "center" } justifyContent="center">
        <Divider borderColor={ "black" } />
        <Box w={ [ "80%", "70%", "65%", "60%", "54%" ] }>
          <Text
            w="100%"
            p={ "none" }
            textAlign={ "center" }
            fontSize={ [ "xs", "md", "xl", "2xl", "3xl" ] }
          >
            {`WHAT'S TERNDING`}
          </Text>
        </Box>
        <Divider borderColor={ "black" } />
      </Flex>
      <MutliSider />
      <Flex gap={ ".5%" } alignItems={ "center" } justifyContent="center">
        <Divider borderColor={ "black" } />
        <Box w={ [ "80%", "70%", "65%", "60%", "54%" ] }>
          <Text
            w="100%"
            p={ "none" }
            textAlign={ "center" }
            fontSize={ [ "xs", "md", "xl", "2xl", "3xl" ] }
          >
            OUR EVENTS
          </Text>
        </Box>
        <Divider borderColor={ "black" } />
      </Flex>
      <Flex w="100%" justifyContent={ "space-evenly" }>
        <Box
          w="30%"
          rounded={ [ "5px", "10px", "10px", "15px", "20px" ] }
          className={ style.box }
        >
          <Image
            w="100%"
            rounded={ [ "5px", "10px", "10px", "15px", "20px" ] }
            src="event1.jpg"
            alt="banner"
          />
        </Box>
        <Box
          w="30%"
          rounded={ [ "5px", "10px", "10px", "15px", "20px" ] }
          className={ style.box }
        >
          <Image
            w="100%"
            rounded={ [ "5px", "10px", "10px", "15px", "20px" ] }
            src="event2.jpg"
            alt="banner"
          />
        </Box>
        <Box
          w="30%"
          rounded={ [ "5px", "10px", "10px", "15px", "20px" ] }
          className={ style.box }
        >
          <Image
            w="100%"
            rounded={ [ "5px", "10px", "10px", "15px", "20px" ] }
            src="event3.png"
            alt="event"
          />
        </Box>
      </Flex>
    </Box>
  );
}
