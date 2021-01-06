import React, { useState } from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";
import { useRef } from "react";
import useComponentSize from "@rehooks/component-size";

const Cart = () => {
  const [hide, handleHide] = useState(false);
  let ref = useRef(null);
  let size = useComponentSize(ref);
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
        <li className="cart__field cart__product">
          <span className="cart__name">Fajnna cegla</span>
          <span className="cart__quantity">1</span>
          <span className="cart__productPrice">36.99 PLN</span>
        </li>
        <li className="cart__field cart__product">
          <span className="cart__name">Fajnna cegla</span>
          <span className="cart__quantity">1</span>
          <span className="cart__productPrice">0.00 PLN</span>
        </li>
      </ul>
      <div className="cart__summary">
        <p className="cart__sumName">Razem:</p>
        <div className="cart__sum">36.99 PLN</div>
      </div>
      <Link to="/cart" className="btn cart__btn">
        Kup Teraz
      </Link>
    </div>
  );
};

export default Cart;
