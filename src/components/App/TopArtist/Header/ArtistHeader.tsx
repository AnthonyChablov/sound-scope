import {useState } from 'react';
import { useArtistStore } from '@/store/useArtistStore';

const ArtistHeader = () => {

    /* state */
    const toggleArtists = useArtistStore(state => state.toggleArtists); // [0,1,2]
    const setToggleArtists = useArtistStore(state => state.setToggleArtists);

    return (
        <div className="mt-20 flex justify-between items-center ">
            <h1 className="text-2xl font-bold text-white">Top Artists</h1>
            {/* button navigation */}
            <div className=" flex space-x-5 text-md text-zinc-400 font-semibold">
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