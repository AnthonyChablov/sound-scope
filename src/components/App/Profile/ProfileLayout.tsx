import React, {useEffect} from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import Image from 'next/image';
import SubDisplay from './SubDisplay/SubDisplay';
import OutlinedButton from '@/components/Common/OutlinedButton';
import Header from './Header/Header';
import ArtistCard from '../Cards/ArtistCard';
import TrackCard from '../Cards/TrackCard';
import useWindowWidth from '@/hooks/useWindowWidth';
import { logout } from '@/spotifyApi/spotifyToken';
import { useStateStore } from '@/store/useAppStore';
import { useRouter } from 'next/router';
import { getTopArtistsShortTerm, getTopArtistsLongTerm, getTopTracksLongTerm } from '@/spotifyApi/spotifyApi';
import clearCache from "swr";
import {IArtistLongTerm} from '../../../models/artists';
import {ITrackLongTerm} from '../../../models/tracks';
import LoadingLayout from '@/components/Loading/LoadingLayout';
import ErrorLayout from '@/components/Error/ErrorLayout';

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

  /* Hooks */
  const router = useRouter();
  clearCache("topTracksLong");

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
  } = useSWR('topArtistsLong', ()=>getTopArtistsLongTerm(10));
  
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
    router.push('/');
  }

  useEffect(()=>{
    console.log(isErrorTopTracksAllTime)
  },[isErrorTopArtistsAllTime])

  return (
    <div className={` w-10/12 md:w-7/12 lg:w-full mx-auto mb-32 `}>
        { 
        /* Error */
        (isErrorTopArtistsAllTime || isErrorTopTracksAllTime ) 
          ? (<ErrorLayout />)
          : ( isLoadingTopArtistsAllTime || isLoadingTopTracksAllTime ) 
              ? (<LoadingLayout />)
              : (
                  <div className="mt-14">
                    <div className="flex justify-center">
                      <div className="rounded-full overflow-hidden mb-10">
                        <Image 
                          height={150} 
                          width={150} 
                          src={img} 
                          alt="user-profile"
                        ></Image> 
                      </div>
                    </div>
                    {/* Header */}
                    <div className="w-fit mx-auto">
                      <Link href={userLink || ''} rel="noopener noreferrer" target="_blank">
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
                                  amount={elem.amount   }
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
                      <div className='flex flex-col lg:flex-row lg:space-x-8 xl:space-x-20 mt-20 justify-center'>
                          {/* Top Artists */}
                          <section className="mb-12">
                            <Header
                              title='Top Artists of All Time'
                              buttonText='See More'
                              buttonLink='/app/artists'
                            />
                            <div className="space-x-10">
                              {
                                topArtistsAllTime?.items.map((artist:IArtistLongTerm, i:number)=>{
                                  return (
                                    <ArtistCard 
                                      key={i} 
                                      icon={artist?.images[2]?.url } 
                                      title={artist?.name} 
                                      route={artist?.external_urls.spotify}
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
                            <div className="space-x-10">
                              {
                                topTracksAllTime?.items.map((
                                  track:ITrackLongTerm, i:number
                                ) => {
                                  return (
                                    <TrackCard 
                                      key={i} 
                                      icon={track?.album?.images[2]?.url}
                                      title={track?.name}
                                      subtitle={track?.artists[0]?.name}
                                      album={track?.album?.name}
                                      duration={track?.duration_ms}
                                      route='/'
                                    />
                                  )
                                })
                              }
                            </div>
                          </section>
                        </div>
                    </div>
              )
          }
    </div>
  )
}

export default ProfileLayout