import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../redux/action";
import { useTranslation } from 'react-i18next';

import '../static/css/navbar.css';
import ReactSwitch from "react-switch";

import {ThemeContext} from '../App';

function Navbar() {
  const { t, i18n } = useTranslation();
  const state = useSelector((state) => state.handleCart);
  const loginState = useSelector((state) => state.authReducer);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const firstName = loginState.isSignedIn ? userInfo.find(user => user.id === loginState.userId).firstName : '';
  const userCartState = state.filter(item => item.userId === loginState.userId);

  const dispatch = useDispatch();
  const setLogoutState = () => {
    dispatch(logout());
  };

  const [isEnActive, setIsEnActive] = useState(true);
  const [isVnActive, setIsVnActive] = useState(false);

  const {theme, toggleTheme} = useContext(ThemeContext);

  const pathName = window.location.pathname;

  const [isHomeActive, setIsHomeActive] = useState(pathName === '/' ? true : false);
  const [isAboutActive, setIsAboutActive] = useState(pathName === '/about' ? true : false);
  const [isContactActive, setIsContactActive] = useState(pathName === '/contact' ? true : false);

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
    if (lang === 'en') {
      setIsEnActive(true);
      setIsVnActive(false);
    } else {
      setIsEnActive(false);
      setIsVnActive(true);
    }
  }

  const changeTab = (tab) => {
    if(tab === 'home') {
      setIsHomeActive(true);
      setIsAboutActive(false);
      setIsContactActive(false);
    } else if(tab === 'about') {
      setIsHomeActive(false);
      setIsAboutActive(true);
      setIsContactActive(false);
    } else {
      setIsHomeActive(false);
      setIsAboutActive(false);
      setIsContactActive(true);
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/" onClick={() => changeTab('home')}>
            {t('Header.AutumnCollection')}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${isHomeActive ? 'active' : ''}`} aria-current="page" to="/" onClick={() => changeTab('home')}>
                  {t('Header.Home')}
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isAboutActive ? 'active' : ''}`} to="/about" onClick={() => changeTab('about')}>
                  {t('Header.About')}
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isContactActive ? 'active' : ''}`} to="/contact" onClick={() => changeTab('contact')}>
                  {t('Header.Contact')}
                </Link>
              </li>
            </ul>
            <div className="switch mr-35">
              <i className="fa fa-sun-o" aria-hidden="true"></i>
              <ReactSwitch className="react-switch" onChange={toggleTheme} checked={theme === 'dark'}/>
              <i className="fa fa-moon-o" aria-hidden="true"></i>
            </div>
            <section className="language-switcher d-flex align-items-center mr-35">
              <div className={`language-switcher-button ${isEnActive ? 'active' : ''}`} onClick={() => handleClick('en')}>EN</div>
              <div className="language-switcher-line ml-12"></div>
              <div className={`language-switcher-button ml-12 ${isVnActive ? 'active' : ''}`} onClick={() => handleClick('vn')}>VN</div>
            </section>
            <div className="buttons d-flex align-items-center">
              {loginState.isSignedIn ? (
              <>
                <span className="me-2">{t('Header.Welcome')} <span className="fw-bold">{firstName}</span></span>
                <button className="btn btn-outline-dark" onClick={() => setLogoutState()}>
                  <i className="fa fa-sign-out me-1"></i> {t('Header.Logout')}
                </button>
                <Link to="/cart" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-shopping-cart me-1"></i> {t('Header.Cart')}({userCartState.length}
                  )
                </Link>
              </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-outline-dark">
                    <i className="fa fa-sign-in me-1"></i> {t('Header.Login')}
                  </Link>
                  <Link to="/register" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-user-plus me-1"></i> {t('Header.Register')}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
