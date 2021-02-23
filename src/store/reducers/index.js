import { combineReducers } from "redux";
import thingReducer from "./thingReducer";
import treasureReducer from "./treasureReducer";

const rootReducer = combineReducers({
  things: thingReducer,
  treasures: treasureReducer,
});

export default rootReducer;
