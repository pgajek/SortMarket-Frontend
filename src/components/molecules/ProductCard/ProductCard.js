import React from "react";
import "./ProductCard.scss";
import { ReactComponent as Star } from "assets/icons/star.svg";

const ProductCard = ({
  rating,
  quantity,
  unit,
  name,
  price,
  currency,
  img,
}) => {
  const stars = [1, 2, 3, 4, 5];
  const createSelectItems = () => {
    let items = [];
    for (let i = 1; i <= quantity; i++) {
      items.push(<option key={i} value={`${i}`}>{`${i} ${unit}`}</option>);
    }
    return items;
  };

  return (
    <div className="card">
      <div className="card__img">
        <img src={img} />
      </div>
      <h2 className="card__productName">{name}</h2>
      <span className="card__productPrice">{`${price} ${currency}`}</span>
      <div className="card__rating">
        {stars.map((star, index) => (
          <Star
            key={index}
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
