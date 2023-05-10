import axios from "axios";
import { headers, refreshHeaders } from "./spotifyToken";
import { spotifyEndPoint } from "./spotifyEndPoint";

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
        throw err;
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
        throw err;
    }
}

/* Get A Users Top Tracks */
/* short term */
export async function getTopArtistsShortTerm(limit:number = 10) {
    try{
        const res = await axios.get(
            `https://api.spotify.com/v1/me/top/artists?limit=${limit}&time_range=short_term`, 
            { headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}
/* medium term */
export async function getTopArtistsMediumTerm(limit:number = 10) {
    try{
        const res = await axios.get(
            `https://api.spotify.com/v1/me/top/artists?limit=${limit}&time_range=medium_term`, 
            { headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}
// long term
export async function getTopArtistsLongTerm(limit:number = 10) {
    try{
        const res = await axios.get(
            `https://api.spotify.com/v1/me/top/artists?limit=${limit}&time_range=long_term`, 
            { headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}

/* Get A Users Top Tracks */
/* short term */
export async function getTopTracksShortTerm(limit:number = 10) {
    try{
        const res = await axios.get(
            `https://api.spotify.com/v1/me/top/tracks?limit=${limit}&time_range=short_term`, 
            { headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}

/* medium term */
export async function getTopTracksMediumTerm(limit:number = 10) {
    try{
        const res = await axios.get(
            `https://api.spotify.com/v1/me/top/tracks?limit=${limit}&time_range=medium_term`,  
            { headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}
/* long term */
export async function getTopTracksLongTerm(limit : number = 10) {
    try{
        const res = await axios.get(
            `https://api.spotify.com/v1/me/top/tracks?limit=${limit}&time_range=long_term`,  
            { headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}

export async function getRecentlyPlayed(limit : number = 10) {
    try{
        const res = await axios.get(
            `https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`,
            { headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}

/* playlists */
export async function getPlaylists(){
    try{
        const res = await axios.get(
            `https://api.spotify.com/v1/me/playlists`, 
            { headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}

export async function getPlaylistTracks(playlistId:string){
    try{
        const res = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, { headers });
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}
