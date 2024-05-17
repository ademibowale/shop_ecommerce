import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ProductCarousel.scss";
import { responsive } from "./data";
import CarouselItems from "./CarouselItems";

const ProductCarousel = ({ products, deviceType }) => {
  return (
    <div className="product-carousel">
      <Carousel
        responsive={responsive}
        showDots={false}
        infinite={true}
        autoPlay={deviceType !== "mobile"}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all 500ms ease"
        transitionDuration={1000}
      >
        {products.map(product => (
          <div key={product.id} className="product-item">
            <CarouselItems 
              url={product.imageurl}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
