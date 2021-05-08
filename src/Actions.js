import Constants from "./Constants.js";

export const setUser = (dispatch, user) => {
  dispatch({
    type: Constants.SET_USER,
    user
  });
};

export const setToken = (dispatch, token) => {
  dispatch({
    type: Constants.SET_TOKEN,
    token
  });
};

export const setPlaylists = (dispatch, playlists) => {
  dispatch({
    type: Constants.SET_PLAYLISTS,
    playlists
  });
};

export const setDiscoverWeekly = (dispatch, discover_weekly) => {
  dispatch({
    type: Constants.SET_DISCOVER_WEEKLY,
    discover_weekly
  });
};