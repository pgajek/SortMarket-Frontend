import React from "react";
import Nav from "components/organisms/Nav/Nav";
import Footer from "components/organisms/Footer/Footer";
import ProductCard from "components/molecules/ProductCard/ProductCard";
import Slider from "components/organisms/Slider/Slider";
import Cart from "components/organisms/Cart/Cart";
const HomeScreen = () => {
  return (
    <>
      <Nav />
      <Slider />
      {/* <ProductCard
        rating={4}
        quantity={7}
        unit="szt"
        name="Fajna cegła"
        price={36.66}
        currency="PLN"
      /> */}
      <Cart />
      <Footer />
    </>
  );
};

export default HomeScreen;
