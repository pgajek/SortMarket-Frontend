import React, { useState } from "react";
import "./PaginationBar.scss";

const PaginationBar = () => {
  const pages = 7;
  const [activePage, setActivePage] = useState("2");
  const createPages = () => {
    let items = [];
    for (let i = 1; i <= pages; i++) {
      items.push(
        <span
          key={i}
          onClick={(e) => setActivePage(e.target.dataset.value)}
          data-value={`${i}`}
          className={`paginationBar__page ${
            parseInt(activePage) == i ? "paginationBar__page--active" : ""
          }`}
        >
          {i}
        </span>
      );
    }
    return items;
  };
  return (
    <div className="paginationBar">
      <div className="paginationBar__results">1 - 48 of 1 836 results</div>
      <div className="paginationBar__pages">
        <span className="paginationBar__title">Page:</span>
        {createPages()}
      </div>
      <button className="btn paginationBar__btn">+ 12 more products</button>
    </div>
  );
};

export default PaginationBar;
