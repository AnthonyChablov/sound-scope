import React from 'react';
import Link from 'next/link';
import SubDisplay from './SubDisplay/SubDisplay';
import OutlinedButton from '@/components/Common/OutlinedButton';
import Header from './Header/Header';
import ArtistCard from '../Cards/ArtistCard';
import TrackCard from '../Cards/TrackCard';
import useWindowWidth from '@/hooks/useWindowWidth';
import { logout } from '@/spotifyApi/spotifyToken';
import { useStateStore } from '@/store/useAppStore';
import { useRouter } from 'next/router';

interface IProfile{
    userName: string,
    followers: number,
    following: number,
    playlists: number,
}

const ProfileLayout = ({userName, followers, following, playlists}: IProfile) => {

  /* state */
  const spotifyToken = useStateStore(state => state.spotifyToken);
  const setSpotifyToken = useStateStore(state => state.setSpotifyToken);
  /* hooks */
  const windowWidth = useWindowWidth();
  const router = useRouter()


  function onClickHandeller(){
    setSpotifyToken('');
    logout();
    router.push('/');
  }

  return (
    <div className={` w-10/12 md:w-7/12 lg:w-full mx-auto mb-32 `}>
        {/* Image Placeholder */}
        <div className="mt-14 ">
              {/* <Image height={50} width={100} src={placeholder} alt="placeholder"></Image> */}
              <div className="p-10 bg-white rounded-full mb-10 text-center w-20 mx-auto">
                img
              </div>
            </div>
            {/* Header */}
            <div className="w-fit mx-auto">
              <Link href={'/app'}>
                <div className="text-white hover:text-[#1db954] text-3xl 
                  lg:text-5xl font-semibold text-center "
                >
                  <h1>{userName}</h1>
                </div>
              </Link>
            </div>
            {/* display */}
            <div className="mt-10 flex flex-row space-x-8 items-center justify-center">
              {   
                  [
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
              
                  ].map((elem, i)=>{
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
                onClick={()=>onClickHandeller()}
              >
                <OutlinedButton title='logout'/>
              </div>
              
            </div>

            <div className='flex flex-col lg:flex-row lg:space-x-20 mt-20 justify-center'>
              {/* Top Artists */}
              <section className="mb-20">
                <Header
                  title='Top Artists of All Time'
                  buttonText='See More'
                  buttonLink='/artists'
                />
                {
                  [{
                    new:2
                  }].map((artist, i)=>{
                    return (
                      <ArtistCard key={i} icon='12' title='Drake' route='/'/>
                    )
                  })
                }
              </section>  
              {/* Top Tracks */}
              <section className="">
                <Header
                  title='Top Tracks of All Time'
                  buttonText='See More'
                  buttonLink='/artists'
                />
                {
                  [{
                    new:2
                  }].map((artist, i)=>{
                    return (
                      <TrackCard 
                        key={i} 
                        icon='12' 
                        title='Drake' 
                        subtitle='Frank - Ocean Channel Orange' 
                        route='/'
                      />
                    )
                  })
                }
              </section>
            </div>

            
    </div>
  )
}

export default ProfileLayout