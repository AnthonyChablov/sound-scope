import axios from "axios";
import { ITrack } from "@/models/track";

/* Api Calls */
export async function getUser(token:string){
    try{
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
        const res = await axios.get(
            'https://api.spotify.com/v1/me', 
            { headers:headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}

export async function getFollowing(token:string){
    try{
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
        const res = await axios.get(
            'https://api.spotify.com/v1/me/following?type=artists', 
            { headers:headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}

/* Get A Users Top Tracks */
/* short term */
export async function getTopArtistsShortTerm(limit:number = 10, token:string) {
    try{
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
        const res = await axios.get(
            `https://api.spotify.com/v1/me/top/artists?limit=${limit}&time_range=short_term`, 
            { headers:headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}
/* medium term */
export async function getTopArtistsMediumTerm(limit:number = 10, token:string) {
    try{
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
        const res = await axios.get(
            `https://api.spotify.com/v1/me/top/artists?limit=${limit}&time_range=medium_term`, 
            { headers:headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}
// long term
export async function getTopArtistsLongTerm(limit:number = 10, token:string) {
    try{
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
        const res = await axios.get(
            `https://api.spotify.com/v1/me/top/artists?limit=${limit}&time_range=long_term`, 
            { headers:headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}

/* Get A Users Top Tracks */
/* short term */
export async function getTopTracksShortTerm(limit:number = 10, token:string) {
    try{
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
        const res = await axios.get(
            `https://api.spotify.com/v1/me/top/tracks?limit=${limit}&time_range=short_term`, 
            { headers:headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}

/* medium term */
export async function getTopTracksMediumTerm(limit:number = 10, token:string) {
    try{
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
        const res = await axios.get(
            `https://api.spotify.com/v1/me/top/tracks?limit=${limit}&time_range=medium_term`,  
            { headers:headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}
/* long term */
export async function getTopTracksLongTerm(limit : number = 10, token:string) {
    try{
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
        const res = await axios.get(
            `https://api.spotify.com/v1/me/top/tracks?limit=${limit}&time_range=long_term`,  
            { headers:headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}

/* Get Single Artist */
export async function getSingleArtist(artistId : string, token:string) {
    try{
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
        const res = await axios.get(
            `https://api.spotify.com/v1/artists/${artistId}`,
            { headers:headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}

export async function getRecentlyPlayed(limit : number = 10, token:string) {
    try{
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
        const res = await axios.get(
            `https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`,
            { headers:headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}

/* Single Track */
export async function getSingleTrack(trackId : string, token:string) {
    try{
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
        const res = await axios.get(
            `https://api.spotify.com/v1/tracks/${trackId}`,
            { headers:headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}
/* Get Track Features */
export async function getTrackFeatures(trackId : string, token:string) {
    try{
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
        const res = await axios.get(
            `https://api.spotify.com/v1/audio-features/${trackId}`,
            { headers:headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}
/* Get Track Audio Analysis */
export async function getTrackAnalysis(trackId : string, token:string) {
    try{
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
        const res = await axios.get(
            `https://api.spotify.com/v1/audio-analysis/${trackId}`,
            { headers:headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}

/* playlists */
export async function getPlaylists(token:string){
    try{ 
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
        const res = await axios.get(
            `https://api.spotify.com/v1/me/playlists`, 
            { headers:headers }
        );
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}

export async function getPlaylist(playlistId:string, token:string){
    try{
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
        const res = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, { headers:headers });
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}

export async function getPlaylistTracks(playlistId:string, token:string){
    try{
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
        const res = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, { headers:headers });
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}

/* Recomendations */
export async function getRecomendations(tracks : string, token:string){
    try{
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
        const seed_tracks = tracks;
        const seed_artists = '';
        const seed_genres = '';
        const res = await axios.get(
            `https://api.spotify.com/v1/recommendations?seed_tracks=${
                seed_tracks}&seed_artists=${
                seed_artists}&seed_genres=${
                seed_genres}`, 
            { headers:headers });
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}

/* Create */
// * Create a Playlist (The playlist will be empty until you add tracks)
export const createPlaylist = async(userId:string | undefined, name:string | undefined, token:string )=>{
    try{
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
        const url = `https://api.spotify.com/v1/users/${userId}/playlists`;
        const data = JSON.stringify({ name });
        const res = await axios({ method: 'post', url, headers:headers, data });
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}

export const addTracksToPlaylist = async (playlistId : string | null, uris : string | undefined, token:string)=>{
    try{
        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
        const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=${uris ? uris : ''}`;
        const res = await axios({ method: 'post', url, headers:headers });
        return res.data;
    }catch(err){
        console.log(err);
        throw err;
    }
}
