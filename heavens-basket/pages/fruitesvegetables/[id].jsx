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
import { NEXT_URL } from "../../lib/helper";
const Product = () => {
  const [Product, setProduct] = useState({});
  const [imageHover, setImageHover] = useState(false);
  const [position, setposition] = useState("0% 0%");
  const [opacity, setopacity] = useState(1);
  const router = useRouter();

  const [fillStar, setfillStar] = useState(true);

  const { id } = router.query;

  const getdata = async () => {
    try {
      let data = await axios.get( `${NEXT_URL}/api/products/${id}`
      );
      setProduct(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setposition(`${x}% ${y}%`);
  };
  console.log(id);
  return (
    <Stack p="2%">
      <Breadcrumb
        spacing="8px"
        fontSize="15px"
        separator={<FiChevronRight color="gray.800" fontWeight="bold" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/" color="#bbbbbb">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/fruitesvegetables" color="#bbbbbb">
            Fruits & Vegetables
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href={`/fruitesvegetables/${id}`} color="#bbbbbb">
            {Product.title}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Flex>
        <Stack
          w="35%"
          h="80vh"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => {
            setImageHover(true);
            setopacity(0);
          }}
          onMouseLeave={() => {
            setImageHover(false);
            setopacity(1);
          }}
        >
          <Image
            src={Product.image}
            w="100%"
            pointerEvents="none"
            border="1px solid #e4e4e4"
            borderBottom="6px solid #e4e4e4"
            borderRadius="5px"
          />
        </Stack>
        <Stack w="65%" h="80vh">
          {imageHover ? (
            <Stack
              w="70%"
              h="100%"
              border="1px solid #e4e4e4"
              backgroundImage={`url(${Product.image})`}
              backgroundPosition={position}
              backgroundSize="180%"
              zoomWidth={700}
              backgroundRepeat="no-repeat"
            >
              <Image
                src={Product.image}
                opacity={opacity}
                w="70%"
                pointerEvents="none"
              />
            </Stack>
          ) : (
            <Stack ml="20%" spacing={5}>
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
              <Heading
                fontWeight="normal"
                textTransform="upperCase"
                fonrSize="24px"
              >
                {Product.title}
              </Heading>
              <Flex align="center" left="center" gap={3} fontSize="14px">
                <Text>Share</Text>
                <FaFacebookF />
                <FaTwitter />
              </Flex>
              <Text fontSize="14px">Product of : INDIA</Text>
              <Text
                fontSize="14px"
                color="#c8c0c0"
              >{`Size : ${Product.piece}`}</Text>
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
              <Text
                color="#402e00"
                fontSize="14px"
                fontWeight="bold"
                as="i"
                borderBottom="1px solid gray"
              >{`(Inclusive of all taxes)`}</Text>
              <Box color="#402e00" textAlign="justify" fontSize="14px">
                <Text fontSize="15px" mb="2%">
                  Know More
                </Text>
                <Text fontSize="13px">{Product.description}</Text>
                <Text fontSize="13px">#100% Natural</Text>
                <Text fontSize="13px">#Rich in Vitamins and Minerals</Text>
              </Box>
            </Stack>
          )}
          {/* )} */}
        </Stack>
      </Flex>
      <Box
        w="90px"
        h="90px"
        border="1px solid #e4e4e4"
        borderRadius="5px"
        mt="5px"
      >
        <Image w="100%" h="100%" src={Product.image} />
      </Box>
    </Stack>
  );
};

export default Product;
