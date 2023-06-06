import React, { Component } from "react";

export class items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map((el) => (
          <h1>{el.title}</h1>
        ))}
      </main>
    );
  }
}

export default items;
