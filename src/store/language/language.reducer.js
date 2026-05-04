import { LANGUAGE_ACTION_TYPES } from "./language.types";

const INITIAL_STATE = {
  language: localStorage.getItem("language") || "English",
};

export const languageReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LANGUAGE_ACTION_TYPES.SET_LANGUAGE:
      localStorage.setItem("language", payload);
      return { ...state, language: payload };
    default:
      return state;
  }
};
