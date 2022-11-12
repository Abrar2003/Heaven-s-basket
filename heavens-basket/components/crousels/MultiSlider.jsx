import { Stack, Button, Flex, Image, Text, Tooltip, Box } from "@chakra-ui/react";
import React, { Component, useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
import Card from "../ProductCard";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default class MutliSider extends Component {
  render() {
    let fillStar = false;
    let star = "hidden";
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true
    };
    const trendingItems = [
      {
        title: "Haagen-Dazs Ice Cream - Mango Ras.",
        image: "IceCream-Mango.jpg",
        price: 780,
      },
      {
        name: "HA TAPIOCA FLOUR 400G",
        image: "flour.jpg",
        price: 210,
      },
      {
        title: "Kwality Wall'S Ice Cream - Magnum Chocotrffle Stick 80Ml",
        image: "M-IceCream.jpg",
        price: 90,
      },
      {
        title: "HA ORGANIC MOONG DAL YELLOW SPLIT 500G",
        image: "MoongDal.jpg",
        price: 149,
      },
      {
        title: "RAY SPRAY OIL JAR 200ml",
        image: "OilJar.jpg",
        price: 499,
      },
    ];
    return (
      <Box m={"20px 0px"}>
        <Slider {...settings}>
          {trendingItems.map((item) => (
            <Card key={item} cardData={item} />
          ))}
        </Slider>
      </Box>
    );
  }
}
