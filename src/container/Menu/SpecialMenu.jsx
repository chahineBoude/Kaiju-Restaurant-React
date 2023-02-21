import React, { useState } from "react";
import { SubHeading, MenuItem } from "../../components";

import "./SpecialMenu.css";
import { images, data } from "../../constants";
import { MenuSection } from "../../components/MenuSection/MenuSection";

const SpecialMenu = () => {
  const [picture, setPicture] = useState("img 1");
  const [slide1, setSlide1] = useState(false);
  const [slide2, setSlide2] = useState(false);

  return (
    <div className="app__specialMenu  section__padding app__bg" id="menu">
      <div className="app__specialMenu-container flex__center section__padding">
        <div className="app__specialMenu-title">
          <SubHeading title="More trendy Bullshit who cares" />
          <h1 className="headtext__oswald"> Explore Our Menu </h1>
        </div>
        <div className="app__specialMenu-menu">
          <div className="app__specialMenu-menu-section  ">
            {data.menu_page.map((page, index = 1) => (
              <MenuSection
                key={index}
                index={index}
                tag={page.tag}
                title={page.title}
                desc={page.description}
              />
            ))}
          </div>
          {/* <div className="app__specialMenu-menu-wb flex__center">
            <p className="app_specialMenu-menu-heading">BEST HITS</p>
            <div className="app__specialMenu-menu-items">
              {data.food.map((food, index) => (
                <MenuItem
                  key={food.title + index}
                  title={food.title}
                  price={food.price}
                  tags={food.tags}
                />
              ))}
            </div>
          </div>
          <div className="app__specialMenu-menu-picture">
            <img
              className="app__specialMenu-menu-picture-img1"
              src={images.karaage}
              alt="menu_img"
            />
            <img
              className="app__specialMenu-menu-picture-img2"
              src={images.ramune}
              alt="menu_img"
            />
          </div>
          <div className="app__specialMenu-menu-picture-smallscreen">
            {picture === "img 1" && (
              <img
                className={`app__specialMenu-menu-picture-smallscreen-img ${
                  slide1 ? "slide-left" : ""
                }`}
                src={images.karaage}
                id="img1"
                alt="menu_img1"
              />
            )}
            {picture === "img 2" && (
              <img
                src={images.ramune}
                className={`${slide2 ? "slide-left" : ""}`}
                alt="menu_img2"
              />
            )}
            <div className="app__specialMenu-menu-picture-smallscreen-overlay">
              <img
                src={images.bg}
                alt="img_overlay"
                onClick={() => {
                  if (picture === "img 1") {
                    setPicture("img 2");
                    setSlide2(true);
                    setSlide1(false);
                  } else {
                    setPicture("img 1");
                    setSlide1(true);
                    setSlide2(false);
                  }
                }}
              />
            </div>
          </div>

          <div className="app__specialMenu-menu-cocktails flex__center">
            <p className="app_specialMenu-menu-heading">DRINKS</p>
            <div className="app__specialMenu-menu-items">
              {data.drinks.map((drink, index) => (
                <MenuItem
                  key={drink.title + index}
                  title={drink.title}
                  price={drink.price}
                  tags={drink.tags}
                />
              ))}
            </div>
          </div> */}
        </div>
        <div style={{ marginTop: "15px" }}>
          <button type="button" className="custom__button">
            {" "}
            View Full Menu{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
