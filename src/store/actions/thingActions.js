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
