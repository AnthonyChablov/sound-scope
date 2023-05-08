import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InfoIcon from './InfoIcon/InfoIcon';

interface IArtistCard{
    icon: string,
    title: string,
    route: string,
    mode?: string
}

const ArtistCard = ({icon, title, route, mode}: IArtistCard) => {

  const [isShown, setIsShown] = useState(false);

  return (  
    <Link href={ route } rel="noopener noreferrer" target="_blank">
        <div className={`flex items-center 
          ${mode === 'top-artists' 
            ? 'flex-col space-x-0' 
            : 'flex-row space-x-8' 
          }`}
        >
          {/* Artists Image */}
          <div className=" my-2 relative">
            {/* Info icon popup */}
            <InfoIcon 
              isShown={isShown} 
              mode={mode}
            />
            {/* content */}
            <div className={`flex items-center overflow-hidden rounded-full 
               hover:opacity-30 transition duration-300 ease-in-out  
              ${mode === 'top-artists' 
                ? "w-[200px]" 
                : 'w-[50px]'} 
              ${mode === 'top-artists' 
                ? "h-[200px]" 
                : 'h-[50px]'} 
            `}
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >  
              <Image
                  className="w-full h-auto" 
                  height= {mode === 'top-artists' ? 200 : 50 } 
                  width={mode === 'top-artists' ? 200 : 50} 
                  src={icon} 
                  alt="artist"
              ></Image> 
            </div>
          </div>
          {/* Artists Name */}
          <p className={`text-white hover:underline cursor-pointer text-center truncate
            ${mode === 'top-artists' ? 'font-semibold mt-5 mb-10' : 'font-bold'}`
          }>{title}</p>
        </div>
    </Link>
  )
}

export default ArtistCard