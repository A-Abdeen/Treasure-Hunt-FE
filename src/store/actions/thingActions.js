import instance from "./instance";

// ACTION TYPES
import * as types from "./types";
// ACTIONS

//------------------------------FETCHING FROM BACKEND
export const fetchThings = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/things");
      dispatch({
        type: types.FETCH_THINGS,
        payload: response.data,
      });
    } catch (error) {
      console.error();
    }
  };
};

export const fetchTreasures = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/treasures");
      dispatch({
        type: types.FETCH_TREASURES,
        payload: response.data,
      });
    } catch (error) {
      console.error();
    }
  };
};
