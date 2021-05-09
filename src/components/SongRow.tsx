import React from "react";
import "../styles/SongRow.css";

const SongRow: React.FC<{track: SpotifyApi.TrackObjectFull, onClick: (() => void)}> = ({track, onClick}) => {
  return <div className="songRow" onClick={onClick}>
    <img src={track.album.images[0].url} alt="" className="songRow__album" />
    <div className="songRow__info">
      <h1>{track.name}</h1>
      <p>
        {track.artists.map((artist) => artist.name).join(", ")} -{" "}
        {track.album.name}
      </p>
    </div>
  </div>;
}

export default SongRow;