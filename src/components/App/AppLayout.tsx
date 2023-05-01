import { useEffect, useState } from 'react';
import useSWR from 'swr'
import Sidebar from "./Sidebar/Sidebar";
import Card from "./Cards/ArtistCard";
import Image from "next/image";
import placeholder from '../../assets/webimage-CFCF5ECC-63CC-421D-AA5A1806A936CC97.png';
import Link from "next/link";
import ProfileLayout from "./Profile/ProfileLayout";
import { useStateStore } from '@/store/useAppStore';
import axios from 'axios';
import { getSpotifyAccessToken } from '@/spotifyApi/spotifyApi';

interface IAppLayout{
  mode:string
}

const AppLayout = ({mode}:IAppLayout) => {

  /* state */
  const spotifyToken = useStateStore(state => state.spotifyToken);
  const setSpotifyToken = useStateStore(state => state.setSpotifyToken);
  const [user , setUser] = useState({});
  const [following , setFollowing] = useState({});
  const [playlists , setPlaylists] = useState({});

  /* variables */
  const headers= { 
    'Authorization': `Bearer ${spotifyToken}`, 
    'Content-Type': 'application/json' 
  };

  /* api calls */
  async function getUser(){
    try{
      const {data} = await axios.get('https://api.spotify.com/v1/me', { headers });
      setUser(data);
      console.log(data);
    } catch(err){
      console.log(err);
    }
  }

  async function getFollowing(){ /* err */
    try{
      const { data } = await axios.get('https://api.spotify.com/v1/me/following', { headers });
      setFollowing(data);
      console.log(data);
    } catch(err){
      console.log(err);
    }
  }

  async function getPlaylists(){
    try{
      const { data } = await axios.get("https://api.spotify.com/v1/me/playlists", { headers });
      setPlaylists(data);
      console.log(data);
    } catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    let accessToken = getSpotifyAccessToken();
    setSpotifyToken(accessToken);
    getUser();
    getFollowing();
    getPlaylists();
  },[spotifyToken]);

  return (
    <div className=" bg-zinc-900 h-full">
      {
        mode ==='app' && (
          <div className="flex items-center justify-center flex-col" >
              <ProfileLayout 
                img={''}
                userName={user?.display_name}
                followers={user?.followers?.total}
                following={user?.followers?.total} 
                playlists={user?.followers?.total} 
              />
          </div>
        )
      }
    </div>
  )
}

export default AppLayout;