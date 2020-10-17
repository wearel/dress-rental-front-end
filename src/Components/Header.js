import React from "react";
// import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import "fontsource-roboto";

// Styles Css
import "./Header.css";

function Header() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography>Home</Typography>
          <Typography>Product</Typography>
          <Typography>About Us</Typography>
          <Button>Login</Button>
          <Button>Register</Button>
        </Toolbar>
      </AppBar>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul> */}
    </div>
  );
}

export default Header;
