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
            <div className="cartView__field">
              <label htmlFor="name" className="cartView__label">
                *Imie:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="cartView__input"
              />
            </div>
            <div className="cartView__field">
              <label htmlFor="surname" className="cartView__label">
                *Nazwisko:
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                className="cartView__input"
              />
            </div>
            <div className="cartView__field">
              <label htmlFor="number" className="cartView__label">
                *Numer telefonu:
              </label>
              <input
                type="text"
                id="number"
                name="number"
                className="cartView__input"
                inputmode="tel"
              />
            </div>
            <div className="cartView__field">
              <label htmlFor="number" className="cartView__label">
                *E-mail:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="cartView__input"
                inputmode="email"
              />
            </div>
            <div className="cartView__field">
              <label htmlFor="city" className="cartView__label">
                *Miejscowość:
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="cartView__input"
              />
            </div>
            <div className="cartView__field">
              <label htmlFor="adress" className="cartView__label">
                *Adress:
              </label>
              <input
                type="text"
                id="adress"
                name="adress"
                className="cartView__input"
              />
            </div>
            <div className="cartView__field">
              <label htmlFor="postalCode" className="cartView__label">
                *Kod pocztowy:
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                className="cartView__input"
              />
            </div>
          </div>
          <div className="cartView__box cartView__shippingMethod">
            <h3 className="cartView__header">Metoda wysyłki:</h3>
            <div className="cartView__radioField">
              <input
                name="kurier"
                id="kurier"
                type="radio"
                className="cartView__radio"
              />
              <label htmlFor="kurier" className="cartView__label">
                Kurier{" "}
                <span className="cartView__shipmentPrice">(19.99 PLN)</span>
              </label>
            </div>
            <div className="cartView__radioField">
              <input
                name="dostawa"
                id="dostawa"
                type="radio"
                className="cartView__radio"
              />
              <label htmlFor="dostawa" className="cartView__label">
                Dostawa do klienta{" "}
                <span className="cartView__shipmentPrice">(19.99 PLN)</span>
              </label>
            </div>
            <div className="cartView__radioField">
              <input
                name="odbior"
                id="odbior"
                type="radio"
                className="cartView__radio"
              />
              <label htmlFor="odbior" className="cartView__label">
                Odbiór na miejscu{" "}
                <span className="cartView__shipmentPrice">(0 PLN)</span>
              </label>
            </div>
          </div>
          <div className="cartView__box cartView__paymentMethod">
            <h3 className="cartView__header">Metoda płatności</h3>
            <div className="cartView__radioField">
              <input
                name="namiejscu"
                id="namiejscu"
                type="radio"
                className="cartView__radio"
              />
              <label htmlFor="namiejscu" className="cartView__label">
                Na miejscu
              </label>
            </div>
            <div className="cartView__radioField">
              <input
                name="przelew"
                id="przelew"
                type="radio"
                className="cartView__radio"
              />
              <label htmlFor="przelew" className="cartView__label">
                Przelew
              </label>
            </div>
            <div className="cartView__radioField">
              <input
                name="kartą"
                id="kartą"
                type="radio"
                className="cartView__radio"
              />
              <label htmlFor="kartą" className="cartView__label">
                Płatność kartą
              </label>
            </div>
          </div>
          <div className="cartView__box cartView__message">
            <h3 className="cartView__header">Wiadomość:</h3>
            <label htmlFor="wiadomosc" className="cartView__label">
              Dodatkowe uwagi:
            </label>
            <textarea
              name="wiadomosc"
              id="wiadomosc"
              cols="30"
              rows="10"
              className="cartView__textarea"
            ></textarea>
          </div>
          <div className="cartView__box cartView__copy">
            <span>Copyright © 2020 petrbilek.com</span>
          </div>
        </form>
        <div className="cartView__box cartView__summary">
          <h3 className="cartView__header">Podsumowanie</h3>
          <div className="cartView__summaryContainer">
            <div className="cartView__summaryField">
              <span className="cartView__summaryName .catView__summaryLeft">
                Cegła nie fajna
              </span>
              <span className="cartView__summaryPrice .cartView__summaryRight">
                36.99 PLN
              </span>
            </div>
            <div className="cartView__summaryField">
              <span className="cartView__summaryName cartView__summaryLeft">
                Cegła fajna
              </span>
              <span className="cartView__summaryPrice cartView__summaryRight">
                26.99 PLN
              </span>
            </div>
          </div>
          <div className="cartView__summaryContainer">
            <span className=" cartView__summaryLeft">Metoda płatności</span>
            <span className="cartView__summaryRight  cartView__method">
              Chosen method
            </span>
          </div>
          <div className="cartView__summaryContainer">
            <span className=" cartView__summaryLeft">Metoda wysyłki</span>
            <span className="cartView__summaryRight cartView__method">
              Chosen method
            </span>
          </div>
          <div className="cartView__summaryContainer">
            <div className="cartView__summaryField">
              <span className="cartView__summaryName">Razem netto </span>
              <span className="cartView__summaryPrice cartView__priceNett">
                36.99 PLN
              </span>
            </div>
            <div className="cartView__summaryField">
              <span className="cartView__summaryName">Razem brutto</span>
              <span className="cartView__summaryPrice cartView__priceGross">
                36.99 PLN
              </span>
            </div>
          </div>
          <button className="btn cartView__summaryBtn">
            Przejdz do płatnosci
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductScreen;
