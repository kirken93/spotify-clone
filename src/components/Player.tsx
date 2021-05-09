import "../styles/Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import React from "react";
import { useDataLayerValue } from "../DataLayer";
import { setPlayer, setPlaybackState } from "../Actions";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

const Player: React.FC = () => {
  const [{token}, dispatch] = useDataLayerValue();
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    script.onload = () => {
      window.onSpotifyWebPlaybackSDKReady = () => {
        const playerRef = new Spotify.Player({
          name: 'Megan Spotify Clone',
          getOAuthToken: cb => { cb(token); }
        });
        console.log(playerRef);

        // Error handling
        playerRef.addListener('initialization_error', ({ message }) => { console.error(message); });
        playerRef.addListener('authentication_error', ({ message }) => { console.error(message); });
        playerRef.addListener('account_error', ({ message }) => { console.error(message); });
        playerRef.addListener('playback_error', ({ message }) => { console.error(message); });

        // Playback status updates
        playerRef.addListener('player_state_changed', (state) => {
          setPlaybackState(dispatch, state)
        });

        // Ready
        playerRef.addListener('ready', ({ device_id }) => {
          spotify.setAccessToken(token);
          spotify.play({ device_id, context_uri: "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr"}, () => console.log("blahh"));
          console.log('Ready with Device ID', device_id);
        });

        // Not Ready
        playerRef.addListener('not_ready', ({ device_id }) => {
          console.log('Device ID has gone offline', device_id);
        });

        // Connect to the player!
        playerRef.connect();

        setPlayer(dispatch, playerRef); 
      }
    }
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, [token, dispatch]);

  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;