import React, { useState, useEffect } from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";
import { useRef } from "react";
import useComponentSize from "@rehooks/component-size";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "store/actions/cartActions";

const Cart = () => {
  const [hide, handleHide] = useState(false);
  const [cartPrice, setCartPrice] = useState(0);
  let ref = useRef(null);
  const dispatch = useDispatch();
  let size = useComponentSize(ref);
  const { cartItems } = useSelector((state) => state.cart);

  const countCartPrice = () => {
    let price = 0;
    cartItems.forEach((item) => {
      price +=
        parseInt(item.product.price.priceGross) * parseInt(item.quantity);
    });

    setCartPrice(price);
  };
  const handleRemoveBtnClick = (id) => {
    dispatch(removeFromCart(id));
  };
  useEffect(() => {
    countCartPrice();
  }, [cartItems]);
  return (
    <div
      ref={ref}
      className="cart"
      style={
        hide
          ? {
              transform: `translate(-${size.width}px,-50%)`,
            }
          : { transform: `translate(0, -50%)` }
      }
    >
      <button
        className={!hide ? "cart__show" : "cart__show cart__show--active"}
        onClick={() => handleHide(!hide)}
      >
        <CartIcon className="cart__icon" />
      </button>
      <h3 className="cart__header">Koszyk</h3>
      <div className="cart__field cart__tableNames">
        <span className="cart__name">Nazwa</span>
        <span className="cart__quantity">Ilosc</span>
        <span className="cart__productPrice">Cena</span>
      </div>
      <ul className="cart__products">
        {cartItems.length === 0 ? (
          <div>Cart is empty</div>
        ) : (
          cartItems.map((item) => (
            <li
              className="cart__field cart__product"
              key={item.product._id}
              id={item.product._id}
            >
              <span className="cart__name">{item.product.name}</span>
              <span className="cart__quantity">{item.quantity}</span>
              <span className="cart__productPrice">
                {item.product.price.priceGross * item.quantity}{" "}
                {item.product.price.currency}
              </span>
              <button
                className="btn cart__removeBtn"
                onClick={() => handleRemoveBtnClick(item.product._id)}
              >
                X
              </button>
            </li>
          ))
        )}
      </ul>
      <div className="cart__summary">
        <p className="cart__sumName">Razem:</p>
        <div className="cart__sum">
          {cartPrice}{" "}
          {cartItems.length > 0 && cartItems[0].product.price.currency}
        </div>
      </div>
      <Link to="/cart" className="btn cart__btn">
        Kup Teraz
      </Link>
    </div>
  );
};

export default Cart;
