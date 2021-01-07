import React from "react";
import "./AddBanner.scss";

const AddBanner = () => {
  return (
    <div className="addBanner">
      <h2 className="addBanner__header">SortMarket - twój market</h2>
      <p className="addBanner__text">
        Adobe XD Kit used for building eCommerce experience. Allowing simply
        build eCommerce layout without breaking any design barriers.
      </p>
      <a href="" className="addBanner__link btn">
        Dowiedz się więcej
      </a>
    </div>
  );
};

export default AddBanner;
