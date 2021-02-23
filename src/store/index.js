import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// Actions
import { fetchThings } from "./actions/thingActions";
import { fetchTreasures } from "./actions/treasureActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchThings(), fetchTreasures());

export default store;
