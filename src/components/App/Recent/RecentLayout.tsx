import React, {useEffect} from 'react';
import useSWR from 'swr';
import ToggleHeader from '../ToggleHeader/ToggleHeader';
import { getRecentlyPlayed } from '@/spotifyApi/spotifyApi';
import TrackCard from '../Cards/TrackCard';
import LoadingLayout from '@/components/Loading/LoadingLayout';
import { IRecent } from '@/models/recent';
import ErrorLayout from '@/components/Error/ErrorLayout';

const RecentLayout = () => {

  /* Fetch Data */
  const {
    data: recentlyPlayed, 
    error : isErrorRecentlyPlayed, 
    isLoading : isLoadingRecentlyPlayed
  } = useSWR('recentlyPlayed',  () => getRecentlyPlayed(30) );

  useEffect(()=>{
    console.log(recentlyPlayed);
  },[recentlyPlayed])

  return (
    <div className='w-10/12 md:w-9/12 lg:w-full mx-auto mb-32
      md:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl'
    >
      <ToggleHeader header='Recently Played Tracks' mode='hidden'/>
      <div className="space-y-3  md:mt-11">
        {
          /* Error */
          (isErrorRecentlyPlayed)
            ? (<ErrorLayout />)
            /* Loading */
            : 
              (isLoadingRecentlyPlayed 
                ? (<LoadingLayout />)
                : (recentlyPlayed?.items?.map((track:IRecent, i:number)=>{
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
                  }))
              )
        }
      </div>
    </div>
  )
}

export default RecentLayout