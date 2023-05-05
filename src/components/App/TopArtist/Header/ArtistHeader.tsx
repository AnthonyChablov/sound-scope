import {useState } from 'react';
import { useArtistStore } from '@/store/useArtistStore';
import useWindowWidth from '@/hooks/useWindowWidth';


const ArtistHeader = () => {

    /* state */
    const toggleArtists = useArtistStore(state => state.toggleArtists); // [0,1,2]
    const setToggleArtists = useArtistStore(state => state.setToggleArtists);

    const windowWidth = useWindowWidth();

    return (
        <div className={`mt-20 flex  justify-between items-center 
            ${windowWidth <= 850 ? ' flex-col ': ' flex-row '}
        `}>
            <h1 className={`mb-10 text-2xl font-bold text-white 
                ${windowWidth >= 850 && 'mb-0'}`}
            >Top Artists</h1>
            {/* button navigation */}
            <div className = {` flex text-center text-lg text-zinc-400 font-semibold space-y-3 
                ${windowWidth <= 420 ? ' flex-col ': 'space-y-0 space-x-5 flex-row '}
            `}
            >
                {
                    ['all time', 'last 6 months', 'last 4 weeks'].map((elem, i)=>{
                        return (
                            <p key={i} className={`hover:underline cursor-pointer capitalize 
                                ${toggleArtists === i && 'underline text-white'}` }
                                onClick={()=>setToggleArtists(i)}
                            >
                                {elem}
                            </p>
                        )
                    })
                }
                
            </div>
            

        </div>
    )
}

export default ArtistHeader