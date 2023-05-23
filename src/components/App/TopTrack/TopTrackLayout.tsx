import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { motion } from 'framer-motion';
import ToggleHeader from '../ToggleHeader/ToggleHeader';
import { useArtistStore } from "@/store/useArtistStore";
import { useStateStore } from '@/store/useAppStore';
import { getTopTracksLongTerm, getTopTracksMediumTerm, getTopTracksShortTerm } from '@/spotifyApi/spotifyApi';
import TrackCard from '@/components/App/Cards/TrackCard';
import { ITrackLongTerm } from '@/models/tracks';
import LoadingLayout from '@/components/Loading/LoadingLayout';
import ErrorLayout from '@/components/Error/ErrorLayout';
import useLoading from '@/hooks/useLoading';
import { getStorageSpotifyAccessToken } from '@/spotifyApi/spotifyToken';
import { headerVariants } from '@/variant';

const TopTrack = () => {

  /* state */
  const toggleHeader = useStateStore(state => state.toggleHeader); // [0,1,2]

  /* Token */
  const setSpotifyToken = useStateStore(state => state.setSpotifyToken) ;

  const spotifyToken = getStorageSpotifyAccessToken() ?? '';

  /* router */
  const router = useRouter();
  const {loading} = useLoading();

  /* fetching data */
  const {
    data: tracksLongTerm, 
    error : isErrortracksLongTerm, 
    isLoading : isLoadingTracksLongTerm
  } = useSWR('tracksLongTerm',  () => getTopTracksLongTerm(30, spotifyToken ) );

  const {
    data: tracksMediumTerm, 
    error : isErrorTracksMediumTerm, 
    isLoading : isLoadingTracksMediumTerm 
  } = useSWR('tracksMediumTerm',  () => getTopTracksMediumTerm(30, spotifyToken ) );

  const {
    data: tracksShortTerm, 
    error : isErrorTracksShortTerm, 
    isLoading : isLoadingTracksShortTerm
  } = useSWR('tracksShortTerm',  () => getTopTracksShortTerm(30, spotifyToken ) );

  return (
    <div className="w-10/12  md:w-8/12 lg:w-9/12 xl:w-9/12 mx-auto mb-32 
      md:max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl">
      <div className="mt-11 ">
        {/* Error */}
          {(isErrortracksLongTerm || isErrorTracksMediumTerm || isErrorTracksShortTerm)
            ? (<ErrorLayout error={isErrortracksLongTerm || isErrorTracksMediumTerm || isErrorTracksShortTerm}/>)
            /* Loading */
            : (isLoadingTracksShortTerm || isLoadingTracksMediumTerm || isLoadingTracksLongTerm || loading)
              ? (<LoadingLayout/>)
              : 
                <div>
                  <ToggleHeader header='Top Tracks' mode='toggle'/>
                  <motion.div className="space-y-3"
                    variants={headerVariants}
                    initial={'hidden'}
                    whileInView={'visible'}
                  >
                    {(toggleHeader === 0
                        && (tracksLongTerm?.items.map((track:ITrackLongTerm, i:number)=>{
                              return (
                                <TrackCard 
                                  key={i} 
                                  id={i}
                                  icon={track?.album?.images[2]?.url}
                                  title={track?.name}
                                  subtitle={track?.artists[0]?.name}
                                  album={track?.album?.name}
                                  duration={track?.duration_ms}
                                  route={`/app/track/${track?.id}`}
                                  mode='top-tracks'
                                />
                              )
                      }))
                      )
                    }
                    {(toggleHeader === 1
                        && (tracksMediumTerm?.items.map((track:ITrackLongTerm, i:number)=>{
                              return (
                                <TrackCard 
                                  key={i} 
                                  id={i}
                                  icon={track?.album?.images[2]?.url}
                                  title={track?.name}
                                  subtitle={track?.artists[0]?.name}
                                  album={track?.album?.name}
                                  duration={track?.duration_ms}
                                  route={`/app/track/${track?.id}`}
                                  mode='top-tracks'
                                />
                              )
                      }))
                      )
                    }
                    {(toggleHeader == 2
                        && (tracksShortTerm?.items.map((track:ITrackLongTerm, i:number)=>{
                              return (
                                <TrackCard 
                                  key={i} 
                                  id={i}
                                  icon={track?.album?.images[2]?.url}
                                  title={track?.name}
                                  subtitle={track?.artists[0]?.name}
                                  album={track?.album?.name}
                                  duration={track?.duration_ms}
                                  route={`/app/track/${track?.id}`}
                                  mode='top-tracks'
                                />
                              )
                      }))
                      )
                    }
                  </motion.div>
                </div>
          }     
      </div>
    </div>
  )
}

export default TopTrack;