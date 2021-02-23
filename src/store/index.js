import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// Actions
import { fetchTreasures, fetchThings } from "./actions/thingActions";
import { checkForToken } from "./actions/authActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchThings());
//store.dispatch(fetchTreasures());
store.dispatch(checkForToken());

export default store;
