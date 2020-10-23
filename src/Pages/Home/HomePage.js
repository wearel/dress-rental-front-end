import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Couple from "../../Assets/couple.jpg";
import Dress from "./dress/dress";
import Testimony from "./testimony/testimony";
import "./HomaPage.css";

function HomePage() {
  return (
    <Fragment>
      {/* Section 1 */}
      <div className="cont-home">
        <div>
          <p className="title-text">Find Your Best Dress For Wedding</p>
          <p className="desc-text">
            Browse the many inspirations for your wedding on Wearel and get
            connected directly to our best dresses. Set your own inspiration
            with the boards we have provided.
          </p>
          <div className="btn">
            <Link to="/product" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="secondary">
                Find Your Dress
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <img src={Couple} alt="couple" />
        </div>
      </div>
      {/* Section 2 */}
      <div>
        <Dress />
      </div>
      {/* Section 3 */}
      <div>
        <Testimony />
      </div>
    </Fragment>
  );
}

export default HomePage;
