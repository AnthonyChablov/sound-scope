import React, {useState, useEffect} from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { useArtistStore } from '@/store/useArtistStore';
import { IArtistLongTerm } from '@/models/artists';
import useWindowWidth from '@/hooks/useWindowWidth';
import Sidebar from '@/components/App/Sidebar/Sidebar';
import Image from 'next/image';
import { getSingleArtist } from '@/spotifyApi/spotifyApi';
import SubHeader from './SubHeader/SubHeader';
import ErrorLayout from '@/components/Error/ErrorLayout';
import LoadingLayout from '@/components/Loading/LoadingLayout';

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

  useEffect(() => {
    console.log(singleArtist)
  }, [singleArtist])

  return (
    <div>
      <Sidebar />
      {
        (isErrorSingleArtist) 
          ? <ErrorLayout /> 
          : isLoadingSingleArtist 
            ? (<LoadingLayout /> )
            : (<div className="h-screen flex items-center justify-center w-10/12 md:w-7/12 lg:w-full mx-auto">
                <div className="flex flex-col items-center">
                  <div className="rounded-full overflow-hidden">
                    <Image 
                      src={singleArtist?.images[0].url}
                      height={50} 
                      width={width >= 800 ? 350 : 250} 
                      alt='artist'
                      loading="lazy"
                      unoptimized={true}
                    >
                    </Image> 
                  </div>
                  <h1 className="font-bold text-3xl md:text-5xl 
                    text-slate-200 mt-10 mb-5 text-center "
                  >
                    {singleArtist?.name}
                  </h1>
                  <div className="flex flex-col space-y-6 items-center justify-center
                    md:flex-row md:space-x-6 md:space-y-0 md:items-start mt-2 md:mt-6"
                  >
                    <SubHeader 
                      info={singleArtist?.followers.total.toString()} 
                      subHeader={'Followers'} 
                    />
                    <SubHeader 
                      info={singleArtist?.genres.join(', ')} 
                      subHeader={'Genres'} 
                    />
                    <SubHeader 
                      info={singleArtist?.popularity.toString() + '%'} 
                      subHeader={'popularity'} 
                    />
                  </div>
                </div>
              </div>
              )
        }
    </div>
  )
}

export default SingleArtistLayout