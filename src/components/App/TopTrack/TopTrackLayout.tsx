import React, {useEffect} from 'react';
import useSWR from 'swr';
import ToggleHeader from '../ToggleHeader/ToggleHeader';
import { useArtistStore } from "@/store/useArtistStore";
import { useStateStore } from '@/store/useAppStore';
import { getTopTracksLongTerm, getTopTracksMediumTerm, getTopTracksShortTerm } from '@/spotifyApi/spotifyApi';
import TrackCard from '@/components/App/Cards/TrackCard';
import { ITrackLongTerm } from '@/models/tracks';
import LoadingLayout from '@/components/Loading/LoadingLayout';
import ErrorLayout from '@/components/Error/ErrorLayout';

const TopTrack = () => {

  /* state */
  const toggleHeader = useStateStore(state => state.toggleHeader); // [0,1,2]
  const setToggleHeader = useStateStore(state => state.setToggleHeader);

  /* fetching data */
  const {
    data: tracksLongTerm, 
    error : isErrortracksLongTerm, 
    isLoading : isLoadingTracksLongTerm
  } = useSWR('tracksLongTerm',  () => getTopTracksLongTerm(30) );

  const {
    data: tracksMediumTerm, 
    error : isErrorTracksMediumTerm, 
    isLoading : isLoadingTracksMediumTerm
  } = useSWR('tracksMediumTerm',  () => getTopTracksMediumTerm(30) );

  const {
    data: tracksShortTerm, 
    error : isErrorTracksShortTerm, 
    isLoading : isLoadingTracksShortTerm
  } = useSWR('tracksShortTerm',  () => getTopTracksShortTerm(30) );

  useEffect(()=>{
    console.log(tracksLongTerm)
  },[tracksLongTerm])

  return (
    <div className="w-10/12 md:w-9/12 lg:w-full mx-auto mb-32 
    md:max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl">
      <ToggleHeader header='Top Tracks' />
      <div className="space-y-3 mt-11 ">
        {
          /* Error */
          (isErrortracksLongTerm || isErrorTracksMediumTerm || isErrorTracksShortTerm)
            ? (<ErrorLayout />)
              /* Loading */
            : 
              (toggleHeader === 0 
                && (isLoadingTracksLongTerm 
                        ? (<LoadingLayout />)
                        : (tracksLongTerm?.items.map((track:ITrackLongTerm, i:number)=>{
                            return (
                              <TrackCard 
                                key={i} 
                                id={i}
                                icon={track?.album?.images[2]?.url}
                                title={track?.name}
                                subtitle={track?.artists[0]?.name}
                                album={track?.album?.name}
                                duration={track?.duration_ms}
                                route='/'
                                mode='top-tracks'
                              />
                            )
                    }))
                )
              ) 
            }
            {
              (toggleHeader === 1
                && (isLoadingTracksMediumTerm 
                        ? (<LoadingLayout />)
                        : (tracksMediumTerm?.items.map((track:ITrackLongTerm, i:number)=>{
                            return (
                              <TrackCard 
                                key={i} 
                                id={i}
                                icon={track?.album?.images[2]?.url}
                                title={track?.name}
                                subtitle={track?.artists[0]?.name}
                                album={track?.album?.name}
                                duration={track?.duration_ms}
                                route='/'
                                mode='top-tracks'
                              />
                            )
                    }))
                )
              )
            }
            {
              (toggleHeader === 2
                && (isLoadingTracksShortTerm 
                        ? (<LoadingLayout />)
                        : (tracksShortTerm?.items.map((track:ITrackLongTerm, i:number)=>{
                            return (
                              <TrackCard 
                                key={i} 
                                id={i}
                                icon={track?.album?.images[2]?.url}
                                title={track?.name}
                                subtitle={track?.artists[0]?.name}
                                album={track?.album?.name}
                                duration={track?.duration_ms}
                                route='/'
                                mode='top-tracks'
                              />
                            )
                    }))
                )
              )
            }
      </div>
    </div>
  )
}

export default TopTrack