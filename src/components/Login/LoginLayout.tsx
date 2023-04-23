import React from 'react';
import Card from './Card/Card';
import { Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import girlSpotify from '../../assets/girl-spotify-img.jpg';
import manSpotify from '../../assets/man-spotify-img.jpg';
import girlComputerSpotify from '../../assets/girl-computer-spotify-img.jpg';

const LoginLayout = () => {
  return (
    <div className='h-screen bg-fuchsia-700 opacity-100'>
        {/* container */}
        <div className="pt-32 max-w-5xl mx-auto w-screen px-9 md:flex md:justify-between ">
            <div className="w-7/12 md:flex md:flex-col md:pt-[10%]">
                {/* header */}
                <h1 className='text-yellow-300 text-6xl font-bold mb-5'>
                    View
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
                    <Link href="/login">Login to Spotify</Link>
                </Button>
            </div>
            <div className="mt-20 flex items-center justify-center md:mt-0 mx-auto md:justify-end relative">
              <div className="rounded-full overflow-hidden absolute top-0 left-0">
                <Image
                    src={girlSpotify}
                    width={275}
                    height={100}
                    alt='girl on phone'
                ></Image>
              </div>
              <div className="rounded-full overflow-hidden absolute top-20 left-20">
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
                    width={275}
                    height={100}
                    alt='girl on computer'
                ></Image>
              </div>
                
            </div>
        </div>
    </div>
  )
}

export default LoginLayout