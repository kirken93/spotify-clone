export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "e5e3d87c174740cb8248e84891b9cd4c";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${process.env.URL}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
