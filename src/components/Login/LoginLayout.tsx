import React , {useEffect} from 'react';
import { useStateStore } from '@/store/useAppStore';
import Card from './Card/Card';
import { useRouter } from 'next/router'
import { Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import girlSpotify from '../../assets/girl-spotify-img.jpg';
import manSpotify from '../../assets/man-spotify-img.jpg';
import girlComputerSpotify from '../../assets/girl-computer-spotify-img.jpg';
import { setAccessToken } from '@/spotifyApi/spotifyToken';

const LoginLayout = () => {

  /* State */
  const spotifyToken = useStateStore(state => state.spotifyToken);
  const setSpotifyToken = useStateStore(state => state.setSpotifyToken);

  /* Constants */
  const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;
  const RESPONSE_TYPE = process.env.NEXT_PUBLIC_RESPONSE_TYPE;
  const AUTH_ENDPOINT = process.env.NEXT_PUBLIC_AUTH_ENDPOINT;
  
  /* Create end point needed for retrieving spotify token */
  const spotifyEndPoint = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${
        RESPONSE_TYPE}`;

  /* Route */
  const router = useRouter()

  useEffect(() => {
    
    let access_token = setAccessToken();

    if(spotifyToken){
      window.location.reload();
      router.push('/app');
    }
    
    setSpotifyToken(access_token);
    
  }, [spotifyToken]);


  return (
    <div className=' h-screen opacity-100 bg-fuchsia-700'>
        {/* container */}
        <div className="bg-fuchsia-700 h-full pt-32 max-w-5xl mx-auto w-screen px-9 
          md:flex md:justify-between "
        >
            <div className="w-full sm:w-7/12  md:flex md:flex-col md:pt-[10%]">
                {/* header */}
                <h1 className='text-yellow-300 text-6xl font-bold mb-5'>
                    Login
                </h1>
                {/* text */}
                <p className='text-bold text-yellow-300 text-lg font-semibold mb-7'>
                    Get Started Now, Login to Spotify to view your listening history, favourite artists, playlists and top tracks. 
                </p>
                {/* Login */}
                <Button 
                    className='bg-yellow-400 rounded-full text-fuchsia-700 
                    font-semibold text-md hover:bg-fuchsia-300 w-fit'
                    variant="contained"
                >
                    <Link href={spotifyEndPoint}>Login to Spotify</Link>
                </Button>
            </div>
            <div className="mt-20 flex items-center justify-center md:mt-0 mx-auto md:justify-end relative">
              <div className="rounded-full overflow-hidden ">
                <Image
                    src={girlSpotify}
                    width={300}
                    height={100}
                    alt='girl on phone'
                ></Image>
              </div>
              {/* <div className="rounded-full overflow-hidden absolute top-20 left-20">
                <Image
                    src={manSpotify}
                    width={150}
                    height={50}
                    alt='man excercising'
                ></Image>
              </div>
              <div className="rounded-full overflow-hidden">
                <Image
                    src={girlComputerSpotify}
                    width={100}
                    height={100}
                    alt='girl on computer'
                ></Image>
              </div> */}
            </div>
        </div>
    </div>
  )
}

export default LoginLayout