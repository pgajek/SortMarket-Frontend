import React, { useState, useEffect } from "react";
import "./PaginationBar.scss";
import { useSelector, useDispatch } from "react-redux";
import { setProductsOptions } from "store/actions/productsActions";
const PaginationBar = () => {
  const productsCount = useSelector((state) => state.products.productsCount);
  const [per_page, setPerPage] = useState(2);
  const [offset, setOffset] = useState(0);
  console.log(offset);
  const pages = productsCount / per_page;
  const [activePage, setActivePage] = useState(1);
  const handlePageClick = (e) => {
    const value = e.target.dataset.value;
    setActivePage(value);
    let newOffset;
    if (value < 3) {
      newOffset = (value - 1) * 10;
    } else {
      newOffset = (value - 1) * 10 + 2;
    }
    setOffset(newOffset);
  };
  const createPages = () => {
    let items = [];
    for (let i = 1; i <= pages; i++) {
      items.push(
        <span
          key={i}
          onClick={(e) => handlePageClick(e)}
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
      <div className="paginationBar__results">
        1 - 48 of {productsCount} results
      </div>
      <div className="paginationBar__pages">
        <span className="paginationBar__title">Page:</span>
        {createPages()}
      </div>
      <button className="btn paginationBar__btn">+ 12 more products</button>
    </div>
  );
};

export default PaginationBar;
