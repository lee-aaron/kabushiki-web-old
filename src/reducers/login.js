import { LOGIN, LOGOUT } from "../actions/types";

const initialState = {
  isAuthenticated: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: action.isAuthenticated
      }
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false
      }
    default:
      return state;
  }
}