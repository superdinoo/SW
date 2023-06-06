import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={style.main}>
        <div>
          <span className={style.logo}>Sky Sweets</span>
        </div>
        <ul className={style.nav}>
          <li>Кабинет</li>
          <li>Контакты</li>
          <li>Про нас</li>
        </ul>
        <div className={style.presentation}>
          <p className={style.textban}>
            <p className={style.sweet}>Импортные сладости</p>
            <p className={style.all}>со всего</p>
            <p className={style.world}>мира!</p>
          </p>
        </div>
      </div>
    </header>
  );
};
export default Header;
