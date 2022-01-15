import React from "react";
import "./Header.css";

function Header() {
  const addChange = () => {
    let someClass = document.querySelector(".header__right");
    someClass.classList.toggle("change");

    let menu = document.querySelector(".header__rightItemsContainer");
    menu.classList.toggle("open");
  };

  return (
    <div className="header">
      <div className="header__component">
        <div className="header__left">
          <h1>Mausam</h1>
        </div>
        <div className="header__right" onClick={addChange}>
          <div className="header__rightTop"></div>
          <div className="header__rightMiddle"></div>
          <div className="header__rightBottom"></div>
        </div>
      </div>
      <div className="header__rightItemsContainer">
        <div className="header__rightItems">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Map</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Weather</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
