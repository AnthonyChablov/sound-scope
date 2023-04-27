import axios from 'axios';
import { getHashParams } from '../utils';

/* TOKENS */
const EXPIRATION_TIME = 3600 * 1000; // 3600 seconds * 1000 = 1 hour in milliseconds

function setTokenTimestamp(){
    window.localStorage.setItem('spotify_token_timestamp', Date.now().toString() );
}

function setLocalAccessToken(){
    setTokenTimestamp();
    window.localStorage.setItem('spotify_access_token', token);
}

function setLocalRefreshToken(token:string){
    window.localStorage.setItem('spotify_refresh_token', token);
}

function getTokenTimestamp(){
    window.localStorage.getItem('spotify_token_timestamp')
}

function getLocalAccessToken(){
    window.localStorage.getItem('spotify_access_token');
}

function getLocalRefreshToken(){
    window.localStorage.getItem('spotify_refresh_token');
}

export const token = getAccessToken();


// Refresh the token
export async function refreshAccessToken(){
  try {
    const { data } = await axios.get(`/refresh_token?refresh_token=${getLocalRefreshToken()}`);
    const { access_token } = data;
    setLocalAccessToken(access_token);
    window.location.reload();
    return;
  } catch (e) {
    console.error(e);
  }
};

// Get access token off of query params (called on application init)
export function getAccessToken() {
  const { error, access_token, refresh_token } = getHashParams();

  if (error) {
    console.error(error);
    refreshAccessToken();
  }

  // If token has expired
  if ((Date.now() - getTokenTimestamp()) > EXPIRATION_TIME) {
    console.warn('Access token has expired, refreshing...');
    refreshAccessToken();
  }

  const localAccessToken = getLocalAccessToken();

  // If there is no ACCESS token in local storage, set it and return `access_token` from params
  if ((!localAccessToken || localAccessToken === 'undefined') && access_token) {
    setLocalAccessToken(access_token);
    setLocalRefreshToken(refresh_token);
    return access_token;
  }

  return localAccessToken;
};

export const logout = () => {
  window.localStorage.removeItem('spotify_token_timestamp');
  window.localStorage.removeItem('spotify_access_token');
  window.localStorage.removeItem('spotify_refresh_token');
  window.location.reload();
};