/* Spotify endpoint */
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;
const RESPONSE_TYPE = process.env.NEXT_PUBLIC_RESPONSE_TYPE;
const AUTH_ENDPOINT = process.env.NEXT_PUBLIC_AUTH_ENDPOINT;
const SCOPES = process.env.NEXT_PUBLIC_SPOTIFY_SCOPES;
const STATE = process.env.NEXT_PUBLIC_STATE;
const CODE_CHALLENGE_METHOD = process.env.NEXT_PUBLIC_CODE_CHALLENGE_METHOD;

function generateRandomString(length:number) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }


async function generateCodeChallenge(codeVerifier:string) {
    function base64encode(string:any) {
        return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = (typeof window !== 'undefined') ? await window.crypto.subtle.digest('SHA-256', data) : '';

    return base64encode(digest);
}

const randomStr = generateRandomString(128 );

const codeChallenge = generateCodeChallenge(randomStr);

export const spotifyEndPoint = `${
    AUTH_ENDPOINT}?client_id=${
    CLIENT_ID}&redirect_uri=${
    REDIRECT_URI}&response_type=${
    RESPONSE_TYPE}&scope=${
    SCOPES}&state=${
    STATE}&code_challenge_method=${
    CODE_CHALLENGE_METHOD}&code_challenge=${
    codeChallenge}`;