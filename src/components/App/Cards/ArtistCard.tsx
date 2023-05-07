import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface IArtistCard{
    icon: string,
    title: string,
    route: string,
    mode?: string
}

const ArtistCard = ({icon, title, route, mode}: IArtistCard) => {
  return (  
    <Link href={ route } rel="noopener noreferrer" target="_blank">
        <div className={`flex items-center 
          ${mode === 'top-artists' 
            ? 'flex-col space-x-0' 
            : 'flex-row space-x-8' 
          }`}
        >
          {/* Artists Image */}
          <div className=" my-2">
            <div className={`flex items-center overflow-hidden rounded-full 
              ${mode === 'top-artists' 
                ? "w-[125px]" 
                : 'w-[50px]'} 
              ${mode === 'top-artists' 
                ? "h-[120px]" 
                : 'h-[50px]'} 
            `}>
              <Image 
                  height= {mode === 'top-artists' ? 120 : 50 } 
                  width={mode === 'top-artists' ? 140 : 50} 
                  src={icon} 
                  alt="artist"
              ></Image> 
            </div>
          </div>
          {/* Artists Name */}
          <p className={`text-white hover:underline cursor-pointer 
            ${mode === 'top-artists' ? 'font-semibold mt-2 mb-10' : 'font-bold'}`
          }>{title}</p>
        </div>
    </Link>
  )
}

export default ArtistCard