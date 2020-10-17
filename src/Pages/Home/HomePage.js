import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// Assets
import Couple from "../../Assets/couple.jpg";

// Style CSS
import "./HomaPage.css";

function HomePage() {
  return (
    <div className="container">
      <Grid container spacing={0}>
        <Grid className="cont-one" item xs={6}>
          <p className="title-text">Find your best dress for wedding</p>
          <p className="desc-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            dolorum ullam maiores blanditiis earum aliquid, culpa ad modi minima
            numquam dolores corporis hic. Possimus repellat impedit, soluta
            quisquam ipsum at.
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
  );
}

export default HomePage;
