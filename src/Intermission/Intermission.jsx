import React from "react";
import { images } from "../constants";
import "./Intermission.css";

const Intermission = () => {
  return (
    <div className="app__intermission app__bg flex__center section__padding">
      <div className="app__intermission-image">
        <img src={images.golden_gai} alt="bg-img" />
      </div>
    </div>
  );
};

export default Intermission;
