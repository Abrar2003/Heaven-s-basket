import { Box, Image } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    const imgs = ["banner4.jpg", "banner5.jpg", "banner6.jpg"];
    return (
      <Box m={"20px 0px"}>
        <Slider width="" {...settings}>
          {imgs.map((img, i) => (
            <Box key={i}>
              <Image
                rounded={["5px", "10px", "10px", "15px", "20px"]}
                w={"100%"}
                src={img}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    );
  }
}
