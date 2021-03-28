import './App.css';
import Login from "./Login";
import { getTokenFromUrl} from "./spotify";
import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
    }
    console.log("token", token);
  }, []);

  return (
    <div className="App">
      {token
        ? <h1>You are now logged in!</h1>
        : <Login />}
    </div>
  );
}

export default App;
