import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { msToTime } from '@/utils/utils';

interface ITrackCard {
    icon: string,
    title: string,
    subtitle: string,
    route: string,
    album: string,
    duration:number,
    mode?: string
}

const TrackCard = ({ icon, title, subtitle,album, route, duration, mode }:ITrackCard) => {

    const [trackDuration, setTrackDuration] = useState<string>('');

    useEffect(()=>{
        const time = msToTime(duration);
        setTrackDuration(time);
    },[duration])

  return (
    <>
        <Link href={route}>
            <div className="flex justify-between w-full ">    
                <div className="flex space-x-8 items-center truncate">
                    <div className=" my-2 w-[50]">
                        <Image 
                            height={50} 
                            width={50} 
                            src={icon} 
                            alt="artist"
                        ></Image> 
                    </div>
                    <div className="truncate">
                        <p className='text-white hover:underline truncate'>{title}</p>
                        <div className=" text-zinc-400 truncate">
                            {subtitle}
                            {'\xa0-\xa0'}
                            {album}
                        </div>
                    </div>
                </div>
                    
                <div className="text-zinc-400 my-2 ml-4">{trackDuration}</div>
                
            </div>
            
        </Link>
    </>
  )
}

export default TrackCard