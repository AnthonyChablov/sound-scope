import { getHashParams } from "@/utils/utils";

/* Helper Functions */
export function setSpotifyAccessToken(token:string){
    window.localStorage.setItem('spotify_token', token);
}

export function getSpotifyAccessToken(){
    window.localStorage.getItem('spotify_token');
}


/* Functions */
// Get access token off of query params (called on application init) and user login
export function setAccessToken(){
    const { error, access_token, refresh_token } = getHashParams();
    setSpotifyAccessToken(access_token);
    return access_token;
}

export function logout(){
    setSpotifyAccessToken('');
    window.localStorage.removeItem('spotify_token');

} 

