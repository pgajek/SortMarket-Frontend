import React from "react";
import Nav from "components/organisms/Nav/Nav";
import Footer from "components/organisms/Footer/Footer";
import Cart from "components/organisms/Cart/Cart";
import ProductCard from "components/molecules/ProductCard/ProductCard";
import AddBanner from "components/atoms/AddBanner/AddBanner";
import SearchBar from "components/molecules/SearchBar/SearchBar";
import PaginationBar from "components/molecules/PaginationBar/PaginationBar";
import "./ProductsScreen.scss";
const ProductsScreen = () => {
  return (
    <>
      <Nav />
      <h3 className="products__header">Nazwa kategorii</h3>
      <form className="products__filters ">
        <div className="products__brands products__filterBox">
          <h4 className="products__filterHeader">Brand</h4>
          <div className="products__brand">
            <input type="checkbox" className="products__checkbox" />
            <label htmlFor="brandName" className="products__name">
              Brand
            </label>
            <span className="products__howMany">112</span>
          </div>
          <div className="products__brand">
            <input type="checkbox" className="products__checkbox" />
            <label htmlFor="brandName" className="products__name">
              Brand
            </label>
            <span className="products__howMany">112</span>
          </div>
          <div className="products__brand">
            <input type="checkbox" className="products__checkbox" />
            <label htmlFor="brandName" className="products__name">
              Brand
            </label>
            <span className="products__howMany">112</span>
          </div>
          <div className="products__brand">
            <input type="checkbox" className="products__checkbox" />
            <label htmlFor="brandName" className="products__name">
              Brand
            </label>
            <span className="products__howMany">112</span>
          </div>
        </div>
        <div className="products__categories products__filterBox">
          <h4 className="products__filterHeader">Brand</h4>
          <div className="products__category">
            <p
              htmlFor="categoryName"
              className="products__name products__categoryName"
            >
              Category
            </p>
          </div>
        </div>
        <div className="products__categories products__ratingBox">
          <h4 className="products__filterHeader">Brand</h4>
          <div className="products__ratingOption">
            <input type="checkbox" className="products__checkbox" />
            <label htmlFor="rating" className="products__name">
              5
            </label>
          </div>
          <div className="products__ratingOption">
            <input type="checkbox" className="products__checkbox" />
            <label htmlFor="rating" className="products__name">
              4
            </label>
          </div>
          <div className="products__ratingOption">
            <input type="checkbox" className="products__checkbox" />
            <label htmlFor="rating" className="products__name">
              3
            </label>
          </div>
          <div className="products__ratingOption">
            <input type="checkbox" className="products__checkbox" />
            <label htmlFor="rating" className="products__name">
              2
            </label>
          </div>
          <div className="products__ratingOption">
            <input type="checkbox" className="products__checkbox" />
            <label htmlFor="rating" className="products__name">
              1
            </label>
          </div>
        </div>
        <div className="products__categories products__ratingBox">
          <h4 className="products__filterHeader">Price</h4>
          <div className="products__ratingOption">
            <label htmlFor="min" className="products__priceLabel">
              <input
                className="products__priceInput"
                type="number"
                placeholder="0 PLN"
              />
            </label>
            <label htmlFor="min" className="products__priceLabel">
              <input
                className="products__priceInput"
                type="number"
                placeholder="110 PLN"
              />
            </label>
          </div>
        </div>
        <button className="btn products__formBtn">Resetuj</button>
      </form>
      <section className="products__products">
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

export default ProductsScreen;
