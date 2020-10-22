import React, { useEffect } from "react";
import Filter from "./Filter";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductAction } from "../../Redux/Actions/product.action";
import Button from "@material-ui/core/Button";
import "./Product.css";

function Product() {
  const dispatch = useDispatch();
  const history = useHistory();
  const listProduct = useSelector((state) => state.getProductReducers.data);
  console.log("Ini product di view", listProduct);

  useEffect(() => {
    dispatch(getProductAction());
  }, [dispatch]);

  const handleClick = (id) => {
    history.push(`/detail-product/${id}`);
  };

  return (
    <>
      <Filter />
      {listProduct !== undefined && listProduct.length > 0 ? (
        listProduct.map((item, index) => (
          <div key={index}>
            <div className="cont-product">
              <div className="card">
                <img src={item.imageId} alt="image" className="img-product" />
                <div className="cont-under">
                  <p className="name" onClick={() => handleClick(item.id)}>
                    {item.name}
                  </p>
                  <p className="price">Price: {item.price}</p>
                  <p className="price">Description: {item.description}</p>
                  <Button
                    onClick={() => handleClick(item.id)}
                    variant="contained"
                    color="secondary"
                  >
                    Rent Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}

export default Product;
