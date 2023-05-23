import { useEffect, useMemo } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import ProfileLayout from "./Profile/ProfileLayout";
import { useStateStore } from '@/store/useAppStore';
import { getUser, getPlaylists, getFollowing } from '@/spotifyApi/spotifyApi';
import TopArtistLayout from './TopArtist/TopArtistLayout';
import TopTrackLayout from './TopTrack/TopTrackLayout';
import LoadingLayout from '../Loading/LoadingLayout';
import RecentLayout from './Recent/RecentLayout';
import PlaylistLayout from './Playlist/PlaylistLayout';
import ErrorLayout from '../Error/ErrorLayout';
import { useArtistStore } from '@/store/useArtistStore';
import Sidebar from './Sidebar/Sidebar';
import { getStorageSpotifyAccessToken } from '@/spotifyApi/spotifyToken';

interface IAppLayout{
  mode:string
}

const AppLayout = ({mode}:IAppLayout) => {

  /* Token from local storage */
  const spotifyToken = getStorageSpotifyAccessToken() ?? '';

  /* Fetch Data */
  const { 
    data : user, 
    error : isErrorUser, 
    isLoading : isLoadingUser 
  } = useSWR('/api/user', ()=>getUser(spotifyToken ),
  {
    revalidateOnFocus: false,
  });

  const {
    data: playlists, 
    error : isErrorPlaylists, 
    isLoading : isLoadingPlaylists
  } = useSWR('/api/playlists', ()=>getPlaylists(spotifyToken ),
  {
    revalidateOnFocus: false,
  });

  const {
    data: following, 
    error : isErrorFollowing, 
    isLoading : isLoadingFollowing
  } = useSWR('/api/playlists', () => getFollowing(spotifyToken),
  {
    revalidateOnFocus: false,
  });

  return (
    <div className=" bg-zinc-900 h-full">
      {
        mode ==='app' && (
          <div className="flex items-center justify-center flex-col" >
              {
                /* Error */
              (isErrorUser || isErrorPlaylists || isErrorFollowing)
                ? <ErrorLayout error = {isErrorUser || isErrorPlaylists || isErrorFollowing}/>
                /* Loading */
                : isLoadingUser || isLoadingFollowing || isLoadingPlaylists
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
              (isErrorFollowing)
                ? <ErrorLayout error={isErrorFollowing }/>
                : (isLoadingUser || isLoadingFollowing || isLoadingPlaylists ) 
                  ? (<LoadingLayout />)
                  : (
                      <TopArtistLayout />
                    )
                }
          </div>
        )
      }
      {
        mode === 'tracks' && (
          <div className="flex items-center justify-center flex-col" >
              {
              (isErrorFollowing)
              ? <ErrorLayout error={isErrorFollowing }/>
              :( isLoadingUser || isLoadingFollowing || isLoadingPlaylists ) 
                ? (<LoadingLayout/>)
                : (
                    <TopTrackLayout/>
                )
              }
          </div>
        )
      }
      {
        mode === 'recent' && (
          <div className="flex items-center justify-center flex-col" >
              {
                (isLoadingUser || isLoadingFollowing || isLoadingPlaylists ) 
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
                (isLoadingUser  || isLoadingPlaylists ) 
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