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
      </div>
    );
  }
}

export default CartContainer;
