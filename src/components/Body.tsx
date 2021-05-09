import { useDataLayerValue } from "../DataLayer";
import Header from "./Header";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";
import SongRow from "./SongRow";
import "../styles/Body.css";

const Body: React.FC = () => {
  const [{playlist}]: [{playlist: SpotifyApi.PlaylistObjectFull}] = useDataLayerValue();

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
      {playlist?.tracks.items.map((item) => <SongRow key={item.track.id} track={item.track as SpotifyApi.TrackObjectFull} />)}
    </div>
  </div>;
}

export default Body;