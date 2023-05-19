import useSWR from 'swr';
import { getTopArtistsLongTerm, getTopArtistsShortTerm, getTopArtistsMediumTerm } from '@/spotifyApi/spotifyApi';
import { useStateStore } from '@/store/useAppStore';
import { IArtistLongTerm } from '@/models/artists';
import ArtistCard from "../Cards/ArtistCard";
import useWindowWidth from '@/hooks/useWindowWidth';
import LoadingLayout from '@/components/Loading/LoadingLayout';
import ToggleHeader from '../ToggleHeader/ToggleHeader';
import ErrorLayout from '@/components/Error/ErrorLayout';
import useLoading from '@/hooks/useLoading';
import { getStorageSpotifyAccessToken } from '@/spotifyApi/spotifyToken';

const TopArtistLayout = () => {
    
    /* State */
    const toggleHeader = useStateStore(state => state.toggleHeader); // [0,1,2]
    const spotifyToken = useStateStore(state => state.spotifyToken);
    const setSpotifyToken = useStateStore(state => state.setSpotifyToken);

    /* Hooks */
    const windowWidth = useWindowWidth();
    const {loading} = useLoading();

    /* Fetching Data */
    const {
        data: artistsLongTerm, 
        error : isErrorArtistsLongTerm, 
        isLoading : isLoadingArtistsLongTerm
    } = useSWR('artistsLongTerm',  () => getTopArtistsLongTerm(32, getStorageSpotifyAccessToken()) );

    const {
        data: artistsMediumTerm, 
        error : isErrorArtistsMediumTerm, 
        isLoading : isLoadingArtistsMediumTerm
    } = useSWR('artistsMediumTerm',  () => getTopArtistsMediumTerm(32, getStorageSpotifyAccessToken()) );

    const {
        data: artistsShortTerm, 
        error : isErrorArtistsShortTerm, 
        isLoading : isLoadingArtistsShortTerm
    } = useSWR('artistsShortTerm',  () => getTopArtistsShortTerm(32, getStorageSpotifyAccessToken()) );


    return (
        <div className="w-10/12 md:w-8/12 lg:w-full mx-auto mb-32 
            md:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl"
        >
            
                {(isErrorArtistsLongTerm 
                    || isErrorArtistsMediumTerm 
                    || isErrorArtistsShortTerm
                )
                    ? (<ErrorLayout error={isErrorArtistsLongTerm || isErrorArtistsMediumTerm || isErrorArtistsShortTerm}/>)
                    : (isLoadingArtistsLongTerm || isLoadingArtistsMediumTerm || isLoadingArtistsShortTerm || loading ) 
                        ? (<LoadingLayout />)
                        : <>
                            <ToggleHeader header='Top Artists' mode='toggle'/>
                            <div className={`text-white mt-20 flex flex-col items-center justify-items-center
                                ${windowWidth >= 525 && 'grid grid-cols-2 gap-1'}
                                ${windowWidth >= 600 && 'grid grid-cols-2 gap-3'}    
                                ${windowWidth >= 1000 && 'grid grid-cols-3 gap-2'}
                                ${windowWidth >= 1280 && 'grid grid-cols-4 gap-2'}
                            `}>
                                {(toggleHeader === 0
                                    && (artistsLongTerm?.items.map((artist:IArtistLongTerm, i:number)=>{
                                            return (
                                                <ArtistCard 
                                                    key={i} 
                                                    id={i}
                                                    icon={artist?.images[1]?.url } 
                                                    title={artist?.name} 
                                                    route={`/app/artist/${artist?.id}`}
                                                    mode='top-artists'
                                                />
                                            )
                                    }))
                                    )
                                }
                                {(toggleHeader === 1
                                    && (artistsMediumTerm?.items.map((artist:IArtistLongTerm, i:number)=>{
                                            return (
                                                <ArtistCard 
                                                    key={i} 
                                                    id={i}
                                                    icon={artist?.images[1]?.url } 
                                                    title={artist?.name} 
                                                    route={`/app/artist/${artist?.id}`}
                                                    mode='top-artists'
                                                />
                                            )
                                    }))
                                    )
                                }
                                {(toggleHeader === 2
                                    && (artistsShortTerm?.items.map((artist:IArtistLongTerm, i:number)=>{
                                            return (
                                            <ArtistCard 
                                                key={i} 
                                                id={i}
                                                icon={artist?.images[1]?.url } 
                                                title={artist?.name} 
                                                route={`/app/artist/${artist?.id}`}
                                                mode='top-artists'
                                            />
                                            )
                                    }))
                                    )
                                }
                            </div>
                        </>
                }
        </div>
    )
}

export default TopArtistLayout