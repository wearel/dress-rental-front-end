import { combineReducers } from "redux";
import product from "./product.reducers";
import user from "./user.reducers";
import cart from "./cart.reducers";

const rootReducers = combineReducers({
  product,
  user,
  cart,
});

export default rootReducers;
