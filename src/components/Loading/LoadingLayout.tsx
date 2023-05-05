import React , {useEffect} from 'react';
import { useRouter } from 'next/router'
import ScaleLoader from 'react-spinners/ScaleLoader';
import { useStateStore } from '@/store/useAppStore';
import { setAccessToken } from '@/spotifyApi/spotifyApi';

const LoadingLayout = () => {

  return (
    <div className="flex items-center justify-center h-screen" >
      <div className="flex flex-col items-center justify-center">
        <ScaleLoader color="#1db954" />
        <p className='text-slate-100 mt-5 text-lg font-semibold'>Loading...</p>
      </div>
        
    </div>
  )
}

export default LoadingLayout;