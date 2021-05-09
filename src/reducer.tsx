export type InitialStateType = {
  user?: SpotifyApi.UserProfileResponse,
  token: string,
  playlists?: Array<SpotifyApi.PlaylistObjectFull>,
  playing: boolean
};

export const initialState = {
  user: undefined,
  token: "",
  playlists: [],
  playing: false
};

export enum Types {
  SET_TOKEN = "SET_TOKEN",
  SET_USER = "SET_USER",
  SET_PLAYLISTS = "SET_PLAYLISTS",
  SET_PLAYLIST = "SET_PLAYLIST"
};

export type Action =
 | { type: Types.SET_TOKEN, token: string }
 | { type: Types.SET_USER, user: SpotifyApi.UserProfileResponse }
 | { type: Types.SET_PLAYLISTS, playlists: SpotifyApi.ListOfCurrentUsersPlaylistsResponse }
 | { type: Types.SET_PLAYLIST, playlist: SpotifyApi.PlaylistObjectFull};

const reducer = (state: InitialStateType, action: Action) => {
  switch (action.type) {
    case Types.SET_USER:
      return {
        ...state,
        user: action.user
      };
    case Types.SET_TOKEN:
      return {
        ...state,
        token: action.token
      };
    case Types.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists
      };
    case Types.SET_PLAYLIST:
      return {
        ...state,
        playlist: action.playlist
      };
    default:
      return state;
  }
};

export default reducer;