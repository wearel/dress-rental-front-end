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
        <Grid container spacing={0}>
          <Grid item xs={6} sm={3}>
            <img src={Logo} alt="logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              eos explicabo fugiat, vitae eveniet cum consequatur, ab neque, vel
              sed quae fugit culpa beatae a quos molestias repellendus
              laudantium. Perspiciatis!
            </p>
            <p>©2020 Thousand Sunny. All rights reserved</p>
          </Grid>
          <Grid item xs={6} sm={3}>
            <h1>Services</h1>
            <p>Text 1</p>
            <p>Text 1</p>
            <p>Text 1</p>
            <p>Text 1</p>
            <p>Text 1</p>
          </Grid>
          <Grid item xs={6} sm={3}>
            <h1>Contact</h1>
            <p>Text 1</p>
            <p>Text 1</p>
            <p>Text 1</p>
            <p>Text 1</p>
            <p>Text 1</p>
          </Grid>
          <Grid item xs={6} sm={3}>
            <h1>terms</h1>
            <p>Text 1</p>
            <p>Text 1</p>
            <p>Text 1</p>
            <p>Text 1</p>
          </Grid>
        </Grid>
      </div>

      <div className="cont-foot-two">
        <div>
          <div>
            <img src={Instagram} alt="instagram" />
            <img src={Facebook} alt="facebook" />
            <img src={Twitter} alt="twitter" />
            <img src={Linkedin} alt="linkedin" />
            <img src={Youtube} alt="youtube" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
