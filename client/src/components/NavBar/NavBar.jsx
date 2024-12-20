import React from "react";
import { useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import style from "./NavBar.module.scss";
import logo from "/img/logo2.png";

import { IconLanding } from "../../assets/CountryIcons";

const Navbar = () => {
  // const navigate = useNavigate();

  const listRef = useRef(null);   // creates a reference to a DOM element

  // function to handle the click event for the navigation menu
  const handleOnClick = () => {
    listRef.current.classList.toggle(style.visible); // toggles the visibility of the menu by adding or removing the .visible class
  };

  return (
    <nav className={style.navbar}>
      <NavLink to="/home">
        <div className={style.logoContainer}>
          <img className={style.img} src={logo} alt="Logo" />
          <h2 className={style.logoName}> Travelling around the world</h2>
        </div>
      </NavLink>
      <div className={style.btnsContainer}>
        <ul ref={listRef} className={style.list}>
          <li>
            <NavLink onClick={handleOnClick} className={style.btn} to="/home">
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink onClick={handleOnClick} className={style.btn} to="/quiz">
              Quiz
            </NavLink>
          </li> */}
          <li>
            <NavLink onClick={handleOnClick} className={style.btn} to="/form">
              Create Activity
            </NavLink>
          </li>
          <li>
            <NavLink onClick={handleOnClick} className={style.btn} to="/about">
              About
            </NavLink>
          </li>
          <li>
            {/* <a href='#' onClick={() => navigate(-1)} className={style.btn}>Back</a> */}
            <NavLink onClick={handleOnClick} to="/">
              <IconLanding />
            </NavLink>
          </li>
        </ul>
        <div className={style.containerMenu}>
          <a onClick={handleOnClick} href="#">
            <IconLanding />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
