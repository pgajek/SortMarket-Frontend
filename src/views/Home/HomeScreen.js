import React, { useEffect } from "react";
import Nav from "components/organisms/Nav/Nav";
import Footer from "components/organisms/Footer/Footer";
import ProductCard from "components/molecules/ProductCard/ProductCard";
import Slider from "components/organisms/Slider/Slider";
import Cart from "components/organisms/Cart/Cart";
import AddBanner from "components/atoms/AddBanner/AddBanner";
import SearchBar from "components/molecules/SearchBar/SearchBar";
import PaginationBar from "components/molecules/PaginationBar/PaginationBar";
import "./HomeScreen.scss";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "store/actions/productsActions";
const HomeScreen = () => {
  const productsList = useSelector((state) => state.products);
  const { products, loading } = productsList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());

    return () => {};
  }, []);

  return (
    <>
      <Nav />
      <Slider />
      <SearchBar />
      <section className="home__products">
        {loading ? (
          <div>loading</div>
        ) : (
          products.map((item, index) => (
            <ProductCard
              rating={4}
              quantity={item.countInStock}
              unit={item.unit}
              name={item.name}
              price={item.price.priceGross}
              currency={item.price.currency}
              img="assets/img/test.jpg"
            />
          ))
        )}
        <AddBanner />
      </section>
      <PaginationBar />
      <Cart />
      <Footer />
    </>
  );
};

export default HomeScreen;
