import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ITrackCard {
    icon: string,
    title: string,
    subtitle: string,
    route: string,
    album: string,
}

const TrackCard = ({ icon, title, subtitle,album, route }:ITrackCard) => {
  return (
    <>
        <Link href={route}>
            <div className="flex space-x-5">    
                <div className=" py-2">
                    <Image 
                        height={50} 
                        width={50} 
                        src={icon} 
                        alt="artist"
                    ></Image> 
                </div>
                <div className="">
                    <p className='text-white hover:underline'>{title}</p>
                    <div className=" flex text-zinc-500">
                        <p >{subtitle}</p>
                        <p>{'\xa0-\xa0'}</p>
                        <p >{album}</p>
                    </div>
                    
                </div>
            </div>
        </Link>
    </>
  )
}

export default TrackCard