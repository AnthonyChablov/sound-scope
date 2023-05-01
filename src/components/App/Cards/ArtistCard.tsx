import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface IArtistCard{
    icon: string,
    title: string,
    route: string,
}

const ArtistCard = ({icon, title, route}: IArtistCard) => {
  return (  
    <Link href={ route } rel="noopener noreferrer" target="_blank">
        <div className='flex flex-row space-x-8 items-center'>
            {/* Artists Image */}
            <div className="rounded-full overflow-hidden ">
                <Image 
                  height={50} 
                  width={50} 
                  src={icon} 
                  alt="artist"
                ></Image> 
            </div>
            {/* Artists Name */}
            <p className='text-white font-bold hover:underline cursor-'>{title}</p>
        </div>
    </Link>
  )
}

export default ArtistCard