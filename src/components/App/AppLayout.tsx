import { useEffect, useState } from 'react';
import useSWR from 'swr'
import Sidebar from "./Sidebar/Sidebar";
import Card from "./Cards/ArtistCard";
import Image from "next/image";
import placeholder from '../../assets/webimage-CFCF5ECC-63CC-421D-AA5A1806A936CC97.png';
import Link from "next/link";
import ProfileLayout from "./Profile/ProfileLayout";
import { useStateStore } from '@/store/useAppStore';
import { getUser, getSpotifyAccessToken, getPlaylists, getFollowing } from '@/spotifyApi/spotifyApi';
import TopArtistLayout from './TopArtist/TopArtistLayout';
import TopTrackLayout from './TopTrack/TopTrackLayout';
import LoadingLayout from '../Loading/LoadingLayout';
import RecentLayout from './Recent/RecentLayout';
import PlaylistLayout from './Playlist/PlaylistLayout';

interface IAppLayout{
  mode:string
}

const AppLayout = ({mode}:IAppLayout) => {

  /* State */
  const spotifyToken = useStateStore(state => state.spotifyToken);
  const setSpotifyToken = useStateStore(state => state.setSpotifyToken);
 
  /* Fetch Data */
  const { 
    data : user, 
    error : isErrorUser, 
    isLoading : isLoadingUser 
  } = useSWR('/api/user', getUser);

  const {
    data: playlists, 
    error : isErrorPlaylists, 
    isLoading : isLoadingPlaylists
  } = useSWR('/api/playlists', getPlaylists);

  const {
    data: following, 
    error : isErrorFollowing, 
    isLoading : isLoadingFollowing
  } = useSWR('/api/playlists', getFollowing);

  return (
    <div className=" bg-zinc-900 h-full">
      {
        mode ==='app' && (
          <div className="flex items-center justify-center flex-col" >
              {
                isLoadingUser
                ? (<LoadingLayout />)
                : (
                    <ProfileLayout 
                      img={user?.images[0]?.url}
                      userName={user?.display_name}
                      userLink={user?.external_urls.spotify}
                      followers={user?.followers.total}
                      following={following?.items.length}
                      playlists={playlists?.total} 
                    />
                  )
              }
          </div>
        )
      }
      {
        mode === 'artist' && (
          <div className="flex items-center justify-center flex-col" >
              {
                (isLoadingUser ) 
                ? (<LoadingLayout />)
                : (
                    <TopArtistLayout

                    />
                  )
              }
          </div>
        )
      }
      {
        mode === 'tracks' && (
          <div className="flex items-center justify-center flex-col" >
              {
                ( isLoadingUser ) 
                ? (<LoadingLayout/>)
                : (
                    <TopTrackLayout

                    />
                )
              }
          </div>
        )
      }
      {
        mode === 'recent' && (
          <div className="flex items-center justify-center flex-col" >
              {
                (isLoadingUser ) 
                ? (<LoadingLayout />)
                :(
                  <RecentLayout

                  />
                )
              }
          </div>
        )
      }
      {
        mode === 'playlists' && (
          <div className="flex items-center justify-center flex-col" >
              {
                (isLoadingUser ) 
                ? (<LoadingLayout />)
                :(
                  <PlaylistLayout

                  />
                )
              }
          </div>
        )
      }
    </div>
  )
}

export default AppLayout;