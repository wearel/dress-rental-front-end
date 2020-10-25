import axios from "axios";
export const GET_ALL_BOOKING_REQUEST = "GET_ALL_BOOKING_REQUEST";
export const GET_ALL_BOOKING_SUCCESS = "GET_ALL_BOOKING_SUCCESS";
export const GET_ALL_BOOKING_FAILED = "GET_ALL_BOOKING_FAILED";

export const getDelivery = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_BOOKING_REQUEST,
      });

      const response = await axios.get(
        "https://server-gaunrental.herokuapp.com/api/v1/transfer"
      );

      dispatch({
        type: GET_ALL_BOOKING_SUCCESS,
        payload: response.data.transfer,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_BOOKING_FAILED,
        payload: error,
      });
    }
  };
};
