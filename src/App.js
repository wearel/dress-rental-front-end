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
import Contact from "./Pages/Contact/Contact";
import Detail from "./Pages/Product/ProductDetail";
import Booking from "./Pages/Payment/Booking";
import Modal from "./Pages/Payment/ModalSuccess";
import Cart from "./Pages/Payment/Cart";

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
          <Route path="/detail-product/:id">
            <Detail />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/modal">
            <Modal />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/cart">
            <Cart />
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
