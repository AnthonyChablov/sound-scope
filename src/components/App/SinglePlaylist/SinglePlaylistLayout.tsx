import React ,{useEffect} from 'react';
import useSWR from 'swr';
import { getPlaylist } from '@/spotifyApi/spotifyApi';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import useWindowWidth from '@/hooks/useWindowWidth';
import Sidebar from '../Sidebar/Sidebar';
import ErrorLayout from '@/components/Error/ErrorLayout';
import LoadingLayout from '@/components/Loading/LoadingLayout';
import TrackCard from '../Cards/TrackCard';

const SinglePlaylistLayout = () => {

    /* Hooks */
    const router = useRouter();
    const playlistId = router.query.playlistId;
    const width = useWindowWidth();
    
    /* Fetch Data */
    const {
        data: playlist,
        error : isErrorPlaylist,
        isLoading : isLoadingPlaylist
    } = useSWR('singlePlaylist',  () => getPlaylist(String(playlistId)));

    useEffect(() => {
        console.log(playlist)
    }, [playlist]);

    return (
        <>
            <Sidebar />
            {
                (isErrorPlaylist) 
                    ? <ErrorLayout /> 
                    : (isLoadingPlaylist) 
                        ? (<LoadingLayout /> )
                        : (
                            <div className="h-fit flex items-center justify-center w-7/12 
                                md:w-7/12 lg:w-6/12 xl:w-5/12 mx-auto"> 
                                <div className="space-y-3 mt-11 ">
                                {
                                    playlist?.tracks.items.map((track:any, i: number) => {
                                        return (
                                            <TrackCard 
                                                key={i} 
                                                id={i}
                                                icon={track?.track?.album?.images[2]?.url}
                                                title={track?.track?.name}
                                                subtitle={track?.track?.artists[0]?.name}
                                                album={track?.track?.album?.name}
                                                duration={track?.track?.duration_ms}
                                                route={`/app/track/${track?.track?.id}`}
                                                mode='top-tracks'
                                            />
                                        )
                                    })
                                    
                                }
                                </div>   
                            </div>
                        )   
            }
        </>
    )
}

export default SinglePlaylistLayout