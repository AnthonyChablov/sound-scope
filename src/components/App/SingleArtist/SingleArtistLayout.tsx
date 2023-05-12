import React from 'react';
import useSWR from 'swr';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import useWindowWidth from '@/hooks/useWindowWidth';
import Link from 'next/link';
import Sidebar from '@/components/App/Sidebar/Sidebar';
import Image from 'next/image';
import { getSingleArtist } from '@/spotifyApi/spotifyApi';
import SubHeader from './SubHeader/SubHeader';
import ErrorLayout from '@/components/Error/ErrorLayout';
import LoadingLayout from '@/components/Loading/LoadingLayout';
import { headerVariants, subHeaderVariants } from '@/variant';

const SingleArtistLayout = () => {

  /* Hooks */
  const router = useRouter();
  const artistId = router.query.artistId;
  const width = useWindowWidth();

  /* Fetch Data */
  const {
    data: singleArtist, 
    error : isErrorSingleArtist, 
    isLoading: isLoadingSingleArtist,
  } = useSWR('singleArtist', ()=> getSingleArtist(String(artistId)));

  return (
    <div>
      <Sidebar />
      {
        (isErrorSingleArtist) 
          ? <ErrorLayout /> 
          : isLoadingSingleArtist 
            ? (<LoadingLayout /> )
            : (<div className="h-screen flex items-center justify-center w-7/12 
                md:w-7/12 lg:w-6/12 xl:w-5/12 mx-auto">
                <div className="flex flex-col items-center ">
                  <motion.div className={`rounded-full overflow-hidden ${width >= 800 ? 'h-[350px]' : 'h-[250px]'} `}
                    variants={headerVariants}
                    initial={'hidden'}
                    animate={'visible'}
                  >
                    <Image 
                      src={singleArtist?.images[0].url}
                      height={50} 
                      width={width >= 800 ? 350 : 250} 
                      alt='artist'
                      loading="lazy"
                      unoptimized={true}
                    >
                    </Image> 
                  </motion.div>
                  <Link 
                    href={singleArtist?.external_urls.spotify}  
                    rel="noopener noreferrer" 
                    target="_blank"
                  >
                    <motion.h1 className="font-bold text-3xl md:text-5xl hover:text-[#1db954]
                      text-slate-200 mt-10 mb-5 text-center "
                      variants={headerVariants}
                      initial={'hidden'}
                      animate={'visible'}
                    >
                      {singleArtist?.name}
                    </motion.h1>
                  </Link>
                  <motion.div className="flex flex-col space-y-6 items-center justify-center
                    md:flex-row md:space-x-10 md:space-y-0 md:items-start mt-2 md:mt-6"
                    variants={subHeaderVariants}
                    initial={'hidden'}
                    animate={'visible'}
                  >
                    <SubHeader 
                      info={singleArtist?.followers.total.toLocaleString("en-US")} 
                      subHeader={'Followers'} 
                    />
                    <SubHeader 
                      info={
                          singleArtist?.genres.length === 0 
                            ? 'Music' 
                            : singleArtist?.genres.join(', ')
                        } 
                      subHeader={'Genres'} 
                    />
                    <SubHeader 
                      info={
                          !singleArtist?.popularity 
                            ? '5%' 
                            : singleArtist?.popularity.toString() + '%'
                        } 
                      subHeader={'popularity'} 
                    />
                  </motion.div>
                </div>
              </div>
              )
        }
    </div>
  )
}

export default SingleArtistLayout