import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { msToTime } from '@/utils/utils';
import InfoIcon from './InfoIcon/InfoIcon';

interface ITrackCard {
    id: number,
    icon: string,
    title: string,
    subtitle: string,
    route: string,
    album: string,
    duration:number,
    mode?: string
}

const TrackCard = ({ id, icon, title, subtitle,album, route, duration, mode }:ITrackCard) => {

    const [trackDuration, setTrackDuration] = useState<string>('');
    const [isShown, setIsShown] = useState<boolean>(false);

    const cardVariants={
        hidden:{
            opacity: 0,
            y: id % 2 === 0 ? -10 : -5,
            x: id % 2 === 0 ? -10 : -5
        },
        visible:{
            opacity: 1,
            y: 0,
            x:0,
            transition: {
                duration: 0.5,
                delay: 0.15 * id,
                ease: 'easeInOut'
            }
        }
    }

    useEffect(()=>{
        const time = msToTime(duration);
        setTrackDuration(time);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[duration])

  return (
    <div
        
    >
        <Link href={route}>
            <div className="flex justify-between w-full ">    
                <div className="flex space-x-8 items-center truncate ">
                    {/* info icon */}
                    {/* image */}
                    <div className=" my-2 w-[50]  shadow-lg"
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                    >
                        <Image 
                            height={50} 
                            width={50} 
                            src={icon} 
                            alt="artist"
                            loading="lazy"
                            unoptimized={true}
                        ></Image> 
                    </div>
                    <div className="truncate w-52 "> {/* sm:w-80 md:w-96 lg:w-full */}
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
    </div>
  )
}

export default TrackCard