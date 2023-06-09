import React, {useEffect, useState} from 'react';
import useSWR from 'swr';
import { motion } from 'framer-motion';
import ToggleHeader from '../ToggleHeader/ToggleHeader';
import { getRecentlyPlayed } from '@/spotifyApi/spotifyApi';
import TrackCard from '../Cards/TrackCard';
import LoadingLayout from '@/components/Loading/LoadingLayout';
import { IRecent } from '@/models/recent';
import ErrorLayout from '@/components/Error/ErrorLayout';
import useLoading from '@/hooks/useLoading';
import { useStateStore } from '@/store/useAppStore';
import { getStorageSpotifyAccessToken } from '@/spotifyApi/spotifyToken';
import { headerVariants } from '@/variant';

const RecentLayout = () => {

  /*  State */
  const spotifyToken = getStorageSpotifyAccessToken() ?? '';
  const setSpotifyToken = useStateStore(state => state.setSpotifyToken);

  /* Hooks */
  const {loading} = useLoading()

  /* Fetch Data */
  const {
    data: recentlyPlayed, 
    error : isErrorRecentlyPlayed, 
    isLoading : isLoadingRecentlyPlayed
  } = useSWR('recentlyPlayed',  () => getRecentlyPlayed(30, spotifyToken),
  {
    revalidateOnFocus: false,
  });

  useEffect(()=>{
    setSpotifyToken(getStorageSpotifyAccessToken());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className='w-10/12  md:w-8/12 lg:w-9/12 xl:w-9/12 mx-auto mb-32 
    md:max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl'
    >
      <div className="md:mt-11">
        {
          /* Error */
          (isErrorRecentlyPlayed)
            ? (<ErrorLayout error={isErrorRecentlyPlayed}/>)
            /* Loading */
            : 
              (isLoadingRecentlyPlayed || loading
                ? (<LoadingLayout />)
                : (
                    <div
                      
                    >
                      <ToggleHeader header='Recently Played Tracks' mode='hidden'/>
                      <motion.div
                        className='space-y-3'
                        variants={headerVariants}
                        initial={'hidden'}
                        whileInView={'visible'}
                      >
                        {recentlyPlayed?.items?.map((track:IRecent, i:number)=>{
                            return (
                              <TrackCard
                                key={i}
                                id={i}
                                icon={track.track.album.images[2].url}
                                title={track.track.name}
                                subtitle={track.track.artists[0].name}
                                album={track.track.album.name}
                                route={`/app/track/${track.track.id}`}
                                duration={track.track.duration_ms}
                              />
                            )
                        })}
                      </motion.div>
                    </div>
                  )
              )
        }
      </div>
    </div>
  )
}

export default RecentLayout