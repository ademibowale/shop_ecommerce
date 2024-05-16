import React from "react";
import Slider from "../../components/slider/Slider";
import "./Home.scss";
import HomeInfoBox from "./HomeInfoBox";
import { productData } from "../../components/carousel/data";
import ProductCarousel from "../../components/carousel/ProductCarousel"; // Assuming Carousel is used within ProductCarousel

// Remove unused import (if not used elsewhere)
// import { Carousel } from "react-multi-carousel";

const PageHeading = ({ btnText, heading }) => {
  return (
    <>
      <div className="--flex-between">
        <h2 className="--fw-thin">{heading}</h2>
        <button className="--btn">{btnText}</button>
      </div>
      <div className="--hr"></div>
    </>
  );
};

const Home = () => {
  const productItems = productData.map((item, index) => (
    <div key={item.id}>
      <carouselItems
        name={item.name}
        price={item.price}
        url={item.imageurl}
        description={item.description}
      />
    </div>
  ));

  return (
    <>
      <Slider />
      <section>
        <div className="container">
          <div className="home">
            <div className="home__info">
              <h1>Quality Products</h1>
              <p>
                Get access to quality products from only tested and proven brands.
              </p>
            </div>
            <HomeInfoBox />
            <PageHeading btnText={"View More>>>"} heading={"Latest Products"} />
            <ProductCarousel products={productItems} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;