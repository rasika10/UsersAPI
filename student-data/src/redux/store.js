import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const ConfigStore = {
  key: "KeyP",

  storage,
};
const PersistedReducers = persistReducer(ConfigStore, reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/// store holds the state of the application
const store = createStore(
  PersistedReducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
export default store;
