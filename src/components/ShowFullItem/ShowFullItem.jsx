import React, { Component } from "react";
import style from "./ShowFullItem.module.css";

export class ShowFullItem extends Component {
  render() {
    return (
      <div className={style.fullItem}>
        <div>
          <img
            src={"./img/" + this.props.item.img}
            onClick={() => this.props.onShowItem(this.props.item)}
          ></img>
          <h2 className={style.h}>{this.props.item.title}</h2>
          <p className={style.p}>{this.props.item.desc}</p>
          <b className={style.b}>{this.props.item.price}</b>
          <div
            className={style.plas}
            onClick={() => this.props.onAdd(this.props.item)}
          >
            +
          </div>
        </div>
      </div>
    );
  }
}

export default ShowFullItem;
