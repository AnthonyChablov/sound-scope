import { useEffect } from 'react';
import useSWR from 'swr'
import Sidebar from "./Sidebar/Sidebar";
import Card from "./Cards/ArtistCard";
import Image from "next/image";
import placeholder from '../../assets/webimage-CFCF5ECC-63CC-421D-AA5A1806A936CC97.png';
import Link from "next/link";
import ProfileLayout from "./Profile/ProfileLayout";
import { useStateStore } from '@/store/useAppStore';
import { getUser } from '@/spotifyApi/spotifyApi';

interface IAppLayout{
  mode:string
} 

const AppLayout = ({mode}:IAppLayout) => {

  const { data, error, isLoading } = useSWR('/api/user', getUser)

  useEffect(()=>{
    console.log(data);
  },[data]);

  return (
    <div className=" bg-zinc-900 h-full">
      {
        mode ==='app' && (
          <div className="flex items-center justify-center flex-col" >
              <ProfileLayout 
                userName="Anthony Chablov" 
                followers={12} 
                following={12} 
                playlists={12} 
              />
            
          </div>
        )
      }
    </div>
  )
}

export default AppLayout;