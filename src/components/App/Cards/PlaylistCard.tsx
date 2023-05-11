import React ,{useState} from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import InfoIcon from './InfoIcon/InfoIcon';


interface IPlaylistCard {
    id: number,
    icon: string,
    title: string,
    subtitle: string,
    route: string,
}


const PlaylistCard = ({id, icon, title, subtitle, route }:IPlaylistCard) => {

    /* State */
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
                duration: .5,
                delay: 0.1 * id,
                ease: 'easeInOut'
            }
        }
    }

    return (
        <motion.div 
            variants={cardVariants}
            initial={'hidden'}
            animate ={'visible'}
            viewport={{ once: true }}
        >
            <Link href={route}>
                <div className="flex flex-col items-center mb-12 ">
                    
                    <div className="hover:opacity-40 transition duration-300 ease-in-out relative"
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                    >
                        <InfoIcon 
                            isShown={isShown} 
                            mode='top-artists'
                        />
                        { /* info icon */
                            icon 
                                ? <Image src={icon} height={50} width={200} alt='playlist' unoptimized={true}></Image>
                                : <div className='h-[200px] w-[200px] bg-slate-700 '></div>
                        }
                    </div>
                    <p className='text-white font-normal mt-5 mb-2 text-center w-28 truncate hover:underline'>{title}</p>
                    <p className='text-slate-500 text-sm font-semibold'>{subtitle}</p>
                </div>
                
            </Link>
        </motion.div>
  )
}

export default PlaylistCard