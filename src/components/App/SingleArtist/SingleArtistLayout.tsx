import React, {useState, useEffect} from 'react';
import useSWR from 'swr';
import SpotifyButton from '@/components/Common/SpotifyButton';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import useWindowWidth from '@/hooks/useWindowWidth';
import Link from 'next/link';
import Image from 'next/image';
import { getSingleArtist } from '@/spotifyApi/spotifyApi';
import SubHeader from './SubHeader/SubHeader';
import ErrorLayout from '@/components/Error/ErrorLayout';
import LoadingLayout from '@/components/Loading/LoadingLayout';
import { headerVariants, subHeaderVariants } from '@/variant';
import useLoading from '@/hooks/useLoading';
import { getStorageSpotifyAccessToken } from '@/spotifyApi/spotifyToken';
import Icons from '@/components/Common/Icons';
import SpotifyLogoDisplay from '@/components/Common/SpotifyLogoDisplay';

const SingleArtistLayout = () => {

  /* State */
  const spotifyToken = getStorageSpotifyAccessToken() ?? '';

  /* Hooks */
  const router = useRouter();
  const artistId = router.query.artistId;
  const width = useWindowWidth();
  const { loading } =useLoading();

  /* Fetch Data */
  const {
    data: singleArtist, 
    error : isErrorSingleArtist, 
    isLoading: isLoadingSingleArtist,
  } = useSWR(artistId ? 'singleArtist' : null, ()=> getSingleArtist(String(artistId),spotifyToken));

  return (
    <div>
      {
        (isErrorSingleArtist) 
          ? <ErrorLayout error={isErrorSingleArtist}/> 
          : (isLoadingSingleArtist || loading)
            ? (<LoadingLayout /> )
            : (<div className="h-screen mt-20 w-7/12 
                md:w-7/12 lg:w-6/12 xl:w-5/12 mx-auto mb-60">
                <div className="flex flex-col items-center ">
                  <motion.div className=""
                    variants={headerVariants}
                    initial={'hidden'}
                    animate={'visible'}
                  >
                    <SpotifyLogoDisplay width={80}/>
                    <div className={`mt-4 overflow-hidden flex items-center 
                    ${width >= 800 ? 'w-[350px] h-[350px]' : 'w-[250px] h-[250px]'} `}>
                      <Image 
                        src={singleArtist?.images[0].url}
                        height={width >= 800 ? 350 : 250} 
                        width={width >= 800 ? 350 : 250} 
                        alt='artist'
                        loading="lazy"
                        unoptimized={true}
                      >
                      </Image> 
                    </div>
                  </motion.div>
                  <Link 
                    className='mt-10 mb-8 '
                    href={singleArtist?.external_urls.spotify}  
                    rel="noopener noreferrer" 
                    target="_blank"
                  >
                    <motion.div className="flex items-center justify-center space-x-3"
                      variants={headerVariants}
                      initial={'hidden'}
                      animate={'visible'}
                    >
                      <h1 className="font-bold text-3xl md:text-5xl hover:text-green-500
                        text-slate-200 text-center flex items-center justify-center"
                      >
                        {singleArtist?.name}
                      </h1>
                    </motion.div>
                  </Link>
                  {/* Spotify link btn */}
                  <motion.div className=""
                    variants={headerVariants}
                    initial={'hidden'}
                    animate={'visible'}
                  >
                    <SpotifyButton 
                      text='Listen on Spotify' 
                      size={30} 
                      color={'black'} 
                      link={singleArtist?.external_urls.spotify}
                    />
                  </motion.div>
                  {/* <motion.div className="">
                    <SpotifyButton text='Listen on' size={20} link={singleArtist?.external_urls.spotify} />
                  </motion.div> */}
                  <motion.div className="flex flex-col space-y-6 items-center justify-center
                    md:flex-row md:space-x-10 md:space-y-0 md:items-start mt-12"
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