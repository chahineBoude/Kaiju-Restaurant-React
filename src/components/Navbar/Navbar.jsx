import React, { useState } from "react";
import { GiHamburgerMenu, GiChopsticks } from "react-icons/gi";
import { MdRamenDining } from "react-icons/md";

import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.kaiju} alt="app-logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__roboto">
          <a href="#home">Home </a>
        </li>
        <li className="p__roboto">
          <a href="#about">About </a>
        </li>
        <li className="p__roboto">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__roboto">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-booking">
        <a href="/" className="p__roboto">
          Book a table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen-overlay flex__center slide-bottom">
            <GiChopsticks
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__roboto">
                <a
                  href="#home"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Home{" "}
                </a>
              </li>
              <li className="p__roboto">
                <a
                  href="#about"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  About{" "}
                </a>
              </li>
              <li className="p__roboto">
                <a
                  href="#menu"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Menu
                </a>
              </li>
              <li className="p__roboto">
                <a
                  href="#contact"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Contact
                </a>
              </li>
              <li
                className="p__roboto"
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <a href="/">Book a table</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
