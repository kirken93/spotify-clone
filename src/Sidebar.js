import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { useDataLayerValue } from "./DataLayer";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import {LibraryMusic} from "@material-ui/icons";
import { setBody } from "./Actions";
import SpotifyWebApi from "spotify-web-api-js";


const spotify = new SpotifyWebApi();

function Sidebar() {
  const [{playlists}, dispatch] = useDataLayerValue();

  const clickPlaylist = (playlistId) => {
    spotify.getPlaylist(playlistId).then(playlist => {
      setBody(dispatch, playlist);
    });
  };
  return <div className="sidebar">
    <img
        className="sidebar__logo"
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify logo"
      />
    <SidebarOption title="Home" Icon={HomeIcon} />
    <SidebarOption title="Search" Icon={SearchIcon} />
    <SidebarOption title="Your Library" Icon={LibraryMusic} />
    <br />
    <strong className="sidebar__title">PLAYLISTS</strong>
    <hr />
    {playlists?.items?.map((playlist) =>
      <SidebarOption key={playlist.id}
                     title={playlist.name}
                     onClick={() => clickPlaylist(playlist.id)} />
    )}
  </div>
}

export default Sidebar;