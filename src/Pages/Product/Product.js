import React, { useEffect } from "react";
import Filter from "./Filter";
import {useHistory}  from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getProductAction } from "../../Redux/Actions/product.action";
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
    history.push(`/detail-product/${id}`)
  }

  return (
    <>
      <Filter />
      {listProduct !== undefined && listProduct.length > 0 ? (
        listProduct.map((item, index) => (
          <div key={index}>
            <div>
              <p onClick = {() => handleClick(item.id)} >{item.name}</p>
              <p>{item.price}</p>
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
