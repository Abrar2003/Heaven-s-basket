import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";

export default class MutliSider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    const trendingItems = [
      {name: "Haagen-Dazs Ice Cream - Mango Ras.",
        img: "IceCream-Mango.jpg",
        price: 780
      },
      {name: "HA TAPIOCA FLOUR 400G",
        img: "flour.jpg",
        price: 210
      },
      {name: "Kwality Wall'S Ice Cream - Magnum Chocotrffle Stick 80Ml",
        img: "M-IceCream.jpg",
        price: 90
      },
      {name: "HA ORGANIC MOONG DAL YELLOW SPLIT 500G",
        img: "MoongDal.jpg",
        price: 149
      },
      {name: "RAY SPRAY OIL JAR 200ml",
        img: "OilJar.jpg",
        price: 499
      }
    ];
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          {trendingItems.map(item => (
            <Flex direction={"column"}>
              <Image src={item.img} alt={item.name} />
              <Text>{item.name}</Text>
              <Text>1pc</Text>
              <Flex>
                <Button>{`MRP ${item.price}`}&#8377;</Button>
                <Button bgColor={"rgb(146, 190, 77)"}>
                    Add
                </Button>
              </Flex>
            </Flex>
          ))}
        </Slider>
      </div>
    );
  }
}