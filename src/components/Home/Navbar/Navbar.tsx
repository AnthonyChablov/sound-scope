import {useState} from 'react';
import Icons from '@/components/Common/Icons';
import Link from 'next/link';
import useWindowWidth from '@/hooks/useWindowWidth';


const Navbar = () => {

    /* Detect Window width resize */
    const windowWidth = useWindowWidth();

    const [show, setShow] = useState(true); /* Setting Nav Bar disappear onScrollDown */
    
    return (
        <div className='mx-auto bg-black'>
            <div className="text-white max-w-4xl w-screen py-5 px-20">
                {/* logo */}
                <Link href={'/'}>
                    <Icons type='spotify' size={40}></Icons>
                </Link>
                <p>Spotify Viewer </p>
            </div>
        </div>
    )
}

export default Navbar