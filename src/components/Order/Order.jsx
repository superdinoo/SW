import React, { Component } from "react";
import style from "./Order.module.css";
import { FaTrash } from "react-icons/fa";

export class Order extends Component {
  render() {
    return (
      <div className={style.items}>
        <div className={style.item}>
          <img src={"./img/" + this.props.item.img}></img>
          <h2 className={style.h}>{this.props.item.title}</h2>
          <b className={style.b}>{this.props.item.price}</b>
          <FaTrash
            className={style.delet}
            onClick={() => this.props.onDelete(this.props.item.id)}
          />
        </div>
      </div>
    );
  }
}

export default Order;
