import * as types from "../actions/types";

const initialState = { treasures: [], things: [] };

const thingReducer = (state = initialState, action) => {
  switch (action.type) {
    //------------------------------FETCHING FROM BACKEND

    case types.FETCH_TREASURES:
      return {
        ...state,
        treasures: action.payload, //state.things.filter((thing) => thing.treasure !== false),
      };
    case types.FETCH_THINGS:
      return {
        ...state,
        things: action.payload, // state.things.filter((thing) => thing.treasure === false),
      };

    default:
      return state;
  }
};

export default thingReducer;
