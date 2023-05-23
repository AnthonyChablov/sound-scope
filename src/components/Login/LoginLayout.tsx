import React , {useState, useEffect} from 'react';
import { useStateStore } from '@/store/useAppStore';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'
import { Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import girlSpotify from '../../assets/girl-spotify-img.jpg';
import {setStorageSpotifyAccessToken, getStorageSpotifyAccessToken, } from '@/spotifyApi/spotifyToken';
import { spotifyEndPoint } from '@/spotifyApi/spotifyEndPoint';
import { headerVariants, subHeaderVariants} from '@/variant';

const LoginLayout = () => {

  /* State */
  const setSpotifyToken = useStateStore(state => state.setSpotifyToken);
  const spotifyToken = useStateStore(state => state.spotifyToken);
  const [loading, setLoading] = useState<boolean>(false);

  /* Route */
  const router = useRouter();

  /* Set Access Token and redirect */
  useEffect(() => {
    
    const hash = window.location.hash;  // get token from hash params of url
    let token = getStorageSpotifyAccessToken(); // get token from local storage

    if(!token && hash) {
      token = hash
        ?.substring(1)
        ?.split("&")
        ?.find(elem => elem
          .startsWith('access_token'))
        ?.split('=')[1] 
          ?? null;
      setSpotifyToken(token);
      setStorageSpotifyAccessToken(spotifyToken);
      router.push('/app'); 
    } 

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spotifyToken]);

  return (
    <div className=' h-screen opacity-100 bg-zinc-900 '>
        <div className="bg-zinc-900  h-fit w-screen pt-40 md:pt-32 max-w-6xl mx-auto px-9 
          md:flex md:justify-between md:space-x-14"
        >
            {/* Content */}
            <motion.div className="w-full sm:w-9/12 md:w-6/12  md:flex md:flex-col md:pt-[10%]"
              variants={headerVariants}
              initial={'hidden'}
              animate={'visible'}
            >
                {/* Header */}
                <h1 className='text-slate-300 text-6xl font-bold mb-5'>
                  Login
                </h1>
                {/* Text */}
                <p className='text-bold text-slate-300 text-lg font-semibold mb-7'>
                  Get Started Now, Login to Spotify to view your listening history, favourite artists, playlists and top tracks. 
                </p>
                {/* Login To Spotify */}
                <div className="w-fit" >
                  <Link href={spotifyEndPoint}>
                    <Button 
                        className='bg-slate-400 rounded-full text-black
                        font-semibold text-md hover:bg-slate-600 hover:text-slate-200 w-fit'
                        variant="contained"
                    >
                      Login To Spotify
                    </Button>
                  </Link>
                </div>
            </motion.div>
            <motion.div className="mt-20 flex items-center justify-center md:mt-14 md:justify-end"
              variants={subHeaderVariants}
              initial={'hidden'}
              animate={'visible'}
            >
              <div className="rounded-full overflow-hidden h-fit mb-10 shadow-lg bg-gradient-to-r from-slate-500 to-zinc-900" >
                  <Image
                      className='opacity-30'
                      src={girlSpotify}
                      width={450}
                      height={100}
                      alt='girl on phone'
                  ></Image>
              </div>
            </motion.div>
        </div>
    </div>
  )
}

export default LoginLayout