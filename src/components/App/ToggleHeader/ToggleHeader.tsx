import {useState } from 'react';
import { useStateStore } from '@/store/useAppStore';
import useWindowWidth from '@/hooks/useWindowWidth';

interface IToggleHeader{
    header ?: string,
}

const ToggleHeader = ({header}:IToggleHeader) => {

    /* state */
    const toggleHeader = useStateStore(state => state.toggleHeader); // [0,1,2]
    const setToggleHeader = useStateStore(state => state.setToggleHeader);// [0,1,2]

    const windowWidth = useWindowWidth();

    return (
        <div className={`mt-20 flex  justify-between items-center 
            ${windowWidth <= 850 ? ' flex-col ': ' flex-row '}
        `}>
            {/* Header Text */}
            <h1 className={`mb-10 text-2xl font-bold text-white 
                ${windowWidth >= 850 && 'mb-0'}`} 
            >{header}</h1>
            {/* button navigation */}
            <div className = {` flex text-center text-lg text-zinc-400 font-semibold space-y-3 
                ${windowWidth <= 420 ? ' flex-col ': 'space-y-0 space-x-5 flex-row '}
            `}
            >
                {
                    ['all time', 'last 6 months', 'last 4 weeks'].map((elem, i)=>{
                        return (
                            <p key={i} className={`hover:underline cursor-pointer capitalize 
                                ${toggleHeader === i && 'underline text-white'}` }
                                onClick={ ()=> setToggleHeader(i) }
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

export default ToggleHeader;