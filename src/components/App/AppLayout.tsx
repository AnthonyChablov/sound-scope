import { useEffect } from 'react';
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

interface IAppLayout{
  mode:string
}

const AppLayout = ({mode}:IAppLayout) => {

  /* State */
  const spotifyToken = useStateStore(state => state.spotifyToken);
  const setSpotifyToken = useStateStore(state => state.setSpotifyToken);
  const artistData = useArtistStore(state => state.artistData);

  /* Route */
  const router = useRouter();
 
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