import { useDataLayerValue } from "../DataLayer";
import Header from "./Header";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";
import SongRow from "./SongRow";
import "../styles/Body.css";
import React from "react";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

const Body: React.FC = () => {
  const [{token, playlist}]: [{token: string, playlist: SpotifyApi.PlaylistObjectFull}] = useDataLayerValue();

  const playSong = React.useCallback((track) => {
    spotify.setAccessToken(token);
    spotify.play({ context_uri: "spotify:playlist:"+playlist.id, offset: { uri: track.uri } });
  }, [token, playlist?.id]);

  return <div className="body">
    <Header />
    <div className="body__info">
      <img src={playlist?.images[0]?.url} alt="" />
      <div className="body__infoText">
        <strong>PLAYLIST</strong>
        <h2>{playlist?.name}</h2>
        <p>{playlist?.description}</p>
      </div>
    </div>
    <div className="body__songs">
      <div className="body__icons">
        <PlayCircleFilled className="body__shuffle" />
        <Favorite fontSize="large" />
        <MoreHoriz />
      </div>
      {playlist?.tracks.items.map((item) =>
        <SongRow key={item.track.id}
                 track={item.track as SpotifyApi.TrackObjectFull}
                 onClick={() => playSong(item.track)} />)}
    </div>
  </div>;
}

export default Body;