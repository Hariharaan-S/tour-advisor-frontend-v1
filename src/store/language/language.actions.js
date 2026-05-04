import { LANGUAGE_ACTION_TYPES } from "./language.types";

export const setLanguage = (language) => ({
  type: LANGUAGE_ACTION_TYPES.SET_LANGUAGE,
  payload: language,
});
