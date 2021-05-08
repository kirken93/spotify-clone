import Constants from "./Constants.js";

export const initialState = {
  user: null,
  token: null,
  playlists: [],
  playing: false,
  item: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case Constants.SET_USER:
      return {
        ...state,
        user: action.user
      };
    case Constants.SET_TOKEN:
      return {
        ...state,
        token: action.token
      };
    case Constants.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists
      };
    case Constants.SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discover_weekly: action.discover_weekly
      };
    default:
      return state;
  }
};

export default reducer;