import React from "react";
import Nav from "components/organisms/Nav/Nav";
import Footer from "components/organisms/Footer/Footer";
import ProductCard from "components/molecules/ProductCard/ProductCard";
import { ReactComponent as Star } from "assets/icons/star.svg";
import Cart from "components/organisms/Cart/Cart";
import "./ProductScreen.scss";

const ProductScreen = () => {
  const stars = [1, 2, 3, 4, 5];
  const rating = 4;
  return (
    <>
      <Nav />
      <div className="productScreen__productContainer">
        <div className="productScreen__productImages">
          <img
            src="/assets/img/test.jpg"
            alt=""
            className="productScreen__mainImage"
          />
          <div className="productScreen__smallPictures">
            <img
              src="/assets/img/test.jpg"
              alt=""
              className="productScreen__image"
            />
            <img
              src="/assets/img/test.jpg"
              alt=""
              className="productScreen__image"
            />
            <img
              src="/assets/img/test.jpg"
              alt=""
              className="productScreen__image"
            />
          </div>
        </div>
        <h3 className="productScreen__productName">Fajna Cegła</h3>
        <div className="productScreen__rating">
          {stars.map((star) => (
            <Star
              key={star}
              className={`card__star ${
                rating >= star ? "card__star--active" : ""
              }`}
            />
          ))}
        </div>
        <a href="#" className="productScreen__reviews">
          183 reviews
        </a>
        <span className="productScreen__productPrice">39.99 PLN </span>
        <p className="productScreen__productDescription">
          Space for product description. It is mostly used for understanding
          what product do or about is. This description has heavy impact on the
          users! Also great for SEO, to boost your store sales.
        </p>
        <form className="productScreen__form">
          <label htmlFor="quantity" className="productScreen__selectLabel">
            Ilosc
          </label>
          <select
            name="quantity"
            id="quantity"
            className="productScreen__quantity"
          >
            <option value="1">1</option>
            {/* {createSelectItems()} */}
          </select>
          <label htmlFor="size" className="productScreen__selectLabel">
            Rozmiar
          </label>
          <select name="size" id="size" className="productScreen__quantity">
            <option value="1">1</option>
            {/* {createSelectItems()} */}
          </select>
          <button className="btn productScreen__btn">Do koszyka</button>
        </form>
      </div>

      <h4 className="productScreen__relatedHeader">Related products</h4>

      <Cart />
      <div className="productScreen__relatedProducts">
        <ProductCard
          rating={4}
          quantity={7}
          unit="szt"
          name="Fajna cegła"
          price={36.66}
          currency="PLN"
          img="/assets/img/test.jpg"
        />
        <ProductCard
          rating={4}
          quantity={7}
          unit="szt"
          name="Fajna cegła"
          price={36.66}
          currency="PLN"
          img="/assets/img/test.jpg"
        />
        <ProductCard
          rating={4}
          quantity={7}
          unit="szt"
          name="Fajna cegła"
          price={36.66}
          currency="PLN"
          img="/assets/img/test.jpg"
        />
        <ProductCard
          rating={4}
          quantity={7}
          unit="szt"
          name="Fajna cegła"
          price={36.66}
          currency="PLN"
          img="/assets/img/test.jpg"
        />
      </div>
      <Footer />
    </>
  );
};

export default ProductScreen;
