import React, { useState } from "react";
import "./ProductCard.scss";
import { ReactComponent as Star } from "assets/icons/star.svg";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "store/actions/cartActions";

const ProductCard = ({
  id,
  rating,
  quantity,
  unit,
  name,
  price,
  currency,
  img,
}) => {
  const [selectedQty, setSelectedQty] = useState(1);
  const dispatch = useDispatch();
  const stars = [1, 2, 3, 4, 5];
  const createSelectItems = () => {
    let items = [];
    for (let i = 1; i <= quantity; i++) {
      items.push(<option key={i} value={`${i}`}>{`${i} ${unit}`}</option>);
    }
    return items;
  };
  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log(selectedQty);
    dispatch(addToCart(id, selectedQty));
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
        <select
          name="quantity"
          id="quantity"
          className="card__quantity"
          onChange={(e) => setSelectedQty(parseInt(e.target.value))}
          value={selectedQty}
        >
          {createSelectItems()}
        </select>
        <button className="btn card__btn" onClick={(e) => handleAddToCart(e)}>
          Do koszyka
        </button>
      </form>
    </div>
  );
};

export default ProductCard;
