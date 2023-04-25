import React from 'react';
import Link from 'next/link';
import SubDisplay from './SubDisplay/SubDisplay';
import OutlinedButton from '@/components/Common/OutlinedButton';
import Header from './Header/Header';
import ArtistCard from '../Cards/ArtistCard';

interface IProfile{
    userName: string,
    followers: number,
    following: number,
    playlists: number,
}

const ProfileLayout = ({userName, followers, following, playlists}: IProfile) => {
  return (
    <div>
        {/* Image Placeholder */}
        <div className="mt-14 ">
              {/* <Image height={50} width={100} src={placeholder} alt="placeholder"></Image> */}
              <div className="p-10 bg-white rounded-full mb-10 text-center w-20 mx-auto">
                img
              </div>
            </div>
            {/* Header */}
            <Link href={'/app'}>
              <div className="text-white hover:text-[#1db954] text-5xl font-semibold text-center">
                <h1>{userName}</h1>
              </div>
            </Link>
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
              
                  ].map((elem)=>{
                      return <SubDisplay title={elem.title} amount={elem.amount   }/>
                  })
              }
            </div>
            <div className="mt-10 text-center">
              <OutlinedButton title='logout'/>
            </div>

            <div className='flex space-x-20 mt-20'>
              {/* Top Artists */}
              <section className="">
                <Header
                  title='Top Artists of All Time'
                  buttonText='See More'
                  buttonLink='/artists'
                />

                {
                  [{
                    new:2
                  }].map((artist)=>{
                    return (
                      <ArtistCard artistImage='12' artistName='Drake'/>
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
                  
                }
              </section>
            </div>

            
    </div>
  )
}

export default ProfileLayout