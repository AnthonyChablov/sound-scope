import React , {useEffect, useState} from 'react';
import { getRecomendations, getPlaylist, getUser } from '@/spotifyApi/spotifyApi';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import ToggleHeader from '../ToggleHeader/ToggleHeader';
import ErrorLayout from '@/components/Error/ErrorLayout';
import { motion } from 'framer-motion';
import LoadingLayout from '@/components/Loading/LoadingLayout';
import { ITrack } from '@/models/track';
import TrackCard from '../Cards/TrackCard';
import { ITrackLongTerm } from '@/models/tracks';
import useLoading from '@/hooks/useLoading';
import { getStorageSpotifyAccessToken } from '@/spotifyApi/spotifyToken';
import { useStateStore } from '@/store/useAppStore';
import { headerVariants } from '@/variant';

const RecommendationsLayout = () => {

    /*  State */
    const spotifyToken = getStorageSpotifyAccessToken() ?? '';
    const setSpotifyToken = useStateStore(state => state.setSpotifyToken);
   
    /* Hooks */
    const router = useRouter();
    const playlistId = router.query.playlistId;
    const { loading } = useLoading();

    /* Fetch / Extract Data */
    const { 
        data : user, 
        error : isErrorUser, 
        isLoading : isLoadingUser 
    } = useSWR('/api/user', ()=>getUser(spotifyToken ));

    const {
        data: playlist,
        error : isErrorPlaylist,
        isLoading : isLoadingPlaylist
    } = useSWR(playlistId ? 'singlePlaylist' : null , () => getPlaylist(String(playlistId), spotifyToken));

    /* Extract Seeds from Data */
    const seeds = ( playlist?.tracks?.items.length === 0 )
        ? '1c9z7I2Hucpg2gak6ZAV9Y,32GHYtVVAsYNQGafHrrRxv,2HBAu9VCJHhmHuzCSJc11z,45RrA2phIbwYaDLpxK2qn5,5gVWOGojTG0RKnZpSz5Hf8' 
        : (playlist?.tracks?.items)?.sort(() => Math.random() - 0.5).slice(0,5).map((track : ITrack)=>{return track?.track.id}).join(',');
    
    const {
        data: recommendations,
        error : isErrorRecommendations,
        isLoading : isLoadingRecommendations
    } = useSWR(seeds ? 'recommendations' : null , () => getRecomendations(seeds, spotifyToken),{
        revalidateOnFocus:false
    });

    /* Extracting URIS from Data */
    const recommendedTrackUris = recommendations?.tracks
        .map((track:ITrackLongTerm)=>{return track.uri})
        .join(',');

    useEffect(()=>{
        setSpotifyToken(getStorageSpotifyAccessToken());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div className='w-10/12  md:w-8/12 lg:w-full mx-auto mb-32 
            md:max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl'
        >
            <div className="space-y-3 mt-11 ">
                {
                    /* Error */
                    (isErrorRecommendations || isErrorPlaylist || isErrorUser)
                        ? (<ErrorLayout error={isErrorRecommendations || isErrorPlaylist}/>)
                        /* Loading */
                        : (isLoadingRecommendations || loading || isLoadingPlaylist || isLoadingUser)
                            ? (<LoadingLayout/>)
                            : ( 
                                <>
                                    {(<ToggleHeader 
                                        header={`Recommended Tracks Based On: ${playlist?.name}`} 
                                        mode={`recommendations`}
                                        userId={user?.id}
                                        playlistName={`Recommendations base on ${playlist?.name}`}
                                        recommendedTrackUris={recommendedTrackUris}
                                    /> )}
                                    <motion.div
                                        variants={headerVariants}
                                        initial={'hidden'}
                                        whileInView={'visible'}
                                    >
                                    {
                                        recommendations?.tracks?.map((track:ITrackLongTerm, i:number)=>{
                                            return (
                                                <TrackCard
                                                    key={i}
                                                    id={i}
                                                    icon={track.album.images[2].url}
                                                    title={track.name}
                                                    subtitle={track.artists[0].name}
                                                    album={track.album.name}
                                                    route={`/app/track/${track.id}`}
                                                    duration={track.duration_ms}
                                                />
                                            )
                                    })}
                                    </motion.div>
                                </>
                            )
                }
            </div>
        </div>
    )
}

export default RecommendationsLayout;