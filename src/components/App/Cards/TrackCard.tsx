import React from 'react';
import Link from 'next/link';

interface ITrackCard {
    icon: string,
    title: string,
    subtitle: string,
    route: string,

}

const TrackCard = ({ icon, title, subtitle, route }:ITrackCard) => {
  return (
    <>
        <Link href={route}>
            <div className="flex space-x-5">    
                <div className="bg-white px-4 py-2">
                    {icon}
                </div>
                <div className="">
                    <p className='text-white hover:underline'>{title}</p>
                    <p className='text text-zinc-500'>{subtitle}</p>
                </div>
            </div>
        </Link>
    </>
  )
}

export default TrackCard