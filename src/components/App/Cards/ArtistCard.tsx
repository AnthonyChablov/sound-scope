import React from 'react';
import Link from 'next/link';
import { link } from 'fs';

interface IArtistCard{
    icon: string,
    title: string,
    route: string,
}

const ArtistCard = ({icon, title, route}: IArtistCard) => {
  return (  
    <Link href={ route }>
        <div className='flex flex-row space-x-4 items-center'>
            {/* Artists Image */}
            <div className="bg-white p-3 rounded-full">
                <img src={''} alt="123" />
            </div>
            {/* Artists Name */}
            <p className='text-white font-bold hover:underline cursor-'>{title}</p>
        </div>
    </Link>
  )
}

export default ArtistCard