import { combineReducers } from "redux";
import { PostReducer } from "./reducer";

/// combine reducer helps your reducer to manage their own slices of state.
/// it will combine all reducers passed to it into a single reducing function
/// that can be exported as default
const reducers = combineReducers({
  user: PostReducer,
});
export default reducers;
