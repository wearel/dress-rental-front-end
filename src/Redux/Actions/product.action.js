import axios from "axios";
export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAILED = "GET_PRODUCT_FAILED";

export const getProductRequest = (data) => {
  return {
    type: GET_PRODUCT_REQUEST,
    payload: data,
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

export const getProductAction = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://5f51a6945e98480016123be3.mockapi.io/products"
    );
    dispatch(getProductRequest(response.data));
    console.log("Hasil get data", response);
  };
};
