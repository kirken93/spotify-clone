import React from "react";
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

export const setCurrentlyPlaying = (dispatch: React.Dispatch<Action>, currentlyPlaying: SpotifyApi.CurrentPlaybackResponse) => {
  dispatch({
    type: Types.SET_CURRENTLY_PLAYING,
    currentlyPlaying
  });
};

export const setPlayer = (dispatch: React.Dispatch<Action>, player: Spotify.Player) => {
  dispatch({
    type: Types.SET_PLAYER,
    player
  });
};

export const setPlaybackState = (dispatch: React.Dispatch<Action>, state: Spotify.PlaybackState) => {
  dispatch({
    type: Types.SET_PLAYBACK_STATE,
    state
  });
};