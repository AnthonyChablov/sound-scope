import React, {useEffect} from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import useSWR from 'swr';
import Image from 'next/image';
import SubDisplay from './SubDisplay/SubDisplay';
import OutlinedButton from '@/components/Common/OutlinedButton';
import Header from './Headers/subHeader';
import ArtistCard from '../Cards/ArtistCard';
import TrackCard from '../Cards/TrackCard';
import useWindowWidth from '@/hooks/useWindowWidth';
import { logout } from '@/spotifyApi/spotifyToken';
import { useStateStore } from '@/store/useAppStore';
import { useArtistStore } from '@/store/useArtistStore';
import { useRouter } from 'next/router';
import { getTopArtistsShortTerm, getTopArtistsLongTerm, getTopTracksLongTerm } from '@/spotifyApi/spotifyApi';
import clearCache from "swr";
import {IArtistLongTerm} from '../../../models/artists';
import {ITrackLongTerm} from '../../../models/tracks';
import LoadingLayout from '@/components/Loading/LoadingLayout';
import ErrorLayout from '@/components/Error/ErrorLayout';
import { headerVariants, subHeaderVariants, profileInfoDisplayVariants } from '@/variant';


interface IProfile{
    img:string,
    userName: string,
    userLink:string,
    followers: number,
    following: number,
    playlists: number,
}

const ProfileLayout = ({
  img, 
  userName, 
  userLink, 
  followers, 
  following, 
  playlists
}: IProfile) => {

  /* State */
  const spotifyToken = useStateStore(state => state.spotifyToken);
  const setSpotifyToken = useStateStore(state => state.setSpotifyToken);
  const artistData = useArtistStore(state => state.artistData);
  const setArtistData = useArtistStore(state => state.setArtistData);

  /* Hooks */
  const router = useRouter();

  /* Data */
  const subHeaderTitles= [
    {
        title: 'FOLLOWERS',
        amount: followers
    },
    {
        title:'FOLLOWING',
        amount: following,
  
    },
    {
        title: 'PLAYLISTS',
        amount: playlists
    }
  ]

  /* Fetch Data topArtistsAllTime*/
  const {
    data: topArtistsAllTime, 
    error : isErrorTopArtistsAllTime, 
    isLoading : isLoadingTopArtistsAllTime
  } = useSWR('topArtistsAllTime', ()=>getTopArtistsLongTerm(10));
  
  /* Fetch Data topTracksAllTime*/
  const {
    data: topTracksAllTime, 
    error : isErrorTopTracksAllTime, 
    isLoading: isLoadingTopTracksAllTime,
  } = useSWR('topTracksLong', ()=> getTopTracksLongTerm(10));

  /* Log Out Handeller*/
  function onClickLogOutHandeller(){
    setSpotifyToken(null);
    logout();
    router.push('/redirect');
  }

  useEffect(() => {
    setArtistData(topArtistsAllTime);
    console.log(artistData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
 
  return (
    <div className={` w-10/12 md:w-7/12 lg:w-full mx-auto mb-32 `}>
        { 
        /* Error */
        (isErrorTopArtistsAllTime || isErrorTopTracksAllTime ) 
          ? (<ErrorLayout error={isErrorTopArtistsAllTime || isErrorTopTracksAllTime}/>)
          /* Loading */
          : ( isLoadingTopArtistsAllTime || isLoadingTopTracksAllTime ) 
              ? (<LoadingLayout />)
              : (
                  <div className="mt-14"
                  >
                    <motion.div className=""
                      initial={'hidden'}
                      animate={'visible'}
                      variants={headerVariants}
                    >
                      {/* Profile Image */}
                      <div className="flex justify-center">
                        <div className="rounded-full overflow-hidden mb-10">
                          <Image 
                            className="w-full h-auto" 
                            height={150} 
                            width={150} 
                            src={img} 
                            alt="user-profile"
                            loading="lazy"
                          ></Image> 
                        </div>
                      </div>
                      {/* Header */}
                      <div className="w-fit mx-auto"
                      >
                        <Link href={userLink ?? ''} rel="noopener noreferrer" target="_blank">
                          <div className="text-white hover:text-[#1db954] text-3xl 
                            lg:text-5xl font-semibold text-center "
                          >
                            <h1>{userName}</h1>
                          </div>
                        </Link>
                      </div>
                      {/* Display */}
                      <div className="mt-10 flex flex-row space-x-8 items-center justify-center">
                        {   
                            subHeaderTitles.map((elem , i:number)=>{
                                return (
                                  <SubDisplay 
                                    key={i} 
                                    title={elem.title} 
                                    amount={elem.amount}
                                  />
                                )
                            })
                        }
                      </div>
                      <div className="mt-10 text-center">
                        <div className="" 
                          onClick={()=>onClickLogOutHandeller()}
                        >
                          <OutlinedButton title='logout'/>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div className='flex flex-col lg:flex-row lg:space-x-8 xl:space-x-20 mt-20 justify-center'
                      variants={profileInfoDisplayVariants}
                      initial={'hidden'}
                      animate={'visible'}
                    >
                        {/* Top Artists */}
                        <section className="mb-12">
                          <Header
                            title='Top Artists of All Time'
                            buttonText='See More'
                            buttonLink='/app/artists'
                          />
                          <div className="space-y-5">
                            {
                              topArtistsAllTime?.items?.map((artist:IArtistLongTerm, i:number)=>{
                                console.log(artist?.images[2].url)
                                return (
                                  <ArtistCard 
                                    id={i}
                                    key={i} 
                                    icon={`${artist?.images[2].url}?timestamp=${Date.now()}`} 
                                    title={artist?.name} 
                                    route={`/app/artist/${artist?.id}`}
                                  />
                                )
                              })  
                            }
                          </div>
                        </section>  
                        {/* Top Tracks */}
                        <section className="">
                          <Header
                            title='Top Tracks of All Time'
                            buttonText='See More'
                            buttonLink='/app/tracks'
                          />
                          <div className="space-y-5">
                            {
                              topTracksAllTime?.items.map((
                                track:ITrackLongTerm, i:number
                              ) => {
                                return (
                                  <TrackCard 
                                    key={i} 
                                    id={i}
                                    icon={track?.album?.images[2]?.url}
                                    title={track?.name}
                                    subtitle={track?.artists[0]?.name}
                                    album={track?.album?.name}
                                    duration={track?.duration_ms}
                                    route={`/app/track/${track?.id}`}
                                  />
                                )
                              })
                            }
                          </div>
                        </section>
                    </motion.div>
                  </div>
                )
              }
      </div>
  )
}

export default ProfileLayout