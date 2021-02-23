import decode from "jwt-decode";
import { Redirect } from "react-router";
import instance from "./instance";

// ACTION TYPES
import * as types from "./types";

export const signUp = (userData, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signup", userData);
    dispatch(setUser(res.data.token));
    localStorage.setItem("myToken", res.data.token);
    history.push("/");
    dispatch({
      type: types.SET_USER,
      payload: { userData: decode(res.data.token) },
    });
  } catch (error) {
    console.log(error);
  }
};

export const signIn = (userData, history) => async (dispatch) => {
  try {
    const res = await instance.post("/signin", userData);
    dispatch(setUser(res.data.token));
    localStorage.setItem("myToken", res.data.token);
    history.push("/");
    dispatch({
      type: types.SET_USER,
      payload: { userData: decode(res.data.token) },
    });
  } catch (error) {
    console.log(error);
  }
};

export const signout = () => {
  localStorage.removeItem("myToken");
  return (
    {
      type: types.SET_USER,
      payload: { userData: null },
    },
    (<Redirect to="/" />)
  );
};

const setUser = (token) => {
  localStorage.setItem("myToken", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: types.SET_USER,
    payload: { userData: decode(token) },
  };
};

export const checkForToken = () => (dispatch) => {
  const token = localStorage.getItem("myToken");
  if (token) {
    const user = decode(token);
    if (user.exp > Date.now()) {
      dispatch(setUser(token));
    } else {
      dispatch(signout);
    }
  }
};
