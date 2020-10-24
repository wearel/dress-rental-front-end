import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const { products } = cart;
  const dispatch = useDispatch();

  console.log(products);

  return (
    <div className="cont-cart">
      <h1>Ini halaman cart</h1>
      {products.length === 0 ? (
        <h3>Theres no item in your cart</h3>
      ) : (
        products.map((product) => (
          <div className="row">
            <div className="col-25">
              <p>{product.name}</p>
            </div>
            <div className="col-75">
              <p>{product.price}</p>
            </div>
          </div>
        ))
      )}
      <Link to="/booking" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="secondary">
          Checkout
        </Button>
      </Link>
    </div>
  );
}

export default Cart;
