import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// Actions
import { fetchThings, fetchTreasures } from "./actions/thingActions";
import { checkForToken } from "./actions/authActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(fetchTreasures());

store.dispatch(fetchThings());
store.dispatch(checkForToken());

export default store;
