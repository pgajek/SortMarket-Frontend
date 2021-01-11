import React, { useState } from "react";
import { ReactComponent as Loop } from "assets/icons/loop.svg";
import "./SearchBar.scss";
const SearchBar = () => {
  const [search, setSearch] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="searchBar">
      <label htmlFor="search" className="searchBar__label"></label>
      <input
        onChange={(e) => setSearch(e.target.value)}
        className="searchBar__input"
        type="text"
        id="search"
        name="search"
        placeholder="Search for..."
      />
      <button className="searchBar__btn" onClick={(e) => handleClick(e)}>
        <Loop className="searchBar__loop" />
      </button>
    </div>
  );
};

export default SearchBar;
