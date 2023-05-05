/* Spotify endpoint */
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;
const RESPONSE_TYPE = process.env.NEXT_PUBLIC_RESPONSE_TYPE;
const AUTH_ENDPOINT = process.env.NEXT_PUBLIC_AUTH_ENDPOINT;
const SCOPES = process.env.NEXT_PUBLIC_SPOTIFY_SCOPES;

export const spotifyEndPoint = `${
    AUTH_ENDPOINT}?client_id=${
    CLIENT_ID}&redirect_uri=${
    REDIRECT_URI}&response_type=${
    RESPONSE_TYPE}&scope=${SCOPES}`;