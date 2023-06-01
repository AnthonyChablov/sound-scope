import React from 'react';
import Link from 'next/link';
import Button from "@mui/material/Button";
import Icons from './Icons';

interface ISpotifyButton {
    text:string,
    size:number,
    link: string,
    color: string,
}

const SpotifyButton = ({text, size, link , color} : ISpotifyButton) => {
  return (
    <Link 
        href={link}
        rel="noopener noreferrer" 
        target="_blank"
    >
        <Button 
            className='bg-slate-100 rounded-3xl text-black flex items-center justify-center
            font-semibold text-md hover:bg-slate-200 w-fit px-4 py-2'
            variant="contained"
        >
            { <Icons type={'spotify'} size={size} color={color}/>}
            <p className='ml-3 text-sm'>{text}</p>
        </Button>
    </Link>
  )
}

export default SpotifyButton;