import HomePage from "./homePage";
import DropDown from "../components/navbar/DropDown";
import Footer from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import React from "react";

//React-Icons
import { IconContext } from "react-icons";
import { AiFillCaretRight } from "react-icons/ai";

//Chakra components
import {
  Box,
  Stack,
  HStack,
  Flex,
  Text,
  Heading,
  Image,
  Divider,
} from "@chakra-ui/react";

import style from "../styles/Home.module.css";

//Sliders
import SimpleSlider from "../components/crousels/SimpleSlider";
import MultiSlider from "../components/crousels/MultiSlider";

export default function Home() {
  const trendingItems = [
    {
      name: "Haagen-Dazs Ice Cream - Mango Ras.",
      img: "IceCream-Mango.jpg",
      price: 780,
    },
    { name: "HA TAPIOCA FLOUR 400G", img: "flour.jpg", price: 210 },
    {
      name: "Kwality Wall'S Ice Cream - Magnum Chocotrffle Stick 80Ml",
      img: "M-IceCream.jpg",
      price: 90,
    },
    {
      name: "HA ORGANIC MOONG DAL YELLOW SPLIT 500G",
      img: "MoongDal.jpg",
      price: 149,
    },
    { name: "RAY SPRAY OIL JAR 200ml", img: "OilJar.jpg", price: 499 },
  ];

  return (
    <Box m={"auto"}>
      <Navbar />
      <HomePage />
      <Footer />
    </Box>
  );
}

{
  /*  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ HOME PAGE/code starts from here ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓  */
}

{
  /* <Box w={["100%", "100%", "100%", "100%", "70%"]} m="auto">
        <Heading fontSize={"4xl"}>Home Page</Heading>
        <Stack gap={"30px"}>
          <Image
            rounded={["5px", "10px", "10px", "15px", "20px"]}
            src="banner1.jpg"
            alt="banner"
          />
          <Image
            rounded={["5px", "10px", "10px", "15px", "20px"]}
            src="banner2.jpg"
            alt="banner"
          />

          <Flex w="100%" justifyContent={"space-evenly"}>
            <Box
              w="30%"
              rounded={["5px", "10px", "10px", "15px", "20px"]}
              className={style.box}
            >
              <Image
                w="100%"
                rounded={["5px", "10px", "10px", "15px", "20px"]}
                src="card1.jpeg"
                alt="banner"
              />
            </Box>
            <Box
              w="30%"
              rounded={["5px", "10px", "10px", "15px", "20px"]}
              className={style.box}
            >
              <Image
                w="100%"
                rounded={["5px", "10px", "10px", "15px", "20px"]}
                src="card2.png"
                alt="banner"
              />
            </Box>
            <Box
              w="30%"
              rounded={["5px", "10px", "10px", "15px", "20px"]}
              className={style.box}
            >
              <Image
                w="100%"
                rounded={["5px", "10px", "10px", "15px", "20px"]}
                src="card3.png"
                alt="banner"
              />
            </Box>
          </Flex>
          <IconContext.Provider value={{ color: "black", size: "10px" }}>
            <Flex gap={".5%"} alignItems={"center"} justifyContent="center">
              <Divider borderColor={"black"} />
              <Box w={["80%", "70%", "65%", "60%", "54%"]}>
                <Text
                  w="100%"
                  p={"none"}
                  textAlign={"center"}
                  fontSize={["xs", "md", "xl", "2xl", "3xl"]}
                >
                  SHOP BY CATAGORY
                </Text>
              </Box>
              <Divider borderColor={"black"} />
            </Flex>
            <Flex justifyContent={"space-evenly"}>
              <Stack w={"24%"}>
                <Box>
                  <Image
                    className={style.box}
                    mb="10px"
                    rounded={["5px", "10px", "10px", "15px", "20px"]}
                    w={"100%"}
                    src="veggies-card.png"
                  />
                  <Text fontSize={"large"}>Exotic Vegitables</Text>
                </Box>
                <Flex
                  pr={"10%"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Text fontSize={["7px", "9px", "11px", "13px", "15px"]}>
                    Asparagus Artichokes
                  </Text>
                  <AiFillCaretRight />
                </Flex>
                <Flex
                  pr={"10%"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Text fontSize={["7px", "9px", "11px", "13px", "15px"]}>
                    Avocados Peppers
                  </Text>
                  <AiFillCaretRight />
                </Flex>
                <Flex
                  pr={"10%"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Text fontSize={["7px", "9px", "11px", "13px", "15px"]}>
                    Broccoli Zucchini
                  </Text>
                  <AiFillCaretRight />
                </Flex>
                <Text color={"green.500"}>veiw all</Text>
              </Stack>

              <Stack w={"24%"}>
                <Box>
                  <Image
                    className={style.box}
                    mb="10px"
                    rounded={["5px", "10px", "10px", "15px", "20px"]}
                    w={"100%"}
                    src="meat-card.png"
                  />
                  <Text fontSize={"large"}>Meat, Poultry and Seafood</Text>
                </Box>
                <Flex
                  pr={"10%"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Text fontSize={["7px", "9px", "11px", "13px", "15px"]}>
                    Chicken Cuts Lollipops Mince
                  </Text>
                  <AiFillCaretRight />
                </Flex>
                <Flex
                  pr={"10%"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Text fontSize={["7px", "9px", "11px", "13px", "15px"]}>
                    Fish Other Seafood
                  </Text>
                  <AiFillCaretRight />
                </Flex>
                <Flex
                  pr={"10%"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Text fontSize={["7px", "9px", "11px", "13px", "15px"]}>
                    Fresh Kebabs Others
                  </Text>
                  <AiFillCaretRight />
                </Flex>
                <Text color={"green.500"}>veiw all</Text>
              </Stack>

              <Stack w={"24%"}>
                <Box>
                  <Image
                    className={style.box}
                    mb="10px"
                    rounded={["5px", "10px", "10px", "15px", "20px"]}
                    w={"100%"}
                    src="bread-card.png"
                  />
                  <Text fontSize={"large"}>Fresh Artisanal Breads</Text>
                </Box>
                <Flex
                  pr={"10%"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Text fontSize={["7px", "9px", "11px", "13px", "15px"]}>
                    Breadsticks Crostinni Lavache
                  </Text>
                  <AiFillCaretRight />
                </Flex>
                <Flex
                  pr={"10%"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Text fontSize={["7px", "9px", "11px", "13px", "15px"]}>
                    Buns Croissants Bagels
                  </Text>
                  <AiFillCaretRight />
                </Flex>
                <Flex
                  pr={"10%"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Text fontSize={["7px", "9px", "11px", "13px", "15px"]}>
                    Muffins Cakes Brownies
                  </Text>
                  <AiFillCaretRight />
                </Flex>
                <Text color={"green.500"}>veiw all</Text>
              </Stack>

              <Stack w={"24%"}>
                <Box>
                  <Image
                    className={style.box}
                    mb="10px"
                    rounded={["5px", "10px", "10px", "15px", "20px"]}
                    w={"100%"}
                    src="snacks-card.png"
                  />
                  <Text fontSize={"large"}>Daily Essentials</Text>
                </Box>
                <Flex
                  pr={"10%"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Text fontSize={["7px", "9px", "11px", "13px", "15px"]}>
                    Snacks & Beverages
                  </Text>
                  <AiFillCaretRight />
                </Flex>
                <Flex
                  pr={"10%"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Text fontSize={["7px", "9px", "11px", "13px", "15px"]}>
                    Breakfast, Dairy & Bakery
                  </Text>
                  <AiFillCaretRight />
                </Flex>
                <Flex
                  pr={"10%"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Text fontSize={["7px", "9px", "11px", "13px", "15px"]}>
                    Staples
                  </Text>
                  <AiFillCaretRight />
                </Flex>
                <Text color={"green.500"}>veiw all</Text>
              </Stack>
            </Flex>
          </IconContext.Provider>
        </Stack>

        {/* //TODO :- Crousel for banners HERE */
}

{
  /* <Flex gap={".5%"} alignItems={"center"} justifyContent="center">
          <Divider borderColor={"black"} />
          <Box w={["80%", "70%", "65%", "60%", "54%"]}>
            <Text
              w="100%"
              p={"none"}
              textAlign={"center"}
              fontSize={["xs", "md", "xl", "2xl", "3xl"]}
            >
              WHAT'S TERNDING
            </Text>
          </Box>
          <Divider borderColor={"black"} />
        </Flex>

        <MultiSlider />

        <Flex gap={".5%"} alignItems={"center"} justifyContent="center">
          <Divider borderColor={"black"} />
          <Box w={["80%", "70%", "65%", "60%", "54%"]}>
            <Text
              w="100%"
              p={"none"}
              textAlign={"center"}
              fontSize={["xs", "md", "xl", "2xl", "3xl"]}
            >
              OUR EVENTS
            </Text>
          </Box>
          <Divider borderColor={"black"} />
        </Flex>
        <Flex w="100%" justifyContent={"space-evenly"}>
            <Box
              w="30%"
              rounded={["5px", "10px", "10px", "15px", "20px"]}
              className={style.box}
            >
              <Image
                w="100%"
                rounded={["5px", "10px", "10px", "15px", "20px"]}
                src="event1.jpg"
                alt="banner"
              />
            </Box>
            <Box
              w="30%"
              rounded={["5px", "10px", "10px", "15px", "20px"]}
              className={style.box}
            >
              <Image
                w="100%"
                rounded={["5px", "10px", "10px", "15px", "20px"]}
                src="event2.jpg"
                alt="banner"
              />
            </Box>
            <Box
              w="30%"
              rounded={["5px", "10px", "10px", "15px", "20px"]}
              className={style.box}
            >
              <Image
                w="100%"
                rounded={["5px", "10px", "10px", "15px", "20px"]}
                src="event3.png"
                alt="event"
              />
            </Box>
          </Flex>
      </Box> */
}
{
  /* ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ HOME PAGE/ code ends here ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ */
}
