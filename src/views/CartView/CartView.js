import React from "react";
import Nav from "components/organisms/Nav/Nav";
import Footer from "components/organisms/Footer/Footer";
import { ReactComponent as Heart } from "assets/icons/heartIcon.svg";
import { ReactComponent as Basket } from "assets/icons/basketIcon.svg";
import "./CartView.scss";

const ProductScreen = () => {
  return (
    <>
      <Nav />
      <div className="cartView">
        <form className="cartView__form">
          <div className="cartView__box cartView__cart">
            <h3 className="cartView__header">Koszyk</h3>
            <div className="cartView__product">
              <div className="cartView__imgBox">
                <img src="assets/img/test.jpg" alt="" />
              </div>
              <p className="cartView__productName">Cegla z cegłolandii</p>
              <span className="cartView__productPrice">39.99 PLN</span>
              <select
                name="quantity"
                id="quantity"
                className="cartView__productQuantity"
              >
                <option value="1">1 szt</option>
                <option value="2">2 szt</option>
                <option value="3">3 szt</option>
              </select>
              <div className="cartView__btns">
                <button className="cartView__btn btn">
                  <Heart />
                </button>
                <button className="cartView__btn btn">
                  <Basket />
                </button>
              </div>
            </div>
            <div className="cartView__product">
              <div className="cartView__imgBox">
                <img src="assets/img/test.jpg" alt="" />
              </div>
              <p className="cartView__productName">Cegla z cegłolandii</p>
              <span className="cartView__productPrice">39.99 PLN</span>
              <select
                name="quantity"
                id="quantity"
                className="cartView__productQuantity"
              >
                <option value="1">1 szt</option>
                <option value="2">2 szt</option>
                <option value="3">3 szt</option>
              </select>
              <div className="cartView__btns">
                <button className="cartView__btn btn">
                  <Heart />
                </button>
                <button className="cartView__btn btn">
                  <Basket />
                </button>
              </div>
            </div>
            <div className="cartView__product">
              <div className="cartView__imgBox">
                <img src="assets/img/test.jpg" alt="" />
              </div>
              <p className="cartView__productName">Cegla z cegłolandii</p>
              <span className="cartView__productPrice">39.99 PLN</span>
              <select
                name="quantity"
                id="quantity"
                className="cartView__productQuantity"
              >
                <option value="1">1 szt</option>
                <option value="2">2 szt</option>
                <option value="3">3 szt</option>
              </select>
              <div className="cartView__btns">
                <button className="cartView__btn btn">
                  <Heart />
                </button>
                <button className="cartView__btn btn">
                  <Basket />
                </button>
              </div>
            </div>
          </div>
          <div className="cartView__box cartView__shippingDetails">
            <h3 className="cartView__header">Szczegóły wysyłki:</h3>
          </div>
          <div className="cartView__box cartView__shippingMethod">
            <h3 className="cartView__header">Metoda wysyłki:</h3>
          </div>
          <div className="cartView__box cartView__paymentMethod">
            <h3 className="cartView__header">Metoda płatności</h3>
          </div>
          <div className="cartView__box cartView__message">
            <h3 className="cartView__header">Wiadomość:</h3>
          </div>
          <div className="cartView__box cartView__copy">
            Copyright © 2020 petrbilek.com
          </div>
        </form>
        <div className="cartView__box cartView__summary">
          <h3 className="cartView__header">Podsumowanie</h3>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductScreen;
