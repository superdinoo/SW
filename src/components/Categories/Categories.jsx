import React, { Component } from "react";
import style from "./Categories.module.css";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          id: 1,
          key: "all",
          name: "Все",
          img: "1.jpg",
        },
        {
          id: 2,
          key: "Печенья",
          name: "Печенья",
          img: "4.jpeg",
        },
        {
          id: 3,
          key: "Газировка",
          name: "Газировка",
          img: "5.jpg",
        },
        {
          id: 4,
          key: "Чипсы",
          name: "Чипсы",
          img: "8.jpg",
        },
        {
          id: 5,
          key: "Конфеты",
          name: "Конфеты",
          img: "9.jpg",
        },
      ],
    };
  }
  render() {
    return (
      <div className={style.categories}>
        {this.state.categories.map((el) => (
          <div
            className={style.cs}
            key={el.key}
            onClick={() => this.props.chooseCategory(el.key)}
          >
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
