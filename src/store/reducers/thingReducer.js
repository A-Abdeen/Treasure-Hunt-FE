import * as types from "../actions/types";

const initialState = { things: [] };

const thingsReducer = (state = initialState, action) => {
  switch (action.type) {
    //------------------------------FETCHING FROM BACKEND
    case types.FETCH_THINGS:
    case "FETCH_THINGS":
      return {
        ...state,
        things: state.things.filter((thing) => thing.treasure === false),
      };
    default:
      return state;
  }
};

export default thingsReducer;
