import React, {useEffect} from 'react';
import useSWR from 'swr';
import ToggleHeader from '../ToggleHeader/ToggleHeader';
import { getRecentlyPlayed } from '@/spotifyApi/spotifyApi';
import TrackCard from '../Cards/TrackCard';
import LoadingLayout from '@/components/Loading/LoadingLayout';
import { IRecent } from '@/models/recent';
import { ITrackLongTerm } from '@/models/tracks';

const RecentLayout = () => {

  /* Fetch Data */
  const {
    data: recentlyPlayed, 
    error : isErrorRecentlyPlayed, 
    isLoading : isLoadingRecentlyPlayed
  } = useSWR('recentlyPlayed',  () => getRecentlyPlayed(2) );

  useEffect(()=>{
    /* console.log(recentlyPlayed.items[0]?.track?.name); */
  },[recentlyPlayed])

  return (
    <div className='w-10/12 md:w-9/12 lg:w-full mx-auto mb-32 
      md:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl'
    >
      <ToggleHeader header='Recently Played Tracks' mode='hidden'/>
      <div className="space-x-2 mt-11">
        {
          (isLoadingRecentlyPlayed 
            ? (<LoadingLayout />)
            : (recentlyPlayed?.items.map((track:ITrackLongTerm, i:number)=>{
                return (
                  <TrackCard 
                    key={i} 
                    icon={track?.album?.images[2].url}
                    title={track?.name}
                    subtitle={track?.artists?.name}
                    album={track?.album?.name}
                    duration={ track?.duration_ms}
                    route='/'
                    mode='top-tracks'
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