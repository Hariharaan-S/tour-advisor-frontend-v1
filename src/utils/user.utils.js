
export const login = (tokens, userPayload = null) => {
    const currentUser = { ...userPayload, ...tokens };
    localStorage.setItem("accessToken", tokens.accessToken);
    localStorage.setItem("refreshToken", tokens.refreshToken);
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    return currentUser;
    //dispatch(setCurrentUser(currentUser));
  };

export const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("currentUser");
    //dispatch(setCurrentUser(null));
    return null;
  };
