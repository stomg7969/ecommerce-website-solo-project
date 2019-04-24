import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserContainer extends Component {
  render() {
    return (
      <div id="user-container">
        {/* <Link to="/">
          <span> |Landing Page| </span>
        </Link> */}
        <h2>User related comps here (only in Menu bar)</h2>
      </div>
    );
  }
}

export default UserContainer;
