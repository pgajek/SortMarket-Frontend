import React, { useState } from "react";
import "./Brand.scss";

const Brand = ({ name, quantity }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`products__brand ${active ? "brand--active" : ""}`}
      onClick={() => setActive(!active)}
    >
      <input
        type="checkbox"
        className="products__checkbox"
        name={name}
        id={name}
        checked={active}
      />
      <label
        htmlFor={name}
        className="products__name"
        onClick={() => setActive(!active)}
      >
        {name}
      </label>
      <span className="products__howMany">{quantity}</span>
    </div>
  );
};

export default Brand;
