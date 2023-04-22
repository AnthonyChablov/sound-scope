import React from 'react'
import Icons from '@/components/Common/Icons'
import NavItem from './NavItem';
import useWindowWidth from '@/hooks/useWindowWidth';

const data = [
    {
        icon: "profile",
        title: "Profile"
    },
    {
        icon: "topArtists",
        title: "Top Artists"
    },
    {
        icon: "topTracks",
        title: "Top Tracks"
    },
    {
        icon: "recent",
        title: "Recent"
    },
    {
        icon: "playlists",
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
                    return (<NavItem icon={item.icon} title={item.title}/>)
                })
            }
        </ul>
        
    )
}

export default NavMenu