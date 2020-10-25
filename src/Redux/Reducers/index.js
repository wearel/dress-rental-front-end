import { combineReducers } from "redux";
import product from "./product.reducers";
import user from "./user.reducers";
import cart from "./cart.reducers";
import booking from "./booking.reducers";

const rootReducers = combineReducers({
  product,
  user,
  cart,
  booking,
});

export default rootReducers;
