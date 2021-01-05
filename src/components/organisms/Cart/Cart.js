import React from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__show">
        <CartIcon className="cart__icon" />
      </div>
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
