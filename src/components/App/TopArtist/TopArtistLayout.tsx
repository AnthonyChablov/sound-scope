import useSWR from 'swr';
import {useEffect} from 'react'; 
import { getTopArtistsLongTerm } from '@/spotifyApi/spotifyApi';
import ArtistHeader from "./Header/ArtistHeader";
import { useArtistStore } from "@/store/useArtistStore";
import { IArtistLongTerm } from '@/models/artists';
import ArtistCard from "../Cards/ArtistCard";
import useWindowWidth from '@/hooks/useWindowWidth';

const TopArtistLayout = () => {
    
    /* state */
    const toggleArtists = useArtistStore(state => state.toggleArtists); // [0,1,2]
    const setToggleArtists = useArtistStore(state => state.setToggleArtists);

    const windowWidth = useWindowWidth();

    /* fetching data */
    const {
        data: artistsLongTerm, 
        error : isErrorArtistsLongterm, 
        isLoading : isLoading
    } = useSWR('artistsLongTerm',  () => getTopArtistsLongTerm(30) );

    useEffect(() => {
        console.log('artistsLongTerm', artistsLongTerm);
    }, [artistsLongTerm])

    return (
        <div className="w-10/12 md:w-9/12 lg:w-full mx-auto mb-32 
            md:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl"
        >
            <ArtistHeader />
            <div className={`text-white mt-20 flex flex-col items-center 
                ${windowWidth >= 400 && 'grid grid-cols-2 gap-1'}
                ${windowWidth >= 600 && 'grid grid-cols-3 gap-3'}    
                ${windowWidth >= 1000 && 'grid grid-cols-4 gap-10'}
                ${windowWidth >= 1280 && 'grid grid-cols-5 gap-1'}
            `}
                
            >
                {/* conditionally render a bunch of components upon  */}
                {/* long term  */}
                {!isLoading && (artistsLongTerm?.items.map((artist:IArtistLongTerm, i:number)=>{
                    return(
                        <ArtistCard 
                            key={i} 
                            icon={artist?.images[2]?.url } 
                            title={artist?.name} 
                            route={artist?.external_urls.spotify}
                            mode='top-artists'
                        />
                    )
                }))}
                
            </div>
            
        </div>
    )
}

export default TopArtistLayout