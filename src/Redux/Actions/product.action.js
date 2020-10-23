import axios from "axios";
export const GET_ALL_PRODUCTS_REQUEST = "GET_ALL_PRODUCTS_REQUEST";
export const GET_ALL_PRODUCTS_SUCCESS = "GET_ALL_PRODUCTS_SUCCESS";
export const GET_ALL_PRODUCTS_FAILED = "GET_ALL_PRODUCTS_FAILED";
export const GET_PRODUCT_DETAILS_REQUEST = "GET_PRODUCTS_DETAILS_REQUEST";
export const GET_PRODUCT_DETAILS_SUCCESS = "GET_PRODUCTS_DETAILS_SUCCESS";
export const GET_PRODUCT_DETAILS_FAILED = "GET_PRODUCTS_DETALS_FAILED";

export const getAllProductRequest = () => {
  return {
    type: GET_ALL_PRODUCTS_REQUEST,
  };
};

export const getAllProductSuccess = (result) => {
  return {
    type: GET_ALL_PRODUCTS_SUCCESS,
    payload: result,
  };
};

export const getAllProductFailed = (error) => {
  return {
    type: GET_ALL_PRODUCTS_FAILED,
    payload: error,
  };
};
export const getProductDetailRequest = () => {
  return {
    type: GET_PRODUCT_DETAILS_REQUEST,
  };
};

export const getProductDetailSuccess = (result) => {
  return {
    type: GET_PRODUCT_DETAILS_SUCCESS,
    payload: result,
  };
};

export const getProuctDetailFailed = (error) => {
  return {
    type: GET_PRODUCT_DETAILS_FAILED,
    payload: error,
  };
};

export const getProductAction = () => {
  return async (dispatch) => {
    const response = await axios
      .get("https://5f51a6945e98480016123be3.mockapi.io/products")
      .then((result) => dispatch(getAllProductSuccess(result.data)))
      .catch((error) => dispatch(getAllProductFailed(error)));

    dispatch(getAllProductRequest(response.data));
    console.log("Hasil get data", response);
  };
};

export const getProductById = (id) => {
  return async (dispatch) => {
    const response = await axios
      .get(`https://5f51a6945e98480016123be3.mockapi.io/products/${id}`)
      .then((result) => dispatch(getProductDetailSuccess(result.data)))
      .catch((error) => dispatch(getAllProductFailed(error)));

    dispatch(getAllProductRequest(response.data));
    console.log("hasil detail", response);
  };
};
