import { combineReducers } from "redux";

import errorReducer from "./errorReducer";

import beerReducer from "./beerReducer";

export default combineReducers({
  errors: errorReducer,

  beer: beerReducer
});
