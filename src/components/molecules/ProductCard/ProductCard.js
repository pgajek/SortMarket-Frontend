import React, { useState } from "react";
import "./ProductCard.scss";
import { ReactComponent as Star } from "assets/icons/star.svg";

const ProductCard = ({ rating, quantity, unit, name, price, currency }) => {
  const createSelectItems = () => {
    let items = [];
    for (let i = 1; i <= quantity; i++) {
      items.push(<option value={`${i}`}>{`${i} ${unit}`}</option>);
    }
    return items;
  };

  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="card">
      <div className="card__img">
        <img src="assets/img/test.jpg" />
      </div>
      <h2 className="card__productName">{name}</h2>
      <span className="card__productPrice">{`${price} ${currency}`}</span>
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
          {createSelectItems()}
        </select>
        <button className="btn card__btn">Do koszyka</button>
      </form>
    </div>
  );
};

export default ProductCard;
