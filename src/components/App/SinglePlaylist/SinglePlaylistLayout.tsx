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
import InfoDisplay from './InfoDisplay/InfoDisplay';
import { headerVariants, subHeaderVariants, displayVariants } from '@/variant';

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
                            <div className={`h-fit flex justify-center w-10/12 
                                md:w-8/12 lg:w-9/12 xl:w-9/12 max-w-7xl mx-auto mb-44 
                                ${
                                    width > 1000
                                        ? 'flex-row items-start' 
                                        : 'flex-col items-center'
                                } 
                            `}> 
                                <div className={`mt-14 w-full flex 
                                    ${
                                        width > 1000
                                            ? 'flex-row items-start ' 
                                            :'flex-col items-center '
                                    } 
                                `}>
                                    <motion.div className=""
                                        variants={displayVariants}
                                        initial={'hidden'}
                                        animate={'visible'}
                                    >
                                        <InfoDisplay 
                                            img={playlist?.images[0]?.url}
                                            title={playlist?.name} 
                                            subTitle={`By ${playlist?.owner.display_name}`} 
                                            caption={`${playlist?.tracks.total} songs`} 
                                            buttonText='Get Recommendations'
                                            route={`/app/recommendations/${playlist?.id}`}
                                        />
                                    </motion.div>
                                    <div className={`space-y-3 w-full 
                                        ${
                                            width > 1000
                                                ? 'mt-0 ml-24' 
                                                : 'mt-16 ml-0'
                                        } 
                                    `}>
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
                            </div>
                        )   
            }
        </>
    )
}

export default SinglePlaylistLayout