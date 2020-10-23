import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import "./Booking.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <Fragment>
      <div className="cont-booking">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <div className="cont-card-booking">
                <h2>List Product</h2>
                <div className="row">
                  <div className="col-25">
                    <p>Javanese Dress</p>
                  </div>
                  <div className="col-75">
                    <p>Rp 20.000.000</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <p>Sundanese Dress</p>
                  </div>
                  <div className="col-75">
                    <p>Rp 15.000.000</p>
                  </div>
                </div>
                <Divider />
                <div className="row">
                  <div className="col-25">
                    <p>Total Price</p>
                  </div>
                  <div className="col-75">
                    <p>Rp 35.000.000</p>
                  </div>
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
                    <select id="shipping" name="shipping">
                      <option value="jne">JNE</option>
                      <option value="jnt">J&T</option>
                      <option value="pos">POS Indonesia</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label for="payment">Payment Method</label>
                  </div>
                  <div className="col-75">
                    <select id="pmethod" name="pmethod">
                      <option value="jne">BCA</option>
                      <option value="jnt">BRI</option>
                      <option value="ovo">OVO</option>
                      <option value="gopay">GOPAY</option>
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
                <div className="row">
                  <input type="Submit" value="Submit" />
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
                    <p>Rp 35.000.000</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <p>Shipping Cost</p>
                  </div>
                  <div className="col-75">
                    <p>Rp 35.000</p>
                  </div>
                </div>
                <Divider />
                <div className="row">
                  <div className="col-25">
                    <p>Total Payment</p>
                  </div>
                  <div className="col-75">
                    <p>Rp 35.035.000</p>
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
