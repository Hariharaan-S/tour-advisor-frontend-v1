import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoggedIn: false,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload, isLoggedIn: true };
    case USER_ACTION_TYPES.LOGOUT:
      return { ...state, currentUser: null, isLoggedIn: false };
    default:
      return state;
  }
};
