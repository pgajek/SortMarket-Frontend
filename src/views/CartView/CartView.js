import React, { useEffect, useState } from "react";
import Nav from "components/organisms/Nav/Nav";
import Footer from "components/organisms/Footer/Footer";
import { ReactComponent as Heart } from "assets/icons/heartIcon.svg";
import { ReactComponent as Basket } from "assets/icons/basketIcon.svg";
import "./CartView.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "store/actions/cartActions";
import { useForm } from "react-hook-form";

const ProductScreen = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [cartPriceGross, setCartPriceGross] = useState(0);
  const [cartPriceNett, setCartPriceNett] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);

  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const handleRemoveBtnClick = (id) => {
    dispatch(removeFromCart(id));
  };

  const countCartPrice = () => {
    let priceGross = 0;
    let priceNett = 0;
    cartItems.forEach((item) => {
      priceGross +=
        parseInt(item.product.price.priceGross) * parseInt(item.quantity);
      priceNett +=
        parseInt(item.product.price.priceNett) * parseInt(item.quantity);
    });
    console.log(priceGross);
    setCartPriceGross(priceGross);
    setCartPriceNett(priceNett);
  };
  const createSelectItems = (quantity, unit) => {
    let items = [];
    for (let i = 1; i <= quantity; i++) {
      items.push(<option key={i} value={`${i}`}>{`${i} ${unit}`}</option>);
    }
    return items;
  };
  const updateProductQuantity = (e, id) => {
    dispatch(updateQuantity(id, e.target.value));
    countCartPrice();
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  useEffect(() => {
    countCartPrice();
  }, [cartItems]);

  return (
    <>
      <Nav />
      <div className="cartView">
        <form className="cartView__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="cartView__box cartView__cart">
            <h3 className="cartView__header">Koszyk</h3>
            {cartItems.map((item) => (
              <div className="cartView__product" key={item._id} id={item._id}>
                <div className="cartView__imgBox">
                  <img src="assets/img/test.jpg" alt="" />
                </div>
                <p className="cartView__productName">{item.product.name}</p>
                <span className="cartView__productPrice">
                  {item.product.price.priceGross} {item.product.price.currency}
                </span>
                <select
                  name={`${item.product.name}Qty`}
                  id={`${item.product.name}Qty`}
                  className="cartView__productQuantity"
                  value={item.quantity}
                  onChange={(e) => updateProductQuantity(e, item.product._id)}
                >
                  {createSelectItems(
                    item.product.countInStock,
                    item.product.unit
                  )}
                </select>
                <div className="cartView__btns">
                  <button className="cartView__btn btn">
                    <Heart />
                  </button>
                  <button
                    className="cartView__btn btn"
                    onClick={() => handleRemoveBtnClick(item.product._id)}
                  >
                    <Basket />
                  </button>
                </div>
              </div>
            ))}
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
                inputMode="tel"
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
                inputMode="email"
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
                name="deliveryOption"
                id="kurier"
                type="radio"
                value={19.99}
                onChange={(e) => setDeliveryPrice(e.target.value)}
                className="cartView__radio"
              />
              <label htmlFor="kurier" className="cartView__label">
                Kurier{" "}
                <span className="cartView__shipmentPrice">(19.99 PLN)</span>
              </label>
            </div>
            <div className="cartView__radioField">
              <input
                name="deliveryOption"
                id="dostawa"
                type="radio"
                className="cartView__radio"
                value={29.99}
                onChange={(e) => setDeliveryPrice(e.target.value)}
              />
              <label htmlFor="dostawa" className="cartView__label">
                Dostawa do klienta{" "}
                <span className="cartView__shipmentPrice">(19.99 PLN)</span>
              </label>
            </div>
            <div className="cartView__radioField">
              <input
                name="deliveryOption"
                id="odbior"
                type="radio"
                className="cartView__radio"
                value={0}
                onChange={(e) => setDeliveryPrice(e.target.value)}
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
                name="paymentOption"
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
                name="paymentOption"
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
                name="paymentOption"
                id="karta"
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
            {cartItems.map((item) => (
              <div className="cartView__summaryField">
                <span className="cartView__summaryName .catView__summaryLeft">
                  {item.product.name}
                </span>
                <span className="cartView__summaryQuantity">
                  {item.quantity}
                </span>
                <span className="cartView__summaryPrice">
                  {item.product.price.priceGross * item.quantity}{" "}
                  {item.product.price.currency}
                </span>
              </div>
            ))}
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
                {cartPriceNett}{" "}
                {cartItems.length > 0 && cartItems[0].product.price.currency}
              </span>
            </div>
            <div className="cartView__summaryField">
              <span className="cartView__summaryName">Razem brutto</span>
              <span className="cartView__summaryPrice cartView__priceGross">
                {cartPriceGross}{" "}
                {cartItems.length > 0 && cartItems[0].product.price.currency}
              </span>
            </div>
          </div>
          <div className="cartView__finalPrice">
            {cartPriceGross + parseInt(deliveryPrice)}{" "}
            {cartItems.length > 0 && cartItems[0].product.price.currency}
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
