import React from "react";
import Nav from "components/organisms/Nav/Nav";
import Footer from "components/organisms/Footer/Footer";
import Cart from "components/organisms/Cart/Cart";
import ProductCard from "components/molecules/ProductCard/ProductCard";
import AddBanner from "components/atoms/AddBanner/AddBanner";
import SearchBar from "components/molecules/SearchBar/SearchBar";
import PaginationBar from "components/molecules/PaginationBar/PaginationBar";
import { ReactComponent as Star } from "assets/icons/star.svg";
import "./ProductsScreen.scss";
import CatData from "assets/data/categories-data";
import Brand from "components/atoms/Brand/Brand";
import Category from "components/atoms/Category/Category";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "store/actions/productsActions";
const ProductsScreen = ({ match }) => {
  const category = CatData.find((item) => item.id == match.params.id);
  return (
    <>
      <Nav />
      <h3 className="products__header">{category.name.replace("&", "/")}</h3>
      <div className="products__container">
        <form className="products__filters ">
          <div className="products__brands products__filterBox">
            <h4 className="products__filterHeader">Marka</h4>
            <div className="products__items">
              <Brand name="Brand" quantity="112" />
              <Brand name="Brand" quantity="112" />
              <Brand name="Brand" quantity="112" />
              <Brand name="Brand" quantity="112" />
              <Brand name="Brand" quantity="112" />
            </div>
          </div>
          <div className="products__categories products__filterBox">
            <h4 className="products__filterHeader">Kategorie</h4>
            <div className="products__items">
              {category.subCategories.map((cat) => (
                <Category key={cat} name={cat} quantity="112" />
              ))}
            </div>
          </div>
          <div className="products__ratings products__filterBox">
            <h4 className="products__filterHeader">Oceny</h4>
            <div className="products__items">
              <div className="products__ratingOption">
                <input
                  type="checkbox"
                  className="products__checkbox"
                  id="rating"
                  name="rating"
                />
                <label htmlFor="rating" className="products__name">
                  <Star className="yellow star" />
                  <Star className="yellow star" />
                  <Star className="yellow star" />
                  <Star className="yellow star" />
                  <Star className="yellow star" />
                </label>
              </div>
              <div className="products__ratingOption">
                <input type="checkbox" className="products__checkbox" />
                <label htmlFor="rating" className="products__name">
                  <Star className="yellow star" />
                  <Star className="yellow star" />
                  <Star className="yellow star" />
                  <Star className="yellow star" />
                  <Star className="star" />
                </label>
              </div>
              <div className="products__ratingOption">
                <input type="checkbox" className="products__checkbox" />
                <label htmlFor="rating" className="products__name">
                  <Star className="yellow star" />
                  <Star className="yellow star" />
                  <Star className="yellow star" />
                  <Star className="star" />
                  <Star className="star" />
                </label>
              </div>
              <div className="products__ratingOption">
                <input type="checkbox" className="products__checkbox" />
                <label htmlFor="rating" className="products__name">
                  <Star className="yellow star" />
                  <Star className="yellow star" />
                  <Star className="star" />
                  <Star className="star" />
                  <Star className="star" />
                </label>
              </div>
              <div className="products__ratingOption">
                <input type="checkbox" className="products__checkbox" />
                <label htmlFor="rating" className="products__name">
                  <Star className="yellow star" />
                  <Star className="star" />
                  <Star className="star" />
                  <Star className="star" />
                  <Star className="star" />
                </label>
              </div>
            </div>
          </div>
          <div className="products__prices products__filterBox">
            <h4 className="products__filterHeader">Cena</h4>
            <div className="products__items">
              <div className="products__priceRange">
                <label htmlFor="min" className="products__priceLabel">
                  <input
                    className="products__priceInput"
                    type="number"
                    placeholder="0 PLN"
                  />
                </label>
                <span className="products__priceDash"></span>
                <label htmlFor="min" className="products__priceLabel">
                  <input
                    className="products__priceInput"
                    type="number"
                    placeholder="110 PLN"
                  />
                </label>
              </div>
            </div>
          </div>
          <button className="btn products__formBtn">Resetuj filtry</button>
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
      </div>
      <PaginationBar />

      <Cart />
      <Footer />
    </>
  );
};

export default ProductsScreen;
