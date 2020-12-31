import React, { useState } from "react";
import "./ProductCard.scss";
import { ReactComponent as Star } from "assets/icons/star.svg";

const ProductCard = () => {
  const rating = 4;
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="card">
      <div className="card__img">
        <img src="assets/img/test.jpg" alt="" />
      </div>
      <h2 className="card__productName">Fajna cegła</h2>
      <span className="card__productPrice">36.99 PLN</span>
      <div className="card__rating">
        {stars.map((star) => (
          <Star
            key={star}
            className={`card__star ${
              rating >= star ? "card__star--active" : ""
            }`}
          />
        ))}
      </div>
      <a href="#" className="card__reviews">
        183 reviews
      </a>
      <form className="card__form">
        <select name="quantity" id="quantity" className="card__quantity">
          <option value="1">1 pcs</option>
          <option value="2">2 pcs</option>
          <option value="3">3 pcs</option>
          <option value="4">4 pcs</option>
          <option value="5">5 pcs</option>
        </select>
        <button className="btn card__btn">Do koszyka</button>
      </form>
    </div>
  );
};

export default ProductCard;
