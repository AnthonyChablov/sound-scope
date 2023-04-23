import React from 'react'
import Icons from '@/components/Common/Icons'
import NavItem from './NavItem';
import useWindowWidth from '@/hooks/useWindowWidth';
import Link from 'next/link';
import { useRouter } from 'next/router';

const data = [
    {
        route: "/app",
        icon:'profile',
        title: "Profile"
    },
    {
        route: "/app/artists",
        icon:'artists',
        title: "Artists"
    },
    {
        route: "/app/tracks",
        icon:'tracks',
        title: "Tracks"
    },
    {
        route: "/app/recent",
        icon:'recent',
        title: "Recent"
    },
    {
        route: "/app/playlists",
        icon:'playlists',
        title: "Playlists"
    }
]

const NavMenu = () => {
    const windowWidth = useWindowWidth();
    const router = useRouter();

    return (
        <ul className={`h-fit w-fit flex flex-row max-w-lg
            ${windowWidth > 770 && 'flex-col items-center justify-between w-full'}
        `}>
            {
                data.map((item)=>{
                    return (
                        <Link href={`${item.route}`}>
                            <NavItem 
                                icon={item.icon} 
                                title={item.title} 
                                isActive = {router.pathname === `${item.route}`}
                            />
                        </Link>
                    )
                })
            }
        </ul>
        
    )
}

export default NavMenu