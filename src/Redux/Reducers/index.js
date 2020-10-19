import { combineReducers } from "redux";

import { getProductReducers } from "./product.reducers";

const rootReducers = combineReducers({ getProductReducers });

export default rootReducers;
