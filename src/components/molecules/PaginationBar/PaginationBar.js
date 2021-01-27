import React, { useState, useEffect } from "react";
import "./PaginationBar.scss";
import { useSelector, useDispatch } from "react-redux";
import { setProductsOptions, getProducts } from "store/actions/productsActions";
const PaginationBar = () => {
  const { products, loading, productsCount } = useSelector(
    (state) => state.products
  );
  const [per_page, setPerPage] = useState(10);
  const [offset, setOffset] = useState(0);
  const pages = Math.ceil(productsCount / per_page);
  const [activePage, setActivePage] = useState(1);
  const dispatch = useDispatch();
  const [addedCount, setAddedCount] = useState(0);
  const handlePageClick = (e) => {
    const value = e.target.dataset.value;
    setActivePage(value);
    let newOffset;
    newOffset = (value - 1) * 10 + addedCount;
    // if (value < 3) {
    //   newOffset = (value - 1) * 10;
    // } else {
    //   newOffset = (value - 1) * 10 + 2;
    // }
    setOffset(newOffset);
  };
  const handleButtonClick = () => {
    setAddedCount(addedCount + 12);
    setPerPage(per_page + 12);
  };
  useEffect(() => {
    dispatch(setProductsOptions(offset, per_page));
    dispatch(getProducts(offset, per_page));
  }, [offset, per_page]);
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
        {!loading && per_page * activePage - per_page} -
        {!loading && per_page * activePage - per_page + products.length} of{" "}
        {productsCount} results
      </div>
      <div className="paginationBar__pages">
        <span className="paginationBar__title">Page:</span>
        {createPages()}
      </div>
      <button className="btn paginationBar__btn" onClick={handleButtonClick}>
        + 12 more products
      </button>
    </div>
  );
};

export default PaginationBar;
