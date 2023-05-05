import React from 'react';
import useSWR from 'swr';
import ToggleHeader from '../ToggleHeader/ToggleHeader';
import { getTopTracksLongTerm, getTopTracksMediumTerm, getTopTracksShortTerm } from '@/spotifyApi/spotifyApi';

const TopTrack = () => {

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

  return (
    <div className="w-10/12 md:w-9/12 lg:w-full mx-auto mb-32 
    md:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl">
      <ToggleHeader header='Top Tracks' />
    </div>
  )
}

export default TopTrack