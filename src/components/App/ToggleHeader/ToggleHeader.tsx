import { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
import { useStateStore } from '@/store/useAppStore';
import useWindowWidth from '@/hooks/useWindowWidth';
import Button from '@mui/material/Button';
import { toggleHeaderVariants } from '@/variant';
import OutlinedButton from '@/components/Common/OutlinedButton';
import ContainedButton from '@/components/Common/ContainedButton';
import { createPlaylist, addTracksToPlaylist } from '@/spotifyApi/spotifyApi';
import Link from 'next/link';
import { debounce } from "lodash"
import { getStorageSpotifyAccessToken } from '@/spotifyApi/spotifyToken';
import SpotifyButton from '@/components/Common/SpotifyButton';
import Icons from '@/components/Common/Icons';

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

    useEffect(()=>{
        () => setDisplayOutlinedButton(false);
    /* eslint-disable-next-line  */
    },[createdPlaylist]);

    return (
        <motion.div className={`mt-20 flex justify-between items-center lg:items-start 
            ${mode==='hidden' ? `mb-10` : 'mb-12'}
            ${windowWidth < 1024 ? ' flex-col ': ' flex-row '}
        `}
            variants={toggleHeaderVariants}
            initial={'hidden'}
            animate={'visible'}
        >
            {/* Header Text */}
            <div className="flex flex-col items-center justify-center lg:items-start">
                <h1 className={` text-2xl font-bold text-white  ${mode=== 'recommendations' && 'lg:w-[30rem] xl:w-[40rem]'}
                    ${ windowWidth >= 1024 ? 'mb-0 truncate ' : 'mb-8 text-center'}`
                } 
                >{header}</h1>
                
            </div>
            
            {/* button navigation */}
            {
                ((mode === 'toggle') && (
                        <div className = {` flex text-center text-lg text-zinc-400 font-semibold 
                            flex-col space-y-3 xs:space-y-0 xs:space-x-5 xs:flex-row mb-3
                        `}
                        >
                            {
                                ['all time', 'last 6 months', 'last 4 weeks'].map((elem, i)=>{
                                    return (
                                        <div key={i} className={` cursor-pointer capitalize text-[1rem]
                                            ${toggleHeader === i && 'underline text-white'}` }
                                            onMouseDown={ ()=> setToggleHeader(i) }
                                            
                                        >
                                            {elem}
                                        </div>
                                    )
                                })
                            }
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
                                    <Button 
                                        className='bg-black rounded-3xl text-slate-100
                                        font-semibold text-md hover:bg-neutral-900 hover:text-slate-300 w-fit px-3'
                                        variant="contained"
                                    >
                                        { <Icons type={'spotify'} size={30} color={`#1DB954`}/>}
                                        <p className='ml-3 '>{'View In Spotify'}</p>
                                    </Button>
                                </Link>
                            </motion.div> 
                            )
                            :(
                                <motion.div
                                    
                                    onClick={()=> debouncedCreatePlaylistOnSave()}
                                    initial={'hidden'}
                                    whileInView={'visible'}
                                >
                                    <Button 
                                        className='bg-slate-100 rounded-3xl text-black
                                        font-semibold text-md hover:bg-slate-300  w-fit px-3'
                                        variant="contained"
                                    >
                                        { <Icons type={'spotify'} size={30} color={`black`}/>}
                                        <p className='ml-3'>{'Save To Spotify'}</p>
                                    </Button>
                                    
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