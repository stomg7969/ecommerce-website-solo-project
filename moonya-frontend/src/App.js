import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import LandingDisplay from "./Components/LandingDisplay";
import CartContainer from "./Containers/CartContainer";
import UserContainer from "./Containers/UserContainer";

class App extends Component {
  render() {
    return (
      <div id="app-outter-div">
        {/* Always present */}
        <NavBar />
        {/* Cart will always show whether user is logged in or not, but will have restriction if not logged in. */}
        <CartContainer />
        {/* User Container, if not logged in, log in button is present,
        if logged in, log out and profile buttons are present.
        should only exist in NavBar */}
        <Switch>
          <Route path="/user" component={UserContainer} />
          <Route path="/" component={LandingDisplay} />
        </Switch>
      </div>
    );
  }
}

export default App;
