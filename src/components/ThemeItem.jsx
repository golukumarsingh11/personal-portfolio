import React from "react";

const ThemeItem = ({ color, img, changecolor }) => {
  return (
    <img
      src={img}
      alt=""
      className="theme__img"
      onClick={() => {
        changecolor(color);
      }}
    />
  );
};

export default ThemeItem;
