import React, { useState } from "react";
import style from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import Order from "../Order/Order";

const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));
  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className={style.summa}>Сумма: {summa}р</p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className={style.not}>
      <h2 className={style.h}>Товаров нет</h2>
    </div>
  );
};

const Header = (props) => {
  let [cartOpen, setCartOpen] = useState(false);

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
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`${style.shopButton} ${cartOpen && style.active}`}
        />

        {cartOpen && (
          <div className={style.shopCart}>
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}

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
