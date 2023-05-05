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
            <div className="flex justify-between">    
                <div className="flex space-x-8 items-center">
                    <div className=" my-2">
                            <Image 
                                height={50} 
                                width={50} 
                                src={icon} 
                                alt="artist"
                            ></Image> 
                        </div>
                        <div className="">
                            <p className='text-white hover:underline'>{title}</p>
                            <div className=" flex text-zinc-400">
                                <p >{subtitle}</p>
                                <p>{'\xa0-\xa0'}</p>
                                <p >{album}</p>
                            </div>
                        </div>
                </div>
                    
                <div className="text-zinc-400">{trackDuration}</div>
                
            </div>
            
        </Link>
    </>
  )
}

export default TrackCard