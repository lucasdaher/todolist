import React from "react";
import "./styles.scss";

const Header = () => {
  return (
    <header>
      <ul className="header__menu">
        <li className="header__menu__option">Organização</li>
        <li className="header__menu__option header__menu__selected">Tarefas</li>
      </ul>
    </header>
  );
};

export default Header;
