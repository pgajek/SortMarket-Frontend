import React from 'react';
import './Footer.scss';
import { ReactComponent as FooterImg } from 'assets/icons/footer_img.svg';
import { ReactComponent as Letter } from 'assets/icons/letter.svg';
import { ReactComponent as Pin } from 'assets/icons/pin.svg';
import { ReactComponent as Phone } from 'assets/icons/phone.svg';
import Categories from 'assets/data/categories-data';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <FooterImg className="footer__img" />
      <div className="footer__categories">
        <h3 className="footer__header">Kategorie</h3>
        <ul className="footer__categoriesList">
          {Categories.map((cat) => (
            <li key={cat.name} className="footer__category">
              <Link
                to={{
                  pathname: `/products/${cat.name}`,
                  search: `?sort=${cat.name}`,
                  state: { fromDashboard: true },
                }}
                className="footer__categoryLink">
                {cat.name}
              </Link>
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
        <div className="footer__googleMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.8726279814573!2d20.419560216140518!3d49.976247179412745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47163b3a50ef4a7b%3A0x5cfcdf05f09c8390!2sKarosek%2027E%2C%2032-700%20Bochnia!5e0!3m2!1spl!2spl!4v1608731326648!5m2!1spl!2spl"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"></iframe>
        </div>
      </div>
      <div className="footer__copyright">Copyright © 2020 Patryk Gajek</div>
    </footer>
  );
};

export default Footer;
