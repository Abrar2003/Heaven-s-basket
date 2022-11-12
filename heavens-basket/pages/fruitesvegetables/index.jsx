import React, { useEffect, useState } from "react";
import {
  Stack,
  Image,
  Box,
  Flex,
  Heading,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
  Select,
  Divider,
  SimpleGrid,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import Card from "./Card";
import Footer from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
const Index = () => {
  const [data, setdata] = useState([]);
  const [brands, setbrands] = useState([]);
  const [products, setproducts] = useState([]);
  const [filterbrands, setfilterbrands] = useState([]);
  const [filterTypes, setfilterTypes] = useState("all");
  const [tempdata, settempdata] = useState([]);
  const vegeType = [
    "fruits",
    "Exotic Fruits",
    "daily vegetables",
    "exotic vegetables",
    "organic",
    "Canned & Frozen",
    "Frozen Fruits & ...",
  ];
  useEffect(() => {
    let obj = {};
    fetch("https://harshal-json-mock-server.herokuapp.com/natureBasket")
      .then((res) => res.json())
      .then((res) => {
        setdata(res);
        setproducts(res);
        settempdata(res);
        let brand = res.map((e) => (obj[e.brand] = 1));
        let x = [];
        for (let key in obj) {
          x.push(key);
        }
        setbrands(x);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleCheck = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setfilterbrands([...filterbrands, value]);
    } else if (!checked) {
      let d = filterbrands.filter((e) => e !== value);
      setfilterbrands(d);
    }
  };

  useEffect(() => {
    if (filterbrands.length > 0) {
      let Fdata = products.filter((e) => {
        if (filterbrands.indexOf(e.brand) > -1) {
          return e;
        }
      });

      if (filterTypes === "lth") {
        let F = Fdata.sort((a, b) => a.price - b.price);
        setdata(F);
      } else if (filterTypes === "htl") {
        let F = Fdata.sort((a, b) => b.price - a.price);
        setdata(F);
      } else {
        setdata(Fdata);
      }
    } else {
      if (filterTypes === "lth") {
        let F = data.sort((a, b) => a.price - b.price);
        setdata(F);
      } else if (filterTypes === "htl") {
        let F = data.sort((a, b) => b.price - a.price);
        setdata(F);
      } else {
        setdata(products);
      }
      // console.log(filterTypes);
    }
  }, [filterbrands, filterTypes]);

  const handleFilter = (e) => {
    setfilterTypes(e.target.value);
  };
  return (
    <>
      <Navbar />
      <Stack p="2%">
        {/* <Box pb="10px">
        <Image
          src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Web_Sup_5_F&V.png"
          alt="Vegetables & Fruites"
          w="100%"
          borderRadius="25px"
        />
      </Box> */}
        <Flex w="100%">
          <Stack w="16%">
            <Flex justify="space-between">
              <Heading fontSize="19px" fontWeight="normal" color="#555b54">
                FILTER
              </Heading>
              <Text color="#84ba40" fontWeight="normal" fontSize="12px">
                CLEAR ALL
              </Text>
            </Flex>
            <Text> Fruits & Vegetables</Text>
            <Stack h="200px" overflowY="scroll">
              {vegeType &&
                vegeType.map((e) => {
                  return (
                    <Button
                      bg="white"
                      border="0.5px solid rgb(182, 22, 113)"
                      p={2}
                      borderRadius="7px"
                      textTransform="capitalize"
                      fontSize="13px"
                      color="rgb(182, 22, 113)"
                      fontWeight="normal"
                      _hover={{ bg: "rgb(182, 22, 113)", color: "white" }}
                    >
                      {e}
                    </Button>
                  );
                })}
            </Stack>
            <Text> Brands </Text>
            <Stack h="200px" overflow="scroll" id="brands">
              {brands &&
                brands.map((e) => {
                  return (
                    <Box
                      bg="white"
                      border="0.5px solid rgb(182, 22, 113)"
                      p={1}
                      borderRadius="7px"
                      fontSize="13px"
                    >
                      <Checkbox
                        onChange={handleCheck}
                        key={brands.indexOf(e)}
                        value={e}
                        fontSize="13px"
                        _hover={{ color: "#91bf45" }}
                        colorScheme="green"
                      >
                        {e}
                      </Checkbox>
                    </Box>
                  );
                })}
            </Stack>
          </Stack>
          <Stack w="82.5%" pl="2%" spacing="2%">
            <Breadcrumb
              spacing="8px"
              fontSize="13px"
              separator={<FiChevronRight color="gray.800" fontWeight="bold" />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="#" color="#bbbbbb">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#" color="#bbbbbb">
                  {" "}
                  Fruits & Vegetables
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Flex
              justify="space-between"
              borderBottom="1px solid #d3d2d2"
              align="center"
              pb="5px"
            >
              <Flex align="baseline" gap="15px">
                <Heading fontWeight="normal" fontSize="24px">
                  FRUITS & VEGETABLES
                </Heading>
                <Text fontSize="16px" color="#858585">
                  {data.length} Products.
                </Text>
              </Flex>
              <Select
                width="15%"
                letterSpacing="1px"
                fontSize="14px"
                variant="unstyled"
                onChange={handleFilter}
              >
                <option value="all"> Relevance</option>
                <option value="lth">Low to high price</option>
                <option value="htl">High to low price</option>
              </Select>
            </Flex>
            <Flex align="center" justify="space-between">
              <Heading fontWeight="normal" fontSize="20px">
                Explore
              </Heading>
              <Box border="1px solid #d3d2d2" h="2px" w="87%"></Box>
            </Flex>
            <SimpleGrid columns="4" gap={2} align="center">
              {data &&
                data.map((e) => {
                  return <Card cardData={e} key={e.id} />;
                })}
            </SimpleGrid>
          </Stack>
        </Flex>
      </Stack>
      <Footer />
    </>
  );
};

export default Index;

// id	"1"
// brand	"Fruit and Vegetable"
// category:"vegetable"
// description	"Try masala curry which is an amazing mix of brinjals with simmering spices cooked in gravy"
// image	"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/03dff5a4-7597-4057-b485-7305c85b0251_425x425.JPG"
// // title	"Brinjal Small 250g"
// title "Brinjal Small "
// price	40
// piece	"1Pc"
// popUpMess	"DELIVERY IN 80 MINUTES"
