import React, { useState } from "react";
import "./Category.scss";

const Category = ({ name, quantity }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`products__category ${active ? "category--active" : ""}`}
      data-name={name}
      onClick={() => setActive(!active)}
    >
      <p
        htmlFor="categoryName"
        className="products__name products__categoryName"
      >
        {name}
      </p>
      <span className="products__howMany">{quantity}</span>
    </div>
  );
};

export default Category;
