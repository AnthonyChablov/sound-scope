import { getHashParams } from "@/utils/utils";

/* Token */
export const token = (typeof window !== 'undefined') ? getStorageSpotifyAccessToken() : '';

/* Headers */
export const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
};

/* Token Helpers */
/* Access Token */
/* Get */
export function getStorageSpotifyAccessToken(){
    return (typeof window !== 'undefined') ? window.localStorage.getItem('spotify_api_token') : '';
}
/* Set */
export function setStorageSpotifyAccessToken(token:string){
    window.localStorage.setItem('spotify_api_token', token);
}

export function removeStorageSpotifyAccessToken(){
    window.localStorage.removeItem('spotify_api_token');
}

/* Logout */
export function logout(){
    removeStorageSpotifyAccessToken();
} 