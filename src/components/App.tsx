import "../styles/App.css";
import Login from "./Login";
import { getTokenFromUrl } from "../spotify";
import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "../DataLayer";
import { setUser, setToken, setPlaylists, setBody } from "../Actions";

const spotify = new SpotifyWebApi();

function App() {
  const [{token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(dispatch, _token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        setUser(dispatch, user);
      });

      spotify.getUserPlaylists().then((playlists) => {
        setPlaylists(dispatch, playlists);
        spotify.getPlaylist(playlists.items[0].id).then((playlist) => {
          setBody(dispatch, playlist);
        });
      });
    }
  }, [dispatch]);

  return (
    <div className="App">
      {token
        ? <Player />
        : <Login />}
    </div>
  );
}

export default App;
