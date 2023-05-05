import { getHashParams } from "@/utils/utils";

/* Token */
export const token = (typeof window !== 'undefined') ? getSpotifyAccessToken() : '';

/* Headers */
export const headers = {
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

export function getRefreshToken(){
    return window.localStorage.getItem('spotify_api_refresh_token');
}

export function setSpotifyRefreshToken(token:string){
    window.localStorage.setItem('spotify_api_refresh_token', token);
}

export function getSpotifyTokenExpiry(){
    const { error, access_token, refresh_token } = getHashParams();
    setSpotifyRefreshToken(refresh_token);
    return refresh_token;
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