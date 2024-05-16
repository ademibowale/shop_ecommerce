import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./data";

const ProductCarousel = ({products}) => {
  return (
    <div>
      <Carousel
        responsive={responsive}
        showDots={false}
        infinite={true}
        autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all 500ms ease"
        transitionDuration={1000}
      >
{products}
        

      </Carousel>
    </div>
  );
};

export default ProductCarousel;
