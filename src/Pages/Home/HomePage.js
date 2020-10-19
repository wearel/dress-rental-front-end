import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./HomaPage.css";
import Couple from "../../Assets/couple.jpg";
import Dress from "./dress/dress";
import Testimony from "./testimony/testimony";

function HomePage() {
  return (
    <Fragment>
      {/* Section 1 */}
      <div className="cont-home">
        <div>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <p className="title-text">Find Your Best Dress For Wedding</p>
              <p className="desc-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                dolorum ullam maiores blanditiis earum aliquid, culpa ad modi
                minima numquam dolores corporis hic. Possimus repellat impedit,
                soluta quisquam ipsum at.
              </p>
              <div className="btn">
                <Button variant="contained" color="secondary">
                  Find Your Dress
                </Button>
              </div>
            </Grid>
            <Grid item xs={6}>
              <img src={Couple} alt="couple" />
            </Grid>
          </Grid>
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
