import "../styles/Footer.css";
import {
  Shuffle,
  SkipPrevious,
  PlayCircleOutline,
  SkipNext,
  Repeat,
  PlaylistPlay,
  VolumeDown,
  PauseCircleOutline
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";
import {useDataLayerValue} from "../DataLayer";
import SpotifyWebApi from "spotify-web-api-js";
import React from "react";

const spotify = new SpotifyWebApi();

function Footer() {
  const [{state, token}]: [{state: Spotify.PlaybackState, player: Spotify.Player, token: string}] = useDataLayerValue();

  const play = React.useCallback(() => {
    spotify.setAccessToken(token);
    spotify.play();
  }, [token]);

  const pause = React.useCallback(() => {
    spotify.setAccessToken(token);
    spotify.pause();
  }, [token]);

  const next = React.useCallback(() => {
    spotify.setAccessToken(token);
    spotify.skipToNext();
  }, [token]);

  const prev = React.useCallback(() => {
    spotify.setAccessToken(token);
    spotify.skipToPrevious();
  }, [token]);

  const setRepeatMode = React.useCallback(() => {
    spotify.setAccessToken(token);
    spotify.setRepeat(state.repeat_mode === 0 ? "context" : "off");
  }, [token, state?.repeat_mode]);

  const setShuffle = React.useCallback(() => {
    spotify.setAccessToken(token);
    spotify.setShuffle(!state.shuffle);
  }, [token, state?.shuffle]);

  const currentTrack = state?.track_window?.current_track;
  console.log(state);

  return <div className="footer">
    <div className="footer__left">
      <img
        src={currentTrack?.album?.images[0].url}
        alt=""
        className="footer__albumLogo"
      />
      <div className="footer__songInfo">
        <h4>{currentTrack?.name}</h4>
        <p>{currentTrack?.artists.map(a => a.name).join(", ")}</p>
      </div>
    </div>
    <div className="footer__center">
      <Shuffle className={state?.shuffle ? "footer__green" : ""} onClick={setShuffle} />
      <SkipPrevious className="footer__icon" onClick={prev} />
      {state?.paused
        ? <PlayCircleOutline fontSize="large" className="footer__icon" onClick={play} />
        : <PauseCircleOutline fontSize="large" className="footer__icon" onClick={pause} />}
      <SkipNext className="footer__icon" onClick={next} />
      <Repeat className={state?.repeat_mode > 0 ? "footer__green" : ""} onClick={setRepeatMode} />
    </div>
    <div className="footer__right">
      <Grid container spacing={2}>
        <Grid item>
          <PlaylistPlay />
        </Grid>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider />
        </Grid>
      </Grid>
    </div>
  </div>;
}

export default Footer;