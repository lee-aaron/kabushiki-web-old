import { LOGIN } from "./types";

export const login = (username, password) => dispatch => {
  dispatch({
    type: LOGIN,
    isAuthenticated: true
  });
};
