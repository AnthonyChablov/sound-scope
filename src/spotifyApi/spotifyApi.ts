import axios from "axios";
import { getHashParams } from "@/utils/utils";


/* Token */
export const token = (typeof window === 'undefined') ? getSpotifyAccessToken() : '';

/* Headers */
const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
};

/* Token Helpers */
export function setSpotifyAccessToken(token:string){
    window.localStorage.setItem('spotify_api_token', token);
}

export function getSpotifyAccessToken(){
    return window.localStorage.getItem('spotify_api_token');
}

export function setAccessToken(){
    const { error, access_token, refresh_token } = getHashParams();
    setSpotifyAccessToken(access_token);
    return access_token;
}

export function logout(){
    setSpotifyAccessToken('');
    window.localStorage.removeItem('spotify_api_token');
    window.location.reload();
} 

/* Api Request Helpers */
export function getUser(){
    axios.get('https://api.spotify.com/v1/me', { headers });
}

export function getPlaylists(){
    axios.get('https://api.spotify.com/v1/me/playlists', { headers });
}

export function getPlaylistTracks(playlistId:string){
    axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, { headers });
}
