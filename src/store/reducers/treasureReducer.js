import * as types from "../actions/types";

const initialState = { treasures: [] };

const treasureReducer = (state = initialState, action) => {
  switch (action.type) {
    //------------------------------FETCHING FROM BACKEND
    case types.FETCH_TREASURES:
    case "FETCH_TREASURES":
      return {
        ...state,
        things: state.things.filter((thing) => thing.treasure !== false),
      };

    default:
      return state;
  }
};

export default treasureReducer;
