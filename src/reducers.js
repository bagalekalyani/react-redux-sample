import {combineReducers} from "redux";
import {routerStateReducer} from "redux-router";
import comments from "./modules/comments/reducers/comments";

export default combineReducers({
  comments,
  router: routerStateReducer
});
