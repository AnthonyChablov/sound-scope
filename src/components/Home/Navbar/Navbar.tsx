import {useState} from 'react';
import Icons from '@/components/Common/Icons';
import Link from 'next/link';
import useWindowWidth from '@/hooks/useWindowWidth';

const Navbar = () => {

    /* Detect Window width resize */
    const windowWidth = useWindowWidth();

    const [show, setShow] = useState(true); /* Setting Nav Bar disappear onScrollDown */
    
    return (
        <div className='mx-auto bg-black fixed top-0 left-0 w-screen '>
            <div className="text-white w-screen max-w-6xl mx-auto py-5 px-6 ">
                {/* logo */}
                <Link href={'/'}>
                    <div className="flex items-center ">
                        <Icons type='spotify' size={40}></Icons>
                        <p className='text-xl ml-3 font-semibold'>Spotify Viewer</p>
                    </div>
                    
                </Link>
                
            </div>
        </div>
    )
}

export default Navbar