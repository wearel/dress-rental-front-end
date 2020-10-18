import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// Assets
import Couple from "../../Assets/couple.jpg";
import DressOne from "../../Assets/dress-1.jpg";
import Dresstwo from "../../Assets/dress-2.jpg";
import DressThree from "../../Assets/dress-3.jpg";
import DressFour from "../../Assets/dress-4.jpg";

// Style CSS
import "./HomaPage.css";

function HomePage() {
  return (
    <Fragment>
      <div className="container">
        {/* Section 1 */}
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
        {/* Grid 1 */}
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <div className="cont-one">
              <p className="title-text-sec-2">500+ Dress High Quality</p>
              <p className="desc-text-sec-2">
                Explore lebih dari 500 dress untuk keperluan wedding anda
              </p>
            </div>
          </Grid>

          {/* Grid 2 */}
          <Grid item xs={6} sm={2}>
            <div>
              <div className="cont-img1-sec-2">
                <img className="img-sec-2" src={DressOne} alt="dress one" />
              </div>
              <div className="cont-img2-sec-2">
                <img className="img-sec-2" src={Dresstwo} alt="dress two" />
              </div>
            </div>
          </Grid>

          {/* Grid 3 */}
          <Grid item xs={6} sm={3}>
            <div className="cont-two">
              <div className="cont-img3-sec-2">
                <img className="img-sec-2" src={DressThree} alt="dress three" />
              </div>
              <div className="cont-img4-sec-2">
                <img className="img-sec-2" src={DressFour} alt="dress four" />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      {/* Section 3 */}
      <div className="container-sec-3">
        <h1>testing</h1>
      </div>
    </Fragment>
  );
}

export default HomePage;
