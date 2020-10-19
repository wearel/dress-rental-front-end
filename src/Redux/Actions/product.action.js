import axios from "axios";
export const GET_PRODUCT = "GET_PRODUCT";

export const getProduct = () => {
  return {
    type: GET_PRODUCT,
  };
};

export const getProductAction = () => {
  return function (dispatch) {
    dispatch(getProduct());
    axios.get("https://5f51a6945e98480016123be3.mockapi.io/product");
  };
};
