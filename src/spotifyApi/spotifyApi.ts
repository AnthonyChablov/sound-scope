import axios from "axios";
import { getHashParams } from "@/utils/utils";

/* Token */
export const token = (typeof window !== 'undefined') ? getSpotifyAccessToken() : '';

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

/* Api Calls */
export async function getUser(){
    try{
        const res = await axios.get(
            'https://api.spotify.com/v1/me', 
            { headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
    }
}

export async function getPlaylists(){
    try{
        const res = await axios.get(
            'https://api.spotify.com/v1/me/playlists', 
            { headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
    }
}

export async function getFollowing(){
    try{
        const res = await axios.get(
            'https://api.spotify.com/v1/me/following?type=artists', 
            { headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
    }
}

/* Get A Users Top Tracks */
export async function getTopArtistsShortTerm(limit:number = 10) {
    try{
        const res = await axios.get(
            `https://api.spotify.com/v1/me/top/artists?limit=${limit}&time_range=short_term`, 
            { headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
    }
}

export async function getTopArtistsLongTerm(limit:number = 10) {
    try{
        const res = await axios.get(
            `https://api.spotify.com/v1/me/top/artists?limit=${limit}&time_range=long_term`, 
            { headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
    }
}


/* Get A Users Top Tracks */
export async function getTopTracksShortTerm(limit:number = 10) {
    try{
        const res = await axios.get(
            `https://api.spotify.com/v1/me/top/tracks?limit=${limit}&time_range=short_term`, 
            { headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
    }
}

export async function getTopTracksLongTerm() {
    try{
        const res = await axios.get(
            'https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=long_term', 
            { headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
    }
}





export function getPlaylistTracks(playlistId:string){
    axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, { headers });
}


export const getTopTracksShort = () =>
  axios.get('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=short_term', { headers });



