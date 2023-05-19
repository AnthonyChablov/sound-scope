import { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
import { useStateStore } from '@/store/useAppStore';
import useWindowWidth from '@/hooks/useWindowWidth';
import { toggleHeaderVariants } from '@/variant';
import OutlinedButton from '@/components/Common/OutlinedButton';
import ContainedButton from '@/components/Common/ContainedButton';
import { createPlaylist, addTracksToPlaylist } from '@/spotifyApi/spotifyApi';
import Link from 'next/link';
import { debounce } from "lodash"
import { getStorageSpotifyAccessToken } from '@/spotifyApi/spotifyToken';

interface IToggleHeader{
    header ?: string,
    mode ?: string,
    route ?: string,
    userId?: string,
    playlistName?:string
    recommendedTrackUris?: string | undefined
}

const ToggleHeader = ({header, mode, userId, playlistName, recommendedTrackUris }:IToggleHeader) => {

    /* State */
    const toggleHeader = useStateStore(state => state.toggleHeader); // [0,1,2]
    const setToggleHeader = useStateStore(state => state.setToggleHeader);// [0,1,2]
    const createdPlaylist = useStateStore(state => state.createdPlaylist);
    const [displayOutlinedButton, setDisplayOutlinedButton] = useState<boolean>(false);
    const [playlistLink, setPlaylistLink] = useState<string>(''); /* upon playlist creation save link here */

    const [i, setI] = useState(0);

    /* Token */
    const token = getStorageSpotifyAccessToken() ?? '';

    /* Hooks */
    const windowWidth = useWindowWidth() ;

    async function createPlaylistOnSave(){
        const res = await createPlaylist(userId, header, token );
        if(res){
            setDisplayOutlinedButton(true);
            setPlaylistLink(res?.external_urls?.spotify);
        }
        if(res){
            await addTracksToPlaylist(res?.id, recommendedTrackUris, token ?? '');
        }
    }

    const debouncedCreatePlaylistOnSave = debounce(async () => {
        await createPlaylistOnSave()
    }, 500);

    function onClickHandeller(index:number){
        setToggleHeader(index);
        setI(index);
    }

    useEffect(()=>{
        () => setDisplayOutlinedButton(false);
    /* eslint-disable-next-line  */
    },[createdPlaylist]);

    return (
        <motion.div className={`mt-20 flex  justify-between items-center ${mode==='hidden' ? `mb-10` : 'mb-16'}
            ${windowWidth <= 1024 ? ' flex-col ': ' flex-row '}
        `}
            variants={toggleHeaderVariants}
            initial={'hidden'}
            animate={'visible'}
        >
            {/* Header Text */}
            <h1 className={` text-2xl font-bold text-white ${mode=== 'recommendations' && 'w-9/12 '}
                ${windowWidth >= 1024 ? 'mb-0 truncate' : 'mb-10 text-center'}`
            } 
            >{header}</h1>
            {/* button navigation */}
            {
                ((mode === 'toggle') && (
                        <div className = {` flex text-center text-lg text-zinc-400 font-semibold 
                            flex-col space-y-3 xs:space-y-0 xs:space-x-5 xs:flex-row
                        `}
                        >
                            
                                
                                <div  className={` cursor-pointer capitalize text-[1rem]
                                    ${toggleHeader === i && 'underline text-white'}` }
                                    onClick={ ()=> onClickHandeller(0) }
                                >
                                    {'all time'}
                                </div>
                                <div  className={` cursor-pointer capitalize text-[1rem]
                                    ${toggleHeader === i && 'underline text-white'}` }
                                    onClick={ ()=> onClickHandeller(1) }
                                >
                                    {'last 6 months'}
                                </div>
                                <div  className={` cursor-pointer capitalize text-[1rem]
                                    ${toggleHeader === i && 'underline text-white'}` }
                                    onClick={ ()=> onClickHandeller(2) }
                                >
                                    {'last 4 weeks'}
                                </div>
                            
                        </div>
                    )
                )
            }
            {
                ((mode === 'recommendations') && (
                    <>
                    {/* This button saves the new playlist to spotify */}
                        {displayOutlinedButton 
                            ? (<motion.div
                                variants={toggleHeaderVariants}
                                initial={'hidden'}
                                whileInView={'visible'}
                            > 
                                <Link 
                                    href={playlistLink}
                                    rel="noopener noreferrer" 
                                    target="_blank"
                                >
                                    
                                    <OutlinedButton title='View In Spotify'/>
                                    
                                </Link>
                            </motion.div> 
                            )
                            :(
                                <motion.div
                                    onClick={()=> debouncedCreatePlaylistOnSave()}
                                    initial={'hidden'}
                                    whileInView={'visible'}
                                >
                                    <ContainedButton text='Save to Spotify' />
                                </motion.div>
                            )
                        }
                    </>
                ))
            }
        </motion.div>
    )
}

export default ToggleHeader;