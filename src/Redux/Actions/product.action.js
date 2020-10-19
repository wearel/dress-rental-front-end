// import axios from "axios";
export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAILED = "GET_PRODUCT_FAILED";

export const getProductRequest = () => {
  return {
    type: GET_PRODUCT_REQUEST,
  };
};

export const getProductSuccess = (result) => {
  return {
    type: GET_PRODUCT_REQUEST,
    result,
  };
};

export const getProductFailed = (error) => {
  return {
    type: GET_PRODUCT_FAILED,
    error,
  };
};

// export default getProductAction = () => {
//   return function (dispatch) {
//     dispatch(getProductRequest());
//     axios
//     .get("https://gaun-rental.herokuapp.com/products");
//     .then((result) => dispatch(getProductSuccess(result.data)))
//     .catch((error) => dispatch(getProductFailed(error)))
//   };
// };
