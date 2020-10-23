import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { addToCart } from "../../Redux/Actions/cart.action";
import "./ProductDetail.css";

// Pages
import GalleryProduct from "./GalleryProduct";

import { getProductById } from "../../Redux/Actions/product.action";

const useStyles = makeStyles({
  media: {
    height: 340,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductById(id));
    // eslint-disable-next-line
  }, []);

  const detailProduct = useSelector((state) => state.product);
  const { productDetails } = detailProduct;

  const rentHandler = (product) => {
    dispatch(addToCart(product));
  };

  console.log("component detail product", detailProduct);
  return (
    <Fragment>
      <div className="cont-product-detail">
        <Card>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <CardActionArea className="test">
                <CardMedia
                  className={classes.media}
                  image={productDetails.imageId}
                  title="Contemplative Reptile"
                />
                <GalleryProduct />
              </CardActionArea>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardActionArea>
                <CardContent>
                  <p className="text-title-detail"> {productDetails.name}</p>
                  <Divider />
                  <p className="title-desc-detail">Product Description</p>
                  <p
                    className="text-desc-detail"
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {productDetails.description}
                  </p>
                  <Divider />
                  <p className="text-title-detail">Price Per Day</p>
                  <p className="text-desc-detail">Rp {productDetails.price}</p>
                  <Divider />
                  <p className="vendor-category-detail">
                    Category: {productDetails.category}
                  </p>
                  <p className="vendor-category-detail">
                    By Handmade Javanese Lace — Wedding Dress
                  </p>
                </CardContent>
              </CardActionArea>
              <Link to="/booking" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => rentHandler(productDetails)}
                >
                  Rent Now
                </Button>
              </Link>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      </div>
    </Fragment>
  );
}
