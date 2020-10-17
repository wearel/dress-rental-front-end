import React from "react";
// React Router DOM
import { Link } from "react-router-dom";
// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// Assets
import Logo from "../Assets/Logo.png";
// CSS
import "./Header.css";

function Header() {
  return (
    <div className="container">
      <AppBar>
        <Toolbar className="appbar">
          <img className="logo" src={Logo} alt="logo" />
          <Typography className="title">
            <Link to="/" style={{ textDecoration: "none" }}>
              <p className="title">Home</p>
            </Link>
          </Typography>
          <Typography>
            <Link to="/product" style={{ textDecoration: "none" }}>
              <p className="title">Product</p>
            </Link>
          </Typography>
          <Typography>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <p className="title">About Us</p>
            </Link>
          </Typography>
          <Button variant="contained" color="secondary">
            <Link to="/login" style={{ textDecoration: "none" }}>
              <p className="userTitle">Login</p>
            </Link>
          </Button>
          <Button variant="contained" color="secondary">
            <Link to="/register" style={{ textDecoration: "none" }}>
              <p className="userTitle">Register</p>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
