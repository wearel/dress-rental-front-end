import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
// Assets
import Couple from "../../Assets/couple.jpg";
// Style CSS
import "./HomaPage.css";
// Component
import Dress from "./dress/dress";
import Testimony from "./testimony/testimony";

function HomePage() {
  return (
    <Fragment>
      {/* Section 1 */}
      <div className="container">
        <div>
          <Grid container spacing={0}>
            <Grid className="cont-one" item xs={6}>
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
            <Grid className="cont-two" item xs={6}>
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
