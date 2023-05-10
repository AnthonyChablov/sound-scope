import React, {useEffect} from 'react';
import ToggleHeader from '../ToggleHeader/ToggleHeader';
import useSWR from 'swr';
import { getPlaylists } from '@/spotifyApi/spotifyApi';
import PlaylistCard from '../Cards/PlaylistCard';
import LoadingLayout from '@/components/Loading/LoadingLayout';
import { IPlaylist } from '@/models/playlist';
import useWindowWidth from '@/hooks/useWindowWidth';
import ErrorLayout from '@/components/Error/ErrorLayout';

const PlaylistLayout = () => {

  
  /* Fetch Data */
  const {
    data: playlists, 
    error : isErrorPlaylist, 
    isLoading : isLoadingPlaylist
  } = useSWR('playlists',  () => getPlaylists() );

  /* Hooks */
  const windowWidth = useWindowWidth();

  return (
    <div className='w-10/12 md:w-9/12 lg:w-full mx-auto mb-32 
      md:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl'
    >
      <ToggleHeader header='Your Recent Playlists' mode='hidden'/>
      <div className={
        `text-white mt-20 flex flex-col items-center 
          ${windowWidth >= 600 && 'grid grid-cols-2 gap-3'}    
          ${windowWidth >= 850 && 'grid grid-cols-3 gap-10'}
          ${windowWidth >= 1280 && 'grid grid-cols-4 gap-1'}
      `}>
        {
          /* Error */
          (isErrorPlaylist)
            ? (<ErrorLayout error={isErrorPlaylist}/>)
            /* Loading */
            : (isLoadingPlaylist 
                ? ( <LoadingLayout />)
                : (playlists?.items.map((playlist:IPlaylist, i:number)=>{
                    return (
                      <PlaylistCard 
                        key={i}
                        id={i}
                        icon={playlist?.images[0]?.url}
                        title={playlist?.name}
                        subtitle={playlist?.tracks?.total?.toString() + ' TRACKS'}
                        route='/app/playlists'
                      />
                    )
                  }))
              )
        }
      </div>
    </div>
  )
}

export default PlaylistLayout