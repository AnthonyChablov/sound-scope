import React , {useEffect, useState} from 'react';
import { getRecomendations, getPlaylist, getUser } from '@/spotifyApi/spotifyApi';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import ToggleHeader from '../ToggleHeader/ToggleHeader';
import ErrorLayout from '@/components/Error/ErrorLayout';
import LoadingLayout from '@/components/Loading/LoadingLayout';
import { ITrack } from '@/models/track';
import TrackCard from '../Cards/TrackCard';
import { ITrackLongTerm } from '@/models/tracks';
import useLoading from '@/hooks/useLoading';
import OutlinedButton from '@/components/Common/OutlinedButton'; 
import ContainedButton from '@/components/Common/ContainedButton';
import { createPlaylist, addTracksToPlaylist } from '@/spotifyApi/spotifyApi';
import { useStateStore } from '@/store/useAppStore';

const RecommendationsLayout = () => {

    /* State  */
    const [trackUris, setTrackUris] = useState<string|undefined>(undefined);
    const [displayOutlinedButton, setDisplayOutlinedButton] = useState<boolean>(false);
    const setToggleHeader = useStateStore(state => state.setToggleHeader);// [0,1,2]
    const setCreatedPlaylist = useStateStore(state => state.setCreatedPlaylist);
    const createdPlaylist = useStateStore(state => state.createdPlaylist);
    const [recommendedPlaylistId , setRecommendedPlaylistId] = useState<string|null>(null);
    const [playlistLink, setPlaylistLink] = useState<string>('');
    
    /* Hooks */
    const router = useRouter();
    const playlistId = router.query.playlistId;
    const { loading } = useLoading();

    /* Fetch / Extract Data */
    const { 
        data : user, 
        error : isErrorUser, 
        isLoading : isLoadingUser 
    } = useSWR('/api/user', getUser);

    const {
        data: playlist,
        error : isErrorPlaylist,
        isLoading : isLoadingPlaylist
    } = useSWR(playlistId ? 'singlePlaylist' : null , () => getPlaylist(String(playlistId)));

    /* Extract Seeds from Data */
    const seeds = ( playlist?.tracks?.items.length === 0 )
        ? '1c9z7I2Hucpg2gak6ZAV9Y,32GHYtVVAsYNQGafHrrRxv,2HBAu9VCJHhmHuzCSJc11z,45RrA2phIbwYaDLpxK2qn5,5gVWOGojTG0RKnZpSz5Hf8' 
        : (playlist?.tracks?.items)?.sort(() => Math.random() - 0.5).slice(0,5).map((track : ITrack)=>{return track?.track.id}).join(',');
    
    const {
        data: recommendations,
        error : isErrorRecommendations,
        isLoading : isLoadingRecommendations
    } = useSWR(seeds ? 'recommendations' : null , () => getRecomendations(seeds));

    /* Extracting URIS from Data */
    const recommendedTrackUris = recommendations?.tracks
        .map((track:ITrackLongTerm)=>{return track.uri})
        .join(',');

    useEffect(()=>{
        setTrackUris(recommendedTrackUris);
    },[trackUris]);

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
                                        recommendedTrackUris={trackUris}
                                    /> )}
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