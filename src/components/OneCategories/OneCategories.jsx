import React, { Component } from "react";
import style from "./OneCategories.module.css";

export class OneCategories extends Component {
  render() {
    return (
      <main className={style.al}>
        <div className={style.one}>
          <img src={"./img/" + this.props.categorie.img}></img>
          <h2 className={style.titl}>{this.props.categorie.name}</h2>
        </div>
      </main>
    );
  }
}

export default OneCategories;
