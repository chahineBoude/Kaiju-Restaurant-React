import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuItem">
    <div className="app__menuItem-head">
      <div className="app__menuItem-name">
        <p className="p__oswald" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>
      <div className="app__menuItem-dash" />
      <div className="app__menuItem-price">
        <p className="p__oswald">{price}</p>
      </div>
    </div>
    <div className="app__menuItem-tags">
      <p className="p__roboto" style={{ color: "#AAA" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
