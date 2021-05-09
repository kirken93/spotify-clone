export type InitialStateType = {
  user?: SpotifyApi.UserProfileResponse,
  token: string,
  playlists?: Array<SpotifyApi.PlaylistObjectFull>,
  currentlyPlaying: SpotifyApi.CurrentPlaybackResponse,
  player: Spotify.Player,
  state: Spotify.PlaybackState
};

export const initialState = {
  user: undefined,
  token: "",
  playlists: [],
  playing: false,
  player: null,
  state: null
};

export enum Types {
  SET_TOKEN = "SET_TOKEN",
  SET_USER = "SET_USER",
  SET_PLAYLISTS = "SET_PLAYLISTS",
  SET_PLAYLIST = "SET_PLAYLIST",
  SET_CURRENTLY_PLAYING = "SET_CURRENTLY_PLAYING",
  SET_PLAYER = "SET_PLAYER",
  SET_PLAYBACK_STATE = "SET_PLAYBACK_STATE"
};

export type Action =
 | { type: Types.SET_TOKEN, token: string }
 | { type: Types.SET_USER, user: SpotifyApi.UserProfileResponse }
 | { type: Types.SET_PLAYLISTS, playlists: SpotifyApi.ListOfCurrentUsersPlaylistsResponse }
 | { type: Types.SET_PLAYLIST, playlist: SpotifyApi.PlaylistObjectFull }
 | { type: Types.SET_CURRENTLY_PLAYING, currentlyPlaying: SpotifyApi.CurrentPlaybackResponse }
 | { type: Types.SET_PLAYER, player: Spotify.Player }
 | { type: Types.SET_PLAYBACK_STATE, state: Spotify.PlaybackState };

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
    case Types.SET_CURRENTLY_PLAYING:
      return {
        ...state,
        currentlyPlaying: action.currentlyPlaying
      }
    case Types.SET_PLAYER:
      return {
        ...state,
        player: action.player
      }
    case Types.SET_PLAYBACK_STATE:
      return {
        ...state,
        state: action.state
      }
    default:
      return state;
  }
};

export default reducer;