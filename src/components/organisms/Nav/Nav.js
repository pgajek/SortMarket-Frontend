import React, { useState } from "react";
import "./nav.scss";
import { ReactComponent as Logo } from "assets/icons/sort2.svg";
import { ReactComponent as User } from "assets/icons/user.svg";
import { ReactComponent as Pointer } from "assets/icons/pointer_arrow.svg";
import { ReactComponent as Cart } from "assets/icons/cart.svg";
import Categories from "assets/data/categories-data";
import LoginPanel from "components/molecules/LoginPanel/LoginPanel";

const Nav = () => {
  const [isOpen, handleBurgerClick] = useState(false);
  const [user, handleCheckUser] = useState(false);
  return (
    <>
      <Logo className="navigation__mobileLogo" />
      <button
        className={
          isOpen
            ? "navigation__hamburgerBtn navigation__hamburgerBtn--active"
            : "navigation__hamburgerBtn"
        }
        onClick={() => handleBurgerClick(!isOpen)}
      >
        <div></div>
      </button>
      <nav className={isOpen ? `navigation navigation--active` : `navigation`}>
        <div className="navigation__mainBar">
          <div className="navigation__logo">
            <a href="" className="navigation__logoLink">
              <Logo className="logo_image" />
            </a>
          </div>
          <ul className="navigation__innerNav">
            <li className="navigation__innerNavItem">
              <a href="#" className="navigation__innerNavLink">
                Strona Domowa <Pointer className="navigation__pointer" />
              </a>
            </li>
            <li className="navigation__innerNavItem">
              <a href="#" className="navigation__innerNavLink">
                O nas
                <Pointer className="navigation__pointer" />
              </a>
            </li>
            <li className="navigation__innerNavItem">
              <a href="#footer" className="navigation__innerNavLink">
                Kontakt
                <Pointer className="navigation__pointer" />
              </a>
            </li>
            <li className="navigation__innerNavItem">
              <a href="" className="navigation__categoriesLink">
                Produkty
                <Pointer className="navigation__pointer" />
              </a>
            </li>
          </ul>
          {!user ? (
            <LoginPanel />
          ) : (
            <div className="navigation__buttons">
              <button className="navigation__userProfile">
                <User />
              </button>
              <button className="btn navigation__basketButton">
                <Cart className="navigation__cart" />
                111PLN
              </button>
            </div>
          )}
        </div>
        <div className="navigation__categories">
          <ul className="navigation__categoriesList">
            {Categories.map((category) => (
              <li
                key={category.name}
                className="navigation__category dropdown"
                aria-haspopup="true"
              >
                <a href="#" className="navigation__link">
                  {category.name}
                </a>
                <ul aria-label="submenu" className="dropdown-content">
                  {category.subCategories.map((item) => (
                    <li key={item} className="navigation__dropdownLi">
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
    </>
  );
};

export default Nav;
