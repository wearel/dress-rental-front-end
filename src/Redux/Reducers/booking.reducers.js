import {
  GET_ALL_BOOKING_REQUEST,
  GET_ALL_BOOKING_SUCCESS,
  GET_ALL_BOOKING_FAILED,
} from "../Actions/booking.action";

const intialState = {
  productsBooking: [],
  loading: false,
  error: null,
};

export default function booking(state = intialState, action) {
  switch (action.type) {
    case GET_ALL_BOOKING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        productsBooking: action.payload,
      };
    case GET_ALL_BOOKING_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
