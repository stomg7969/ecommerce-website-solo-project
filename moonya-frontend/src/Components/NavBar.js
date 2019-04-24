import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div id="menu">
        {/* <Link to="/">
          <span> |Landing Page| </span>
        </Link> */}
        <h2>Menu Bar here (top left)</h2>
      </div>
    );
  }
}

export default NavBar;
