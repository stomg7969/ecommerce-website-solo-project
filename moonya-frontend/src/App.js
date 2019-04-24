import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import landingPicture from "./Assets/moonya moonya-plant-loungewear-girls-boys-darkblue-whitepink-sml.jpg";
import "./App.css";
import NavBar from "./Components/Navbar";
import CartContainer from "./Containers/CartContainer";
import UserContainer from "./Containers/UserContainer";
import ProductContainer from "./Containers/ProductContainer";
import UserInputContainer from "./Containers/UserInputContainer";

function App() {
  return (
    <div className="app-outter-div">
      <div id="landing-page">
        <h1>App Page</h1>
        <img src={landingPicture} alt="moonya landing picture" />
        <p>will have a big picture</p>
      </div>
      // Always present
      <NavBar />
      // Cart will always show whether user is logged in or not, but will have
      // ... restriction if not logged in.
      <CartContainer />
      // User Container, if not logged in, log in button is present, if logged
      // ... in, log out and profile buttons are present.
      <UserContainer />
      <ProductContainer />
      <UserInputContainer />
    </div>
  );
}

export default App;
