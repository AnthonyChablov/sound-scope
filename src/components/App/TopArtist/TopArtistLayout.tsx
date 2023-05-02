import useSWR from 'swr';
import {useEffect} from 'react'; 
import { getTopArtistsLongTerm } from '@/spotifyApi/spotifyApi';
import ArtistHeader from "./Header/ArtistHeader";
import { useArtistStore } from "@/store/useArtistStore";
import { IArtistLongTerm } from '@/models/artists';
import ArtistCard from "../Cards/ArtistCard";


const TopArtistLayout = () => {
    
    /* state */
    const toggleArtists = useArtistStore(state => state.toggleArtists); // [0,1,2]
    const setToggleArtists = useArtistStore(state => state.setToggleArtists);

    const {
        data: artistsLongTerm, 
        error : isErrorArtistsLongterm, 
        isLoading : isLoading
    } = useSWR('artistsLongTerm',  () => getTopArtistsLongTerm(30) );

    useEffect(() => {
        console.log('artistsLongTerm', artistsLongTerm);
    }, [artistsLongTerm])

    return (
        <div className="w-10/12 md:w-7/12 lg:w-full mx-auto mb-32 max-w-6xl ">
            <ArtistHeader />
            <div className="text-white mt-20 flex flex-col items-center gap-4 sm:grid-cols-2">
                {/* conditionally render a bunch of components upon  */}
                {/* long term  */}
                {!isLoading && (artistsLongTerm?.items.map((artist:IArtistLongTerm, i:number)=>{
                    return(
                        <ArtistCard 
                            key={i} 
                            icon={artist?.images[2]?.url } 
                            title={artist?.name} 
                            route={artist?.external_urls.spotify}
                        />
                    )
                }))}
                {toggleArtists === 1 && 'last 6 months'} {/* medium term */}
                {toggleArtists === 2 && 'last 4 weeks'} {/* short term */}
            </div>
            
        </div>
    )
}

export default TopArtistLayout