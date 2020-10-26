import React from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Cart.css";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const { products } = cart;

  return (
    <div className="cont-cart">
      <h1>Your Product Cart</h1>
      {products.length === 0 ? (
        <h3>Theres no item in your cart</h3>
      ) : (
        products.map((product) => (
          <div className="cont-cart-two">
            <List className="test">
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="product" src={product.imgUrl} />
                </ListItemAvatar>
                <ListItemText
                  primary={product.nameProduct}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                        {product.price}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          </div>
        ))
      )}
      {!localStorage.getItem("token") ? (
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="secondary">
            Booking
          </Button>
        </Link>
      ) : (
        <Link to="/booking" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="secondary">
            Booking
          </Button>
        </Link>
      )}
    </div>
  );
}

export default Cart;
