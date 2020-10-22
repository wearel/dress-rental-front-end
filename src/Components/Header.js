import React , {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../Assets/Logo.png";
import "./Header.css";


import {getUserInfoAction, userLogout} from  '../Redux/Actions/user.action';
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

  const dataUser = useSelector((state) => state.user)
  console.log('data user', dataUser)

  useEffect(() => {
    dispatch(getUserInfoAction())
  },[dataUser])

  const logoutSuccess = () => {
    console.log("logout");
    dispatch(userLogout(history));

    alert("logout");
    console.log('slesai logoout', dataUser)
  };
 
  
  return (
    <div className="cont-header">
      <AppBar>
        <Toolbar className="appbar">
          <img className="logo" src={Logo} alt="logo" />
          <Typography>
            <Link to="/" style={{ textDecoration: "none" }}>
              <p className="title">Home</p>
            </Link>
          </Typography>
          <Typography>
            <Link to="/detail" style={{ textDecoration: "none" }}>
              <p className="title">Detail</p>
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
          <div className={classes.root}>

             <Button variant="contained" color="secondary">
              { dataUser.data === undefined && dataUser.data !== 0 ? 
              ( 
              <Link to="/login" style={{ textDecoration: "none", color: 'white' }}>
              Login
            </Link>
            )
              : (
                <div onClick={() => logoutSuccess()}  style={{ textDecoration: "none" }}>
                Logout
              </div>
              ) 
            }
            </Button> 
            {/* <Button variant="contained" color="secondary">
              <Link to="/register" style={{ textDecoration: "none" }}>
                Register
              </Link>
            </Button> */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
