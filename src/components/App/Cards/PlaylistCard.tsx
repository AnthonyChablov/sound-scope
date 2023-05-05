import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface IPlaylistCard {
    icon: string,
    title: string,
    subtitle: string,
    route: string,
}


const PlaylistCard = ({ icon, title, subtitle, route }:IPlaylistCard) => {
  return (
    <div className=''>
        <Link href={route}>
            <div className="flex flex-col items-center mb-12">
                {
                    icon 
                        ? <Image src={icon} height={50} width={200} alt='playlist'></Image>
                        : <div className='h-[200px] w-[200px] bg-slate-700 '></div>
                }
                <p className='text-white font-normal mt-5 mb-2 text-center w-28 truncate'>{title}</p>
                <p className='text-slate-500 text-sm font-semibold'>{subtitle}</p>
            </div>
            
        </Link>
    </div>
  )
}

export default PlaylistCard