export const selectUserReducer = (state) => state.user;

export const selectCurrentUser = (state) => selectUserReducer(state).currentUser;
export const selectIsLoggedIn = (state) => selectUserReducer(state).isLoggedIn;
