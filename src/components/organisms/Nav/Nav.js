import React from "react";
import "./nav.scss";
import { ReactComponent as Logo } from "../../../assets/icons/sort2.svg";
import { ReactComponent as DropArrow } from "../../../assets/icons/dropDownArrow.svg";
import Categories from "../../../assets/data/nav-data";
const Nav = () => {
  return (
    <nav className="navigation">
      <div className="navigation__mainBar">
        <div className="navigation__logo">
          <Logo className="logo_image" />
        </div>
        <ul className="navigation__innerNav">
          <li className="navigation__innerNavItem">
            <a href="#" className="navigation__innerNavLink">
              Strona Domowa
            </a>
          </li>
          <li className="navigation__innerNavItem">
            <a href="#" className="navigation__innerNavLink">
              O nas
            </a>
          </li>
          <li className="navigation__innerNavItem">
            <a href="#footer" className="navigation__innerNavLink">
              Kontakt
            </a>
          </li>
        </ul>
        <form className="navigation__loginPanel">
          <div className="navigation__panelField">
            <label for="login"></label>
            <input type="text" name="login" id="login" placeholder="Login" />
          </div>
          <div className="navigation__panelField">
            <label for="password"></label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Hasło"
            />
          </div>
          <button className="navigation__panelButton btn">Zaloguj</button>
        </form>
        <div className="navigation__buttons">
          <button className="navigation__usrProfile">0</button>
          <button className="btn navigation__basketButton">111PLN</button>
        </div>
      </div>
      <div className="navigation__categories">
        <ul className="navigation__categoriesList">
          {Categories.map((category) => (
            <li className="navigation__category dropdown" aria-haspopup="true">
              <a href="#" className="navigation__link">
                {category.name}
              </a>
              <DropArrow className="dropdown-icon" />
              <ul aria-label="submenu" className="dropdown-content">
                {category.subCategories.map((item) => (
                  <li className="navigation__dropdownLi">
                    <a href="#" className="navigation__dropdownLink">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
