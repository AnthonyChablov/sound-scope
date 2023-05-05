import React from 'react'
import Button from '@mui/material/Button';
import Image from 'next/image';
import placeholder from '../../../assets/webimage-CFCF5ECC-63CC-421D-AA5A1806A936CC97.png';
import Link from 'next/link';

const Hero = () => {
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
                    View your Spotify profile and listening history. Keep up 
                    with your listening habits and stay up-to-date with your favorite artists
                </p>
                {/* get started */}
                <Link href="/login">
                <Button 
                    className='bg-yellow-400 rounded-full text-fuchsia-700 
                    font-semibold text-md hover:bg-fuchsia-300 w-fit'
                    variant="contained"
                >
                    Get Started
                </Button>
                </Link>
            </div>
            <div className="mt-20 flex items-center justify-center md:mt-0 mx-auto md:justify-end">
                <Image
                    src={placeholder}
                    width={275}
                    height={100}
                    alt='spotify phone'
                ></Image>
            </div>
        </div>
    </div>
  )
}

export default Hero