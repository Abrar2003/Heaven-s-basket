import { Box, Button, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";

const data = [
  {
    src: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/863d1720-c563-449d-85fb-a85a699fc54d_425x425.jpg",
    name: "REAL GOOD CHICKEN BREAST",
    pcs: "1pc",
    amount: "190.00",
  },
  {
    src: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/0bc08d1f-7c0a-41ab-a37e-6430c69f932e_425x425.jpg",
    name: "REAL GOOD CHICKEN BREAST",
    pcs: "1pc",
    amount: "190.00",
  },
  {
    src: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/65b872a5-b38a-4fe5-ac88-34a79602811a_425x425.jpg",
    name: "REAL GOOD CHICKEN BREAST",
    pcs: "1pc",
    amount: "190.00",
  },
  {
    src: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/124c4ec4-00bd-439b-839a-0a3b13e317a8_425x425.jpg",
    name: "REAL GOOD CHICKEN BREAST",
    pcs: "1pc",
    amount: "190.00",
  },
  {
    src: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e8e0df19-7e6a-48a7-9d16-9743693ba827_425x425.jpg",
    name: "REAL GOOD CHICKEN BREAST",
    pcs: "1pc",
    amount: "190.00",
  },
  {
    src: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1549f8ad-d02d-4dde-aa82-442c0bda498f_425x425.jpg",
    name: "REAL GOOD CHICKEN BREAST",
    pcs: "1pc",
    amount: "190.00",
  },
  {
    src: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ba2d0abb-0a32-4935-952e-db3c53a3e72c_425x425.jpg",
    name: "REAL GOOD CHICKEN BREAST",
    pcs: "1pc",
    amount: "190.00",
  },
  {
    src: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/8810d04c-8055-4b26-89de-72291ca5bc8b_425x425.jpg",
    name: "REAL GOOD CHICKEN BREAST",
    pcs: "1pc",
    amount: "190.00",
  },
];

export default class CartSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };
    return (
      <Box>
        <Slider {...settings}>
          {data.map((el, i) => {
            return (
              <Box
                key={i}
                p={"10px"}
                style={{ height: "100px" }}
                border={"1px solid gray"}
              >
                <Image style={{ height: "50px" }} src={el.src} />
                <Text>{el.name}</Text>
                <Text>{el.pcs}</Text>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Text>₹ {el.amount}</Text>
                  <Button bgColor={"#92be4d"} color={"white"}>
                    ADD
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Slider>
      </Box>
    );
  }
}
