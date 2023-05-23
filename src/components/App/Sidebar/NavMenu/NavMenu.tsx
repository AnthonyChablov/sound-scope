import React from 'react'
import NavItem from './NavItem';
import useWindowWidth from '@/hooks/useWindowWidth';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface INavMenu{
    anchor : "left" | "bottom" | "right" | "top" | undefined
}

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

const NavMenu = ({anchor} : INavMenu) => {
    const windowWidth = useWindowWidth();
    const router = useRouter();

    return (
        <ul className={`h-fit w-full flex max-w-lg justify-between flex-row md:flex-col md:items-center md:w-full
        `}> {/* ${windowWidth > 768 ? 'flex-col items-center w-full' :'flex-row '} */}
            {
                data.map((item, i)=>{
                    return (
                        <NavItem 
                            key={i}
                            icon={item.icon} 
                            title={item.title} 
                            anchor={anchor}
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