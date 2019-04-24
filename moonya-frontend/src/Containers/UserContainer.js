import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserContainer extends Component {
  render() {
    return (
      <div id="user-container">
        {/* <Link to="/">
          <span> |Landing Page| </span>
        </Link> */}
        <h2>User profile comps here</h2>
        <strong>(only in Menu bar)</strong>
      </div>
    );
  }
}

export default UserContainer;
