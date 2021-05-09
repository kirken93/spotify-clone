import "../styles/Footer.css";
import {
  Shuffle,
  SkipPrevious,
  PlayCircleOutline,
  SkipNext,
  Repeat,
  PlaylistPlay,
  VolumeDown,
  PauseCircleFilledOutlined
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";
import {useDataLayerValue} from "../DataLayer";

function Footer() {
  const [{state}] = useDataLayerValue();

  const trackWindow = state?.track_window as Spotify.PlaybackTrackWindow;
  const currentTrack = trackWindow?.current_track;
  console.log(state) 

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
      <Shuffle className={state?.shuffle ? "footer__green" : ""} />
      <SkipPrevious className="footer__icon" />
      {state?.paused
        ? <PlayCircleOutline fontSize="large" className="footer__icon" />
        : <PauseCircleFilledOutlined fontSize="large" className="footer__icon" />}
      <SkipNext className="footer__icon" />
      <Repeat className={state?.repeat > 0 ? "footer__green" : ""} />
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