import React from 'react'
import Icons from '@/components/Common/Icons'
import NavItem from './NavItem';
import useWindowWidth from '@/hooks/useWindowWidth';
import Link from 'next/link';

const data = [
    {
        route: "",
        icon:'profile',
        title: "Profile"
    },
    {
        route: "artists",
        icon:'artists',
        title: "Artists"
    },
    {
        route: "tracks",
        icon:'tracks',
        title: "Tracks"
    },
    {
        route: "recent",
        icon:'recent',
        title: "Recent"
    },
    {
        route: "playlists",
        icon:'playlists',
        title: "Playlists"
    }
]

const NavMenu = () => {
    const windowWidth = useWindowWidth();

    return (
        
        <ul className={`h-fit w-fit flex flex-row max-w-lg
            ${windowWidth > 770 && 'flex-col items-center justify-between w-full'}
        `}>
            {
                data.map((item)=>{
                    return (
                        <Link href={`/app/${item.route}`}>
                            <NavItem icon={item.icon} title={item.title}/>
                        </Link>
                    )
                })
            }
        </ul>
        
    )
}

export default NavMenu