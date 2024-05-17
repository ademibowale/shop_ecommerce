import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ProductCarousel.scss";
import { responsive } from "./data";

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
            <img src={product.imageurl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
