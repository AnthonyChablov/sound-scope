import { getHashParams } from "@/utils/utils";


/* Token */
export const token = (typeof window !== 'undefined') ? getSpotifyAccessToken() : '';
export const refresh_token = (typeof window !== 'undefined') ? getRefreshToken() : '';

/* Headers */
export const headers = {
    
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
};

export const refreshHeaders = {
    grant_type: 'refresh_token',
    refresh_token: refresh_token,
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
}

/* Token Helpers */

/* Access Token */
/* Get */
export function getSpotifyAccessToken(){
    return window.localStorage.getItem('spotify_api_token');
}
/* Set */
export function setSpotifyAccessToken(token:string){
    window.localStorage.setItem('spotify_api_token', token);
}

/* Refresh Token */
/* Get */
export function getRefreshToken(){
    return window.localStorage.getItem('spotify_api_refresh_token');
}
/* Set */
export function setSpotifyRefreshToken(token:string){
    window.localStorage.setItem('spotify_api_refresh_token', token);
}

export function extractAccessToken(){
    const { error, access_token, refresh_token } = getHashParams();
    return access_token;
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

/* Logout */
export function logout(){
    
    
    
} 