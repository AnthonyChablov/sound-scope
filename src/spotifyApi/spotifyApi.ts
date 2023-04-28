import { getSpotifyAccessToken } from "./spotifyToken";
import axios from 'axios';

let accessToken = getSpotifyAccessToken();







export async function getUser(headers){
  return await axios.get('https://api.spotify.com/v1/me', { headers });
}

export async function getFollowing(headers){
  axios.get('https://api.spotify.com/v1/me/following', { headers });
}

