import React from 'react'
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
        <ul className={`h-fit w-full flex max-w-lg justify-between
            ${windowWidth > 770 
                ? 'flex-col items-center w-full ' 
                : 'flex-row  w-full'
            }
        `}>
            {
                data.map((item, i)=>{
                    return (
                            <NavItem 
                                key={i}
                                icon={item.icon} 
                                title={item.title} 
                                isActive = {router.pathname === `${item.route}`}
                                route={item?.route}
                            />
                    )
                })
            }
        </ul>
        
    )
}

export default NavMenu