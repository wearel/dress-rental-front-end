import React, { Fragment, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { getDelivery } from "../../Redux/Actions/booking.action";
import { useDispatch, useSelector } from "react-redux";
import "./Booking.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function FullWidthGrid() {
  const cart = useSelector((state) => state.cart);

  const booking = useSelector((state) => state.booking);
  const { products } = cart;
  const { productsBooking } = booking;
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getDelivery());
  }, [dispatch]);

  const allDelivery = [
    { nama: "", harga: "" },
    { nama: "JNE -", harga: 10000 },
    { nama: "J&T -", harga: 9000 },
    { nama: "TIKI -", harga: 10000 },
  ];

  const [delivery, setDelivery] = useState();

  let subTotal = "";
  const produkku = products.map((number) => number.price);
  if (produkku.length > 0) {
    subTotal = produkku.reduce((result, number) => result + number);
  }


  let totalPayment = "";
  if (subTotal > 0 && delivery > 0) {
    totalPayment = subTotal + delivery;
  }

  console.log("ini cart", produkku);
  console.log("ini product booking", booking);
  return (
    <Fragment>
      <div className="cont-booking">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <div className="cont-card-booking">
                <h2>List Product</h2>
                <div className="row">
                  {products.length === 0 ? (
                    <h3>Theres no item in your cart</h3>
                  ) : (
                    products.map((product) => (
                      <div className="row">
                        <div className="col-25">
                          <p>{product.nameProduct}</p>
                        </div>
                        <div className="col-75">
                          <p>{product.price}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <Divider />
                <div className="row">
                  <div className="col-25">
                    <p>Total Price</p>
                  </div>
                  <div className="col-75">{subTotal}</div>
                </div>
              </div>
              <Divider />
              <div className="cont-card-booking">
                <h2>Form Address</h2>
                <div className="row">
                  <div className="col-25">
                    <label>Full Name</label>
                  </div>
                  <div className="col-75">
                    <input
                      placeholder="Enter Your Name"
                      type="text"
                      id="fname"
                      name="fullname"
                      className="fill"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label>Phone Number</label>
                  </div>
                  <div className="col-75">
                    <input
                      placeholder="Enter Your Phone Number"
                      type="text"
                      id="fnumber"
                      name="number"
                      className="fill"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label>E-Mail</label>
                  </div>
                  <div className="col-75">
                    <input
                      placeholder="Enter Your E-Mail"
                      type="text"
                      id="fmail"
                      name="email"
                      className="fill"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label for="delivery">Delivery</label>
                  </div>
                  <div className="col-75">
                    <select
                      value={delivery}
                      onChange={(e) => setDelivery(parseInt(e.target.value))}
                      name="delivery"
                      id="delivery"
                    >
                      {allDelivery.map((item) => (
                        <option value={item.harga}>
                          {item.nama} {item.harga}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label for="payment">Payment Method</label>
                  </div>
                  <div className="col-75">
                    <select className="row">
                      {productsBooking.length === 0 ? (
                        <h3>Theres no item in your booking</h3>
                      ) : (
                        productsBooking.map((product) => (
                          <option value={product.nomorRekening}>
                            {product.nameMethod} - {product.nomorRekening}
                          </option>
                        ))
                      )}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label>Address</label>
                  </div>
                  <div className="col-75">
                    <textarea
                      style={{ height: "200px" }}
                      id="address"
                      name="address"
                      placeholder="Enter Your Address"
                    ></textarea>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="cont-card-booking">
                <h2>Total Payment</h2>
                <div className="row">
                  <div className="col-25">
                    <p>SubTotal</p>
                  </div>

                  <div className="col-75">
                    <p>Rp {subTotal}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <p>Shipping Cost</p>
                  </div>
                  <div className="col-75">
                    <p>Rp {delivery}</p>
                  </div>
                </div>
                <Divider />
                <div className="row">
                  <div className="col-25">
                    <p>Total Payment</p>
                  </div>
                  <div className="col-75">
                    <p>Rp {totalPayment}</p>
                  </div>
                </div>
                <Button variant="contained" color="secondary" disableElevation>
                  Booking Now
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Fragment>
  );
}
