import React, {useState} from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import InfoIcon from './InfoIcon/InfoIcon';
import SpotifyLogoDisplay from '@/components/Common/SpotifyLogoDisplay';

interface IArtistCard{
    id: number,
    icon: string,
    title: string,
    route: string,
    mode?: string
}

const ArtistCard = ({id, icon, title, route, mode}: IArtistCard) => {

  /* State */
  const [isShown, setIsShown] = useState(false);

  /* framer motion animations */
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
          delay: 0.1 * id,
          ease: 'easeInOut',
          
        }
    }
  }

  return (  
    <div  className='w-fit '
      /* variants={cardVariants}
      initial={'hidden'}
      animate ={'visible'}
      viewport={{ once: true }} */
    >
      <Link href={ route } >
          <div className={`flex items-center 
            ${mode === 'top-artists' 
              ? 'flex-col space-x-0' 
              : 'flex-row space-x-8' 
            }`}
          >
            <div className="">
              <div className="mb-2 w-full text-left">
                <SpotifyLogoDisplay width={76}/>
              </div>
              
              {/* Artist display */}
              <div className=" mt-2 relative">
                {/* Info icon popup */}
                
                {/* content */}
                <div className={`flex items-center overflow-hidden  
                  ${mode === 'top-artists' 
                    ? "w-[200px]" 
                    : 'w-[50px]'} 
                  ${mode === 'top-artists' 
                    ? "h-[200px]" 
                    : 'h-[50px]'} 
                `}
                >  
                  <Image
                      className="w-full h-auto shadow-lg" 
                      height= {mode === 'top-artists' ? 200 : 50 } 
                      width={mode === 'top-artists' ? 200 : 50} 
                      src={icon } 
                      alt='artist-icon'
                      unoptimized={true}
                  ></Image> 
                </div>
              </div>
            </div>
            {/* Artists Name */}
            
            <div className={`text-white hover:underline cursor-pointer text-left w-full truncate text-lg
              ${mode === 'top-artists' ? 'font-semibold mt-5 mb-10' : 'font-bold'}`
            }>
              <p>{title}</p>
            </div>
          </div>
      </Link>
    </div>
  )
}

export default ArtistCard