import React , {useEffect, useCallback} from 'react';
import { getRecomendations, getPlaylist, getUser } from '@/spotifyApi/spotifyApi';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import useWindowWidth from '@/hooks/useWindowWidth';
import ToggleHeader from '../ToggleHeader/ToggleHeader';
import ArtistCard from '../Cards/ArtistCard';
import ErrorLayout from '@/components/Error/ErrorLayout';
import LoadingLayout from '@/components/Loading/LoadingLayout';
import { ITrack } from '@/models/track';
import TrackCard from '../Cards/TrackCard';
import { ITrackLongTerm } from '@/models/tracks';
import useLoading from '@/hooks/useLoading';

const RecommendationsLayout = () => {

    /* Hooks */
    const router = useRouter();
    const playlistId = router.query.playlistId;
    const {loading} = useLoading();

    /* Fetch Data */
    const { 
        data : user, 
        error : isErrorUser, 
        isLoading : isLoadingUser 
    } = useSWR('/api/user', getUser);

    const {
        data: playlist,
        error : isErrorPlaylist,
        isLoading : isLoadingPlaylist
    } = useSWR(
            playlistId 
                ? 'singlePlaylist' 
                : null , () => getPlaylist(String(playlistId))
        );

    /* Seeds of our Tracks From The Playlist */
    const playListTrackSeeds = ( playlist?.tracks?.items.length === 0 )
            ? '1c9z7I2Hucpg2gak6ZAV9Y,32GHYtVVAsYNQGafHrrRxv,2HBAu9VCJHhmHuzCSJc11z,45RrA2phIbwYaDLpxK2qn5,5gVWOGojTG0RKnZpSz5Hf8' 
            : playlist?.tracks?.items
                .sort(() => Math.random() - 0.5)
                .slice(0,5)
                .map((track : ITrack)=>{
                    return track?.track.id
                })
                .join(',');

    const {
        data: recommendations,
        error : isErrorRecommendations,
        isLoading : isLoadingRecommendations
    } = useSWR(playListTrackSeeds ? 'recommendations' : null,   () => getRecomendations(playListTrackSeeds));

    useEffect(()=>{
        console.log(recommendations);
        if (router.query.categoryId) {
            
        }
    },[])

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
                                    <ToggleHeader 
                                        header={`Recommended Tracks Based On: ${playlist?.name}`} 
                                        mode={`recommendations`}
                                        userId={user?.id}
                                        playlistName={`Recommendations base on ${playlist?.name}`}
                                    />
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
                                </>
                            )
                }
            </div>
        </div>
    )
}

export default RecommendationsLayout;