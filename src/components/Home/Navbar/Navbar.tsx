import {useState} from 'react';
import Icons from '@/components/Common/Icons';
import Link from 'next/link';
import OutlinedButton from '@/components/Common/OutlinedButton';
import useWindowWidth from '@/hooks/useWindowWidth';

const Navbar = () => {

    /* Detect Window width resize */
    const windowWidth = useWindowWidth();

    const [show, setShow] = useState(true); /* Setting Nav Bar disappear onScrollDown */
    
    return (
        <div className='mx-auto bg-black fixed top-0 left-0 w-screen z-10 '>
            <div className="text-white w-screen max-w-6xl mx-auto py-5 px-6  flex justify-between">
                {/* logo */}
                <div className="w-fit">
                    <Link href={'/'}>
                        <div className="flex items-center ">
                            <Icons type='music' size={40}></Icons>
                            <p className='text-xl ml-4 font-semibold'>Sound Scope</p>
                        </div>
                    </Link>
                </div>

                {/* Logout */}
                <div className="w-fit">
                    <Link href={'/'}>
                        <OutlinedButton title='Logout'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;