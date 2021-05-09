import { Action, Types } from "./reducer";

export const setUser = (dispatch: React.Dispatch<Action>, user: SpotifyApi.UserProfileResponse) => {
  dispatch({
    type: Types.SET_USER,
    user
  });
};

export const setToken = (dispatch: React.Dispatch<Action>, token: string) => {
  dispatch({
    type: Types.SET_TOKEN,
    token
  });
};

export const setPlaylists = (dispatch: React.Dispatch<Action>, playlists: SpotifyApi.ListOfCurrentUsersPlaylistsResponse) => {
  dispatch({
    type: Types.SET_PLAYLISTS,
    playlists
  });
};

export const setBody = (dispatch: React.Dispatch<Action>, playlist: SpotifyApi.PlaylistObjectFull) => {
  dispatch({
    type: Types.SET_PLAYLIST,
    playlist
  });
};