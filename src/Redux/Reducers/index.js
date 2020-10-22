import { combineReducers } from "redux";

import  product  from "./product.reducers";
import  user from "./user.reducers";

const rootReducers = combineReducers({ 
    product,
    user 
});

export default rootReducers;
