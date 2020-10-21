import React, { useEffect } from "react";
import Filter from "./Filter";
import { useSelector, useDispatch } from "react-redux";
import { getProductAction } from "../../Redux/Actions/product.action";
import "./Product.css";

function Product() {
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.getProductReducers.data);
  console.log("Ini product di view", listProduct);

  useEffect(() => {
    dispatch(getProductAction());
  }, [dispatch]);

  return (
    <div>
      <Filter />
      {/* {listProduct.map((item, index) => (
        <div keu={index}>
          <h1>{item.name}</h1>
        </div>
      ))} */}
    </div>
  );
}

export default Product;
