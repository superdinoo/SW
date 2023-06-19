import React from "react";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <footer>
      <p className={style.txt}>
        Sky Sweets - Уникальный магазин импортных сладостей.
        <p className={style.text}>Все права защищены &copy;</p>
      </p>
    </footer>
  );
};
export default Footer;
