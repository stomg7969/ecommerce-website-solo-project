import React, { Component } from "react";
import { Link } from "react-router-dom";

class CartContainer extends Component {
  render() {
    return (
      <div id="cart">
        {/* <Link to="/">
          <span> |Landing Page| </span>
        </Link> */}
        <h2>Cart here (top right)</h2>
        <div>
          <p>show picked up items here</p>
        </div>
        <div>
          <p>total amount, shipping info slection, and more</p>
        </div>
      </div>
    );
  }
}

export default CartContainer;
