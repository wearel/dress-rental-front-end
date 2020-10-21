import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Component
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Page
import Home from "./Pages/Home/HomePage";
import Product from "./Pages/Product/Product";
import About from "./Pages/About/About";
import Login from "./Pages/user/Login";
import Register from "./Pages/user/Register";
import Detail from "./Pages/Product/ProductDetail";
import Booking from "./Pages/Payment/Booking";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
