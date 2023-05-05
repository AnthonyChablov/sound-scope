import useSWR from 'swr';
import { getTopArtistsLongTerm, getTopArtistsShortTerm, getTopArtistsMediumTerm } from '@/spotifyApi/spotifyApi';
import { useStateStore } from '@/store/useAppStore';
import { IArtistLongTerm } from '@/models/artists';
import ArtistCard from "../Cards/ArtistCard";
import useWindowWidth from '@/hooks/useWindowWidth';
import LoadingLayout from '@/components/Loading/LoadingLayout';
import ToggleHeader from '../ToggleHeader/ToggleHeader';

const TopArtistLayout = () => {
    
    /* state */
    const toggleHeader = useStateStore(state => state.toggleHeader); // [0,1,2]
    const setToggleHeader = useStateStore(state => state.setToggleHeader);

    /* Hooks */
    const windowWidth = useWindowWidth();

    /* fetching data */
    const {
        data: artistsLongTerm, 
        error : isErrorArtistsLongTerm, 
        isLoading : isLoadingArtistsLongTerm
    } = useSWR('artistsLongTerm',  () => getTopArtistsLongTerm(30) );

    const {
        data: artistsMediumTerm, 
        error : isErrorArtistsMediumTerm, 
        isLoading : isLoadingArtistsMediumTerm
    } = useSWR('artistsMediumTerm',  () => getTopArtistsMediumTerm(30) );

    const {
        data: artistsShortTerm, 
        error : isErrorArtistsShortTerm, 
        isLoading : isLoadingArtistsShortTerm
    } = useSWR('artistsShortTerm',  () => getTopArtistsShortTerm(30) );

    return (
        <div className="w-10/12 md:w-9/12 lg:w-full mx-auto mb-32 
            md:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl"
        >
            <ToggleHeader header='Top Artists'/>
            <div className={`text-white mt-20 flex flex-col items-center 
                ${windowWidth >= 400 && 'grid grid-cols-2 gap-1'}
                ${windowWidth >= 600 && 'grid grid-cols-3 gap-3'}    
                ${windowWidth >= 1000 && 'grid grid-cols-4 gap-10'}
                ${windowWidth >= 1280 && 'grid grid-cols-5 gap-1'}
            `}>
                {/* conditionally render artists upon: */}
                {/* long term -- 0 */}
                {
                    (toggleHeader === 0 
                        && (isLoadingArtistsLongTerm 
                                ? (<LoadingLayout />)
                                : (artistsLongTerm?.items.map((artist:IArtistLongTerm, i:number)=>{
                                    return (
                                        <ArtistCard 
                                            key={i} 
                                            icon={artist?.images[2]?.url } 
                                            title={artist?.name} 
                                            route={artist?.external_urls.spotify}
                                            mode='top-artists'
                                        />
                                    )
                            }))
                        )
                    )
                }
                {/* Medium term -- 1 */}
                {
                    (toggleHeader === 1 
                        && (isLoadingArtistsMediumTerm 
                                ? (<LoadingLayout />)
                                : (artistsMediumTerm?.items.map((artist:IArtistLongTerm, i:number)=>{
                                    return (
                                        <ArtistCard 
                                            key={i} 
                                            icon={artist?.images[2]?.url } 
                                            title={artist?.name} 
                                            route={artist?.external_urls.spotify}
                                            mode='top-artists'
                                        />
                                    )
                            }))
                        )
                    )
                }
                {/* Short term -- 2 */}
                {
                    (toggleHeader === 2
                        && (isLoadingArtistsMediumTerm 
                                ? (<LoadingLayout />)
                                : (artistsShortTerm?.items.map((artist:IArtistLongTerm, i:number)=>{
                                    return (
                                        <ArtistCard 
                                            key={i} 
                                            icon={artist?.images[2]?.url } 
                                            title={artist?.name} 
                                            route={artist?.external_urls.spotify}
                                            mode='top-artists'
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

export default TopArtistLayout