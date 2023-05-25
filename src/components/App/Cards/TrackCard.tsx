import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { msToTime } from '@/utils/utils';
import SpotifyLogoDisplay from '@/components/Common/SpotifyLogoDisplay';

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

const TrackCard = ({ id, icon, title, subtitle,album, route, duration, }:ITrackCard) => {

    const [trackDuration, setTrackDuration] = useState<string>('');
    const [isShown, setIsShown] = useState<boolean>(false);

    useEffect(()=>{
        const time = msToTime(duration);
        setTrackDuration(time);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[duration]);

  return (
    <div>
        <Link href={route}>
            <div className="flex justify-between w-full ">    
                <div className="flex space-x-6 items-center truncate ">
                    {/* info icon */}
                    {/* image */}
                    <div className="">
                        <div className=" my-2 min-w-[50px] shadow-lg flex flex-col items-center w-4"
                            onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}
                        >
                            <div className="mb-2 w-full text-left">
                                <SpotifyLogoDisplay width={76}/>
                            </div>
                            <Image 
                                height={50} 
                                width={50} 
                                src={icon} 
                                alt="artist"
                                loading="lazy"
                                unoptimized={true}
                            ></Image> 
                        </div>
                    </div>
                    <div className="truncate w-fit mt-[20px]"> {/* sm:w-80 md:w-96 lg:w-full */}
                        <p className='text-white hover:underline truncate'>{title}</p>
                        <div className=" text-zinc-400 truncate">
                            {subtitle}
                            {'\xa0-\xa0'}
                            {album}
                        </div>
                    </div>
                </div>
                <div className="text-zinc-400 mt-1 ml-4">{trackDuration}</div>
            </div>
        </Link>
    </div>
  );
}

export default TrackCard;