import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import ScaleLoader from 'react-spinners/ScaleLoader';
import ErrorLayout from '@/components/Error/ErrorLayout';
import Icons from '@/components/Common/Icons';
import { removeStorageSpotifyAccessToken } from '@/spotifyApi/spotifyToken';

const RedirectLayout = () => {

    /* Route */
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            removeStorageSpotifyAccessToken();
            router.push('/login');
        }, 1500);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center items-center mb-14">
                <Icons 
                    type="music" 
                    size={50} 
                />
                <h1 className='text-slate-100 text-bold text-2xl ml-6'>Sound Scope</h1>
            </div>
            <ScaleLoader color="#64748b" />
            <p className='text-slate-100 text-semibold text-lg mt-14'>Please wait while we redirect you.</p>
        </div>
    )
}

export default RedirectLayout