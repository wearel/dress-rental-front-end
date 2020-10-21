import { combineReducers } from "redux";

import { getProductReducers } from "./product.reducers";
import  user  from "./user.reducers";

const rootReducers = combineReducers({ getProductReducers, user });

export default rootReducers;
