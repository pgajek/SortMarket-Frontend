import React, { useEffect, useState } from "react";
import Nav from "components/organisms/Nav/Nav";
import Footer from "components/organisms/Footer/Footer";
import { ReactComponent as Heart } from "assets/icons/heartIcon.svg";
import { ReactComponent as Basket } from "assets/icons/basketIcon.svg";
import "./CartView.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "store/actions/cartActions";
import { useForm } from "react-hook-form";
import regex from "helpers/regex";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);

const ProductScreen = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const [cartPriceGross, setCartPriceGross] = useState(0);
  const [cartPriceNett, setCartPriceNett] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const formValues = watch();
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
    setCartPriceGross(priceGross);
    setCartPriceNett(priceNett);
    console.log(formValues);
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
    const {
      adress,
      city,
      name,
      deliveryOption,
      email,
      number,
      paymentOption,
      postalCode,
      surname,
      message,
    } = values;
    const data = {
      adress,
      city,
      name,
      deliveryOption,
      email,
      number,
      paymentOption,
      postalCode,
      surname,
      message,
      cartItems,
      deliveryPrice,
    };
    console.log(data);
  };
  useEffect(() => {
    countCartPrice();
  }, [cartItems]);

  const handlePaymentButtonClick = (event) => {
    handleStripe();
  };
  const handleStripe = async (event) => {
    const stripe = await stripePromise;

    const response = await fetch(
      "http://localhost:9000/api/v1/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartItems: cartItems,
          deliveryMethod: formValues.deliveryOption,
          deliveryPrice: deliveryPrice,
          customerEmail: formValues.email,
        }),
      }
    );

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
    }
  };

  return (
    <>
      <Nav />
      <form className="cartView" onSubmit={handleSubmit(onSubmit)}>
        <div className="cartView__form">
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
                  <button type="button" className="cartView__btn btn">
                    <Heart />
                  </button>
                  <button
                    type="button"
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
                className={`cartView__input ${
                  errors.name && "cartView__input--error"
                }`}
                {...register("name", { required: true, minLength: 3 })}
              />
              {errors.name?.type === "requiered" && (
                <span className="cartView__error">To pole jest wymagane</span>
              )}
              {errors.name?.type === "minLength" && (
                <span className="cartView__error">Minimum 3 znaki.</span>
              )}
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
                {...register("surname", { required: true, minLength: 3 })}
              />
              {errors.surname?.type === "requiered" && (
                <span className="cartView__error">To pole jest wymagane</span>
              )}
              {errors.surname?.type === "minLength" && (
                <span className="cartView__error">Minimum 3 znaki.</span>
              )}
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
                {...register("number", {
                  required: true,
                  minLength: 9,
                  valueAsNumber: true,
                })}
              />
              {errors.number?.type === "requiered" && (
                <span className="cartView__error">To pole jest wymagane</span>
              )}
              {errors.number?.type === "minLength" && (
                <span className="cartView__error">Minimum 9 znaków.</span>
              )}
            </div>
            <div className="cartView__field">
              <label htmlFor="email" className="cartView__label">
                *E-mail:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="cartView__input"
                inputMode="email"
                {...register("email", { required: true, pattern: regex.email })}
              />
              {errors.email?.type === "requiered" && (
                <span className="cartView__error">To pole jest wymagane</span>
              )}
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
                {...register("city", { required: true, minLength: 3 })}
              />
              {errors.city?.type === "requiered" && (
                <span className="cartView__error">To pole jest wymagane</span>
              )}
            </div>
            <div className="cartView__field">
              <label htmlFor="adress" className="cartView__label">
                *Adres:
              </label>
              <input
                type="text"
                id="adress"
                name="adress"
                className="cartView__input"
                {...register("adress", { required: true, minLength: 3 })}
              />
              {errors.email?.type === "requiered" && (
                <span className="cartView__error">To pole jest wymagane</span>
              )}
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
                {...register("postalCode")}
              />
              {errors.postalCode?.type === "requiered" && (
                <span className="cartView__error">To pole jest wymagane</span>
              )}
            </div>
            <div className="cartView__field">
              <label htmlFor="nip" className="cartView__label">
                *NIP:
              </label>
              <input
                type="text"
                id="nip"
                name="nip"
                className="cartView__input"
                {...register("nip")}
              />
              {errors.nip?.type === "requiered" && (
                <span className="cartView__error">To pole jest wymagane</span>
              )}
            </div>
            <div className="cartView__field">
              <label htmlFor="companyName" className="cartView__label">
                *Nazwa firmy:
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="cartView__input"
                {...register("companyName")}
              />
              {errors.companyName?.type === "requiered" && (
                <span className="cartView__error">To pole jest wymagane</span>
              )}
            </div>
          </div>
          <div className="cartView__box cartView__shippingMethod">
            <h3 className="cartView__header">Metoda wysyłki:</h3>
            <div className="cartView__radioField">
              <input
                name="deliveryOption"
                id="kurier"
                type="radio"
                value="Kurier"
                data-price={19.99}
                onChange={(e) => setDeliveryPrice(e.target.dataset.price)}
                className="cartView__radio"
                {...register("deliveryOption", { required: true })}
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
                value="Dostawa do klienta"
                data-price={29.99}
                onChange={(e) => setDeliveryPrice(e.target.dataset.price)}
                {...register("deliveryOption", { required: true })}
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
                data-price={0}
                value="Odbiór na miejscu"
                onChange={(e) => setDeliveryPrice(e.target.dataset.price)}
                {...register("deliveryOption", { required: true })}
              />
              <label htmlFor="odbior" className="cartView__label">
                Odbiór na miejscu{" "}
                <span className="cartView__shipmentPrice">(0 PLN)</span>
              </label>
            </div>
            {errors.deliveryOption?.type === "requiered" && (
              <span className="cartView__error">To pole jest wymagane</span>
            )}
          </div>
          <div className="cartView__box cartView__paymentMethod">
            <h3 className="cartView__header">Metoda płatności</h3>
            <div className="cartView__radioField">
              <input
                name="paymentOption"
                id="namiejscu"
                type="radio"
                className="cartView__radio"
                value="Na miejscu"
                {...register("paymentOption", { required: true })}
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
                value="Przelew"
                {...register("paymentOption", { required: true })}
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
                value="Karta"
                {...register("paymentOption", { required: true })}
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
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="cartView__textarea"
              {...register("message")}
            ></textarea>
          </div>
          <div className="cartView__box cartView__copy">
            <span>Copyright © 2020 petrbilek.com</span>
          </div>
        </div>
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
              {formValues.paymentOption}
            </span>
          </div>
          <div className="cartView__summaryContainer">
            <span className=" cartView__summaryLeft">Metoda wysyłki</span>
            <span className="cartView__summaryRight cartView__method">
              {formValues.deliveryOption}
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
          <button
            className="btn cartView__summaryBtn"
            type="submit"
            role="link"
            onClick={handlePaymentButtonClick}
          >
            Przejdz do płatnosci
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default ProductScreen;
