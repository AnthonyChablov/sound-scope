import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import ScaleLoader from 'react-spinners/ScaleLoader';
import ErrorLayout from '@/components/Error/ErrorLayout';
import Icons from '@/components/Common/Icons';


const RedirectLayout = () => {

    /* Route */
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/login');
        }, 2000);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center items-center mb-14">
                <Icons 
                    type="spotify" 
                    size={50} 
                />
                <h1 className='text-slate-100 text-bold text-2xl ml-4'>Spotify Profile Viewer</h1>
            </div>
            <ScaleLoader color="#1db954" />
            <p className='text-slate-100 text-semibold text-lg mt-14'>Please wait while we redirect you.</p>
        </div>
    )
}

export default RedirectLayout