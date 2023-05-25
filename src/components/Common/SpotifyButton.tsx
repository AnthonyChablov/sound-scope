import React from 'react';
import Link from 'next/link';
import Button from "@mui/material/Button";
import Icons from './Icons';

interface ISpotifyButton{
    text:string,
    size:number,
    link: string,
    color: string,
    displayIcon: boolean
}

const SpotifyButton = ({text, size, link ,color, displayIcon} : ISpotifyButton) => {
  return (
    <Link 
        href={link}
        rel="noopener noreferrer" 
        target="_blank"
    >
        <Button 
            className='bg-slate-400 rounded-3xl text-black
            font-semibold text-md hover:bg-slate-500 hover:text-slate-200 w-fit px-3'
            variant="contained"
        >
            { displayIcon && <Icons type={'spotify'} size={size} color={color}/>}
            <p className='ml-3'>{text}</p>
        </Button>
    </Link>
  )
}

export default SpotifyButton;