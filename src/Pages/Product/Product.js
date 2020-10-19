import React from "react";
import Filter from "./Filter";
import { useSelector, useDispatch } from "react-redux";
// import { getProductAction } from "../../Redux/Actions/product.action";
import "./Product.css";

function Product() {
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.getProductReducers);
  console.log("Ini Redux", listProduct);

  // useEffect(() => {
  //   dispatch(getProductAction());
  // }, [dispatch]);

  return (
    <div>
      <Filter />
    </div>
  );
}

export default Product;
