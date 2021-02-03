import React, { useEffect, useState } from "react";
import Nav from "components/organisms/Nav/Nav";
import Footer from "components/organisms/Footer/Footer";
import ProductCard from "components/molecules/ProductCard/ProductCard";
import { ReactComponent as Star } from "assets/icons/star.svg";
import Cart from "components/organisms/Cart/Cart";
import "./ProductScreen.scss";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "store/actions/productsActions";
import { addToCart } from "store/actions/cartActions";

const ProductScreen = ({ match }) => {
  const stars = [1, 2, 3, 4, 5];
  const rating = 4;
  const id = match.params.id;

  const { loading, activeProduct } = useSelector((state) => state.products);
  const state = useSelector((state) => state.products);
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const createSelectItems = (qty, unit) => {
    let items = [];
    for (let i = 1; i <= qty; i++) {
      items.push(<option key={i} value={`${i}`}>{`${i} ${unit}`}</option>);
    }
    return items;
  };
  const handleButtonClick = (e) => {
    e.preventDefault();

    dispatch(addToCart(id, quantity));
  };
  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  return (
    <>
      <Nav />
      {loading ? (
        "loading"
      ) : (
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
          <h3 className="productScreen__productName">
            {activeProduct[0].name}
          </h3>
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
          <span className="productScreen__productPrice">
            {activeProduct[0].price.priceGross}{" "}
            {activeProduct[0].price.currency}
          </span>
          <p className="productScreen__productDescription">
            {activeProduct[0].description}
          </p>
          <form className="productScreen__form">
            <label htmlFor="quantity" className="productScreen__selectLabel">
              Ilosc
            </label>
            <select
              name="quantity"
              id="quantity"
              className="productScreen__quantity"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            >
              {createSelectItems(
                activeProduct[0].countInStock,
                activeProduct[0].unit
              )}
            </select>
            <label htmlFor="size" className="productScreen__selectLabel">
              Rozmiar
            </label>
            <select name="size" id="size" className="productScreen__quantity">
              <option value="1">1</option>
              {/* {createSelectItems()} */}
            </select>
            <button
              className="btn productScreen__btn"
              onClick={(e) => handleButtonClick(e)}
            >
              Do koszyka
            </button>
          </form>
        </div>
      )}

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
