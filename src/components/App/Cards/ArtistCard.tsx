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
        <div className={`flex flex-row space-x-8 items-center 
          ${mode === 'top-artists' && 'flex-col space-x-0' }`}
        >
            {/* Artists Image */}
            <div className=" my-2">
              <div className="w-[125px] h-[120px] 
                flex items-center overflow-hidden rounded-full"
              >
                <Image 
                    height= {mode === 'top-artists' ? 120 : 50 } 
                    width={mode === 'top-artists' ? 125 : 50} 
                    src={icon} 
                    alt="artist"
                ></Image> 
              </div>
                
            </div>
            {/* Artists Name */}
            <p className={`text-white font-bold hover:underline cursor-pointer 
              ${mode === 'top-artists' && 'font-semibold mt-2 mb-10'}`
            }>{title}</p>
        </div>
    </Link>
  )
}

export default ArtistCard