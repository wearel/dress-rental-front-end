import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Logo from "../Assets/Logo.png";
import "./Header.css";

import { userLogout } from "../Redux/Actions/user.action";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Header() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();

  const dataUser = useSelector((state) => state.user);
  console.log("data user", dataUser);

  // useEffect(() => {
  //   dispatch(getUserInfoAction());
  //   // eslint-disable-next-line
  // }, [dispatch, dataUser]);

  const logoutSuccess = () => {
    console.log("logout");
    dispatch(userLogout(history));
    localStorage.removeItem("token");

    alert("logout");
    console.log("slesai logoout", dataUser);
  };

  return (
    <div className="cont-header">
      <AppBar>
        <Toolbar className="appbar">
          <img className="logo" src={Logo} alt="logo" />
          <Typography>
            <Link to="/" className="title" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </Typography>
          <Typography>
            <Link
              to="/product"
              className="title"
              style={{ textDecoration: "none" }}
            >
              Product
            </Link>
          </Typography>
          <Typography>
            <Link
              to="/about"
              className="title"
              style={{ textDecoration: "none" }}
            >
              About
            </Link>
          </Typography>
          <Typography>
            <Link
              to="/contact"
              className="title"
              style={{ textDecoration: "none" }}
            >
              Contact
            </Link>
          </Typography>
          <Typography>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <ShoppingCartIcon />
            </Link>
          </Typography>
          <Typography>
            <Link to="/cart" style={{ textDecoration: "none" }}></Link>
            {/* <Link to="/cart" style={{ textDecoration: "none", width: '300px' }}>
              My Cart
            </Link> */}
          </Typography>
          <div className={classes.root}>
            <Button variant="contained" color="secondary">
              {!localStorage.getItem("token") ? (
                <Link to="/login" style={{ textDecoration: "none" }}>
                  Login
                </Link>
              ) : (
                <div
                  onClick={() => logoutSuccess()}
                  style={{ textDecoration: "none" }}
                >
                  Logout
                </div>
              )}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
