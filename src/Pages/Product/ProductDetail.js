import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import "./ProductDetail.css";

// Assets
import Dress from "../../Assets/dress-1.jpg";
// Pages
import GalleryProduct from "./GalleryProduct";

const useStyles = makeStyles({
  media: {
    height: 540,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Fragment>
      <div className="cont-product-detail">
        <Card>
          <CardActionArea className="test">
            <CardMedia
              className={classes.media}
              image={Dress}
              title="Contemplative Reptile"
            />
            <GalleryProduct />

            <CardContent>
              <Typography
                className="text-title-detail"
                gutterBottom
                variant="h5"
                component="h2"
              >
                Javanese Dress
              </Typography>
              <Divider />
              <Typography className="title-desc-detail">
                Product Description
              </Typography>
              <Typography
                className="text-desc-detail"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
                iure, in harum distinctio veritatis explicabo sequi quo a
                quidem, ullam, laborum vero? Beatae quod, sint eveniet accusamus
                assumenda sed officiis? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Veritatis omnis, velit, vel et illum facere
                impedit eaque nobis debitis ea porro natus minima dolore. Sunt
                dolorem numquam quis aliquam qui!
              </Typography>
              <Divider />
              <Typography className="text-title-detail">
                Price Per Day
              </Typography>
              <Typography className="text-title-detail">Rp 15.000</Typography>
              <Divider />
              <Typography className="text-desc-detail">
                Category: Javanese Culture
              </Typography>
              <Typography className="text-desc-detail">
                By Handmade Javanese Lace — Wedding Dress
              </Typography>
            </CardContent>
          </CardActionArea>
          <Button variant="contained" color="secondary">
            Rent Now
          </Button>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </div>
    </Fragment>
  );
}
