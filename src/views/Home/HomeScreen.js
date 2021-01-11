import React from "react";
import Nav from "components/organisms/Nav/Nav";
import Footer from "components/organisms/Footer/Footer";
import ProductCard from "components/molecules/ProductCard/ProductCard";
import Slider from "components/organisms/Slider/Slider";
import Cart from "components/organisms/Cart/Cart";
import AddBanner from "components/atoms/AddBanner/AddBanner";
import SearchBar from "components/molecules/SearchBar/SearchBar";
import PaginationBar from "components/molecules/PaginationBar/PaginationBar";
import "./HomeScreen.scss";
const HomeScreen = () => {
  return (
    <>
      <Nav />
      <Slider />
      <SearchBar />
      <section className="products">
        <ProductCard
          rating={4}
          quantity={7}
          unit="szt"
          name="Fajna cegła"
          price={36.66}
          currency="PLN"
          img="assets/img/test.jpg"
        />
        <ProductCard
          rating={4}
          quantity={7}
          unit="szt"
          name="Fajna cegła"
          price={36.66}
          currency="PLN"
          img="assets/img/test.jpg"
        />
        <ProductCard
          rating={4}
          quantity={7}
          unit="szt"
          name="Fajna cegła"
          price={36.66}
          currency="PLN"
          img="assets/img/test.jpg"
        />

        <ProductCard
          rating={4}
          quantity={7}
          unit="szt"
          name="Fajna cegła"
          price={36.66}
          currency="PLN"
          img="assets/img/test.jpg"
        />
        <ProductCard
          rating={4}
          quantity={7}
          unit="szt"
          name="Fajna cegła"
          price={36.66}
          currency="PLN"
          img="assets/img/test.jpg"
        />
        <ProductCard
          rating={4}
          quantity={7}
          unit="szt"
          name="Fajna cegła"
          price={36.66}
          currency="PLN"
          img="assets/img/test.jpg"
        />
        <AddBanner />
        <ProductCard
          rating={4}
          quantity={7}
          unit="szt"
          name="Fajna cegła"
          price={36.66}
          currency="PLN"
          img="assets/img/test.jpg"
        />
        <ProductCard
          rating={4}
          quantity={7}
          unit="szt"
          name="Fajna cegła"
          price={36.66}
          currency="PLN"
          img="assets/img/test.jpg"
        />
        <ProductCard
          rating={4}
          quantity={7}
          unit="szt"
          name="Fajna cegła"
          price={36.66}
          currency="PLN"
          img="assets/img/test.jpg"
        />
        <ProductCard
          rating={4}
          quantity={7}
          unit="szt"
          name="Fajna cegła"
          price={36.66}
          currency="PLN"
          img="assets/img/test.jpg"
        />
      </section>
      <PaginationBar />
      <Cart />
      <Footer />
    </>
  );
};

export default HomeScreen;
