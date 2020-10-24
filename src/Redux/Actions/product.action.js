import axios from "axios";
export const GET_ALL_PRODUCTS_REQUEST = "GET_ALL_PRODUCTS_REQUEST";
export const GET_ALL_PRODUCTS_SUCCESS = "GET_ALL_PRODUCTS_SUCCESS";
export const GET_ALL_PRODUCTS_FAILED = "GET_ALL_PRODUCTS_FAILED";
export const GET_PRODUCT_DETAILS_REQUEST = "GET_PRODUCTS_DETAILS_REQUEST";
export const GET_PRODUCT_DETAILS_SUCCESS = "GET_PRODUCTS_DETAILS_SUCCESS";
export const GET_PRODUCT_DETAILS_FAILED = "GET_PRODUCTS_DETAILS_FAILED";

export const getProductAction = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_PRODUCTS_REQUEST,
      });

      const response = await axios.get(
        "https://server-gaunrental.herokuapp.com/api/v1/product"
      );

      dispatch({
        type: GET_ALL_PRODUCTS_SUCCESS,
        payload: response.data.product,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_PRODUCTS_FAILED,
        payload: error,
      });
    }
  };
};

export const getProductById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_PRODUCT_DETAILS_REQUEST,
      });

      const response = await axios.get(
        `https://server-gaunrental.herokuapp.com/api/v1/product/${id}`
      );

      dispatch({
        type: GET_PRODUCT_DETAILS_SUCCESS,
        payload: response.data.product,
      });
    } catch (error) {
      dispatch({
        type: GET_PRODUCT_DETAILS_FAILED,
        payload: error,
      });
    }
  };
};
