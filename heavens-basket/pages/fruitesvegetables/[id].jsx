import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
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
  Tooltip,
  CheckboxGroup,
} from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
const Product = () => {
  const [Product, setProduct] = useState({});
  const router = useRouter();

  const [fillStar, setfillStar] = useState(true);

  const { id } = router.query;
  const getdata = async () => {
    try {
      let data = await axios.get(
        `https://harshal-json-mock-server.herokuapp.com/natureBasket/${id}`
      );
      setProduct(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <Stack>
      <Breadcrumb
        spacing="8px"
        fontSize="15px"
        separator={<FiChevronRight color="gray.800" fontWeight="bold" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="#" color="#bbbbbb">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#" color="#bbbbbb">
            Fruits & Vegetables
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#" color="#bbbbbb">
            {Product.title}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Flex>
        <Stack>
          <Image src={Product.image} />
        </Stack>
        <Stack>
          <Tooltip
            hasArrow
            label="ADD TO FAVOURITES"
            color="white"
            bg="green"
            arrowSize={15}
          >
            <Button
              variant="ghost"
              _hover={{ bg: "none" }}
              fontSize="28px"
              ml="90%"
              mb="-50px"
            >
              {fillStar ? (
                <AiOutlineStar
                  color="#92be4d"
                  onMouseEnter={() => {
                    setfillStar(false);
                  }}
                />
              ) : (
                <AiFillStar
                  color="#92be4d"
                  onMouseLeave={() => {
                    setfillStar(true);
                  }}
                />
              )}
            </Button>
          </Tooltip>
          <Heading>{Product.title}</Heading>
          <Flex align="center" left="center" gap={3}>
            <Text>Share</Text>
            <FaFacebookF />
            <FaTwitter />
          </Flex>
          <Text>Product of : INDIA</Text>
          <Text>{`Size : ${Product.piece}`}</Text>
          <Flex gap={2}>
            <Button
              colorScheme="white"
              fontSize="13px"
              bg="none"
              fontWeight="normal"
              borderRadius="10px"
              _hover={{ bg: "none" }}
              color="black"
              border="1px solid #cfcfcf"
            >{`MRP ₹ ${Product.price}`}</Button>
            <Button bg="#92be4d" _hover={{ bg: "#92be4d" }} p="0">
              <Image
                src="https://www.naturesbasket.co.in/Images/CartAddBtn.PNG"
                w="100%"
              />
            </Button>
          </Flex>
          <Text>{`(Inclusive of all taxes)`}</Text>
          <Box>
            <Text>Know More</Text>
            <Text>{Product.description}</Text>
            <Text>#100% Natural</Text>
            <Text>#Rich in Vitamins and Minerals</Text>
          </Box>
        </Stack>
      </Flex>
      <Box w="90px" h="90px">
        <Image w="100%" h="100%" src={Product.image} />
      </Box>
    </Stack>
  );
};

export default Product;
