import { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
import { useStateStore } from '@/store/useAppStore';
import useWindowWidth from '@/hooks/useWindowWidth';
import { toggleHeaderVariants } from '@/variant';
import OutlinedButton from '@/components/Common/OutlinedButton';
import ContainedButton from '@/components/Common/ContainedButton';

interface IToggleHeader{
    header ?: string,
    mode ?: string,
    route ?: string,
}

const ToggleHeader = ({header, mode }:IToggleHeader) => {

    /* state */
    const toggleHeader = useStateStore(state => state.toggleHeader); // [0,1,2]
    const setToggleHeader = useStateStore(state => state.setToggleHeader);// [0,1,2]
    const [displayOutlinedButton, setDisplayOutlinedButton] = useState<boolean>(false);

    const windowWidth = useWindowWidth();

    useEffect(()=>{
        ()=>setDisplayOutlinedButton(false)
    },[]);


    return (
        <motion.div className={`mt-20 flex  justify-between items-center 
            ${windowWidth <= 850 ? ' flex-col ': ' flex-row '}
        `}
            variants={toggleHeaderVariants}
            initial={'hidden'}
            animate={'visible'}
        >
            {/* Header Text */}
            <h1 className={` text-2xl font-bold text-white 
                ${windowWidth >= 850 ? 'mb-0' : 'mb-10'}`} 
            >{header}</h1>
            {/* button navigation */}
            {
                ((mode === 'toggle') && (
                    <div className = {` flex text-center text-lg text-zinc-400 font-semibold 
                        ${windowWidth <= 420 ? ' flex-col space-y-3 ': 'space-y-0 space-x-5 flex-row '}
                    `}
                    >
                        {
                            ['all time', 'last 6 months', 'last 4 weeks'].map((elem, i)=>{
                                return (
                                    <p key={i} className={`hover:underline cursor-pointer capitalize text-[1rem]
                                        ${toggleHeader === i && 'underline text-white'}` }
                                        onClick={ ()=> setToggleHeader(i) }
                                    >
                                        {elem}
                                    </p>
                                )
                            })
                        }
                    </div>)
                )
                
            }
            {
                ((mode === 'recommendations') && (
                    <>
                    {/* This button saves the new playlist to spotify */}
                        {
                            (!displayOutlinedButton) 
                                ?
                                    <div className="" 
                                        onClick={()=>{
                                            setDisplayOutlinedButton(!displayOutlinedButton)
                                        }}
                                    >
                                        <ContainedButton 
                                            
                                            text='Save to Spotify' 
                                            
                                        />
                                    </div>
                                :   <OutlinedButton title='Open In Spotify' />
                        }
                    </>
                ))
            }
        </motion.div>
    )
}

export default ToggleHeader;