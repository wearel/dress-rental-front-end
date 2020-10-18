import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
// CSS
import "./Footer.css";

// Assets
import Logo from "../Assets/Logo.png";
import Instagram from "../Assets/social/Instagram_white.png";
import Facebook from "../Assets/social/Facebook_white.png";
import Twitter from "../Assets/social/Twitter_white.png";
import Linkedin from "../Assets/social/LinkedIN_white.png";
import Youtube from "../Assets/social/Youtube_white.png";

function Footer() {
  return (
    <Fragment>
      <div className="cont-foot-one">
        <Grid className="cont-foot-in-one" container spacing={0}>
          <Grid item xs={6} sm={3}>
            <img src={Logo} alt="logo" />
            <p className="text-foot-about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              eos explicabo fugiat, vitae eveniet cum consequatur, ab neque, vel
              sed quae fugit culpa beatae a quos molestias repellendus
              laudantium. Perspiciatis!
            </p>
            <p className="text-foot-about">
              ©2020 Thousand Sunny. All rights reserved
            </p>
          </Grid>
          <Grid item xs={6} sm={3}>
            <h1 className="text-title">Services</h1>
            <p className="text-foot-two">Booking</p>
            <p className="text-foot-two">Renting</p>
            <p className="text-foot-two">Retail</p>
            <p className="text-foot-two">Listing</p>
            <p className="text-foot-two">Vendor</p>
          </Grid>
          <Grid item xs={6} sm={3}>
            <h1 className="text-title">Contact</h1>
            <p className="text-foot-two">
              Building Office 3 Jakarta, Indonesia
            </p>
            <p className="text-foot-two">Wearel@gmail.com</p>
            <p className="text-foot-two">+62858489433</p>
            <p className="text-foot-two">(0286) 394843</p>
          </Grid>
          <Grid className="cont-foot-in-two" item xs={6} sm={3}>
            <h1 className="text-title">General</h1>
            <p className="text-foot-two">News</p>
            <p className="text-foot-two">FAQ</p>
            <p className="text-foot-two">Career</p>
            <p className="text-foot-two">Term & Condition</p>
          </Grid>
        </Grid>
      </div>

      <div className="cont-foot-two">
        <div className="cont-social">
          <div>
            <img className="pic" src={Instagram} alt="instagram" />
            <img className="pic" src={Facebook} alt="facebook" />
            <img className="pic" src={Twitter} alt="twitter" />
            <img className="pic" src={Linkedin} alt="linkedin" />
            <img className="pic" src={Youtube} alt="youtube" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
