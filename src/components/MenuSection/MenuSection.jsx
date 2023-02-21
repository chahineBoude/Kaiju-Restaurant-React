import React, { Fragment, useEffect, useState } from "react";
import { images } from "../../constants";
import "./MenuSection.css";

export const MenuSection = ({ index, tag, title, desc }) => {
  /*  var img = document.getElementById("myImg");

  if (tag == "food") {
    img.src = images.karaage;
  } else {
    img.src = images.ramune;
  } */
  const img =
    tag === "food"
      ? images.karaage
      : tag === "drink"
      ? images.ramune
      : images.dango;
  return (
    <div className="app__menuSection ">
      {index % 2 === 0 ? (
        <>
          <div className={`app__menuSection-header-${tag}`} id="h1">
            <h1 className="headtext__oswald">{title}</h1>
            <p className="p__roboto">{desc}</p>
          </div>
          <div className={`app__menuSection-image-${tag}`}>
            <img id="myImg" alt="menuSectionImage" src={img} />
          </div>
        </>
      ) : (
        <>
          <div className={`app__menuSection-image-${tag}`}>
            <img id="myImg" alt="menuSectionImage" src={img} />
          </div>
          <div className={`app__menuSection-header-${tag}`}>
            <h1 className="headtext__oswald">{title}</h1>
            <p className="p__roboto">{desc}</p>
          </div>
          <div className="app__menuSection-image-smallscreen">
            <div className={`app__menuSection-header-sm-${tag}`} id="h1">
              <h1 className="headtext__oswald">{title}</h1>
              <p className="p__roboto">{desc}</p>
            </div>
            <div className={`app__menuSection-image-sm-${tag}`}>
              <img id="myImg" alt="menuSectionImage" src={img} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
