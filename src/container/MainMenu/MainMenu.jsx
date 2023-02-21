import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";

const MainMenu = () => {
  return (
    <div className="app__specialMenu  section__padding app__bg" id="menu">
      <div className="app__specialMenu-container flex__center section__padding">
        <div className="app__specialMenu-title">
          <SubHeading title="More trendy Bullshit who cares" />
          <h1 className="headtext__oswald"> Explore Our Menu </h1>
        </div>
        <div className="app__specialMenu-menu">
          <div className="app__specialMenu-menu-wb flex__center">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
