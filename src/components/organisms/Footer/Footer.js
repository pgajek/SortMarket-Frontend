import React from "react";
import "./Footer.scss";
import { ReactComponent as FooterImg } from "assets/icons/footer_img.svg";
import { ReactComponent as Letter } from "assets/icons/letter.svg";
import { ReactComponent as Pin } from "assets/icons/pin.svg";
import { ReactComponent as Phone } from "assets/icons/phone.svg";
import Categories from "assets/data/categories-data";
const Footer = () => {
  return (
    <footer className="footer">
      <FooterImg className="footer__img" />
      <div className="footer__categories">
        <h3 className="footer__header">Kategorie</h3>
        <ul className="footer__categoriesList">
          {Categories.map((cat) => (
            <li className="footer__category">
              <a href="#" className="footer__categoryLink">
                {cat.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer__lists">
        <ul className="footer__contactList">
          <h3 className="footer__header">Kontakt</h3>
          <li className="footer__contactOption">
            <Letter className="footer__contactOptionIcon" />
            <span className="footer__contactSpan">biuro@sortmarket.pl</span>
          </li>
          <li className="footer__contactOption">
            <Phone className="footer__contactOptionIcon" />
            <span className="footer__contactSpan">biuro@sortmarket.pl</span>
          </li>
          <li className="footer__contactOption">
            <Pin className="footer__contactOptionIcon" />
            <div className="footer__adressBlock">
              <span className="footer__contactSpan">ul. Karosek 27e</span>
              <span className="footer__contactSpan">32-700 Bochnia</span>
            </div>
          </li>
        </ul>
        <ul className="footer__rulesList">
          <h3 className="footer__header">Regulamin</h3>
          <li className="footer__listElement">
            <a href="#" className="footer__listLink">
              Polityka prywatności
            </a>
          </li>
          <li className="footer__listElement">
            <a href="#" className="footer__listLink">
              Regulamin
            </a>
          </li>
          <li className="footer__listElement">
            <a className="footer__listLink">***** ***</a>
          </li>
        </ul>
        <ul className="footer__deliveryList">
          <h3 className="footer__header">Dostawa</h3>
          <li className="footer__listElement">
            <a href="#" className="footer__listLink">
              Duże gabaryty
            </a>
          </li>
          <li className="footer__listElement">
            <a href="#" className="footer__listLink">
              Małe paczki
            </a>
          </li>
          <li className="footer__listElement">
            <a href="#" className="footer__listLink">
              Dowóz ciężarówką
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__mapContainer">
        <h3 className="footer__header">Nie możesz do nas trafić?</h3>
        <p className="footer__text">Spróbuj z Google</p>
        <div className="footer__googleMap">Mapa</div>
      </div>
      <div className="footer__copyright">Copyright © 2020 Patryk Gajek</div>
    </footer>
  );
};

export default Footer;
