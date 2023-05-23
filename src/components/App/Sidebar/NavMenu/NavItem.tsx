import Icons from '@/components/Common/Icons';
import useWindowWidth from '@/hooks/useWindowWidth';
import Button from '@mui/material/Button';
import Link from 'next/link';

interface INavItem {
    icon:string,
    title:string,
    isActive:boolean,
    route:string,
    anchor: "left" | "bottom" | "right" | "top" | undefined
}

const iconSize = 16;

const NavItem = ({icon, title, isActive , route , anchor}:INavItem) => {

    const windowWidth = useWindowWidth();
    const responsiveDisplay = windowWidth && windowWidth >= 770;

    return (
        <li className={` border-solid w-full shadow-md 
            ${isActive 
                ? anchor==='left' 
                    ? 'border-l-4 border-t-0 bg-zinc-900  ' 
                    : 'border-t-4 border-l-0 bg-zinc-900 ' 
                : ''
            }
            ${!isActive 
                ? anchor==='left' 
                    ? 'pl-1 pt-0' 
                    : 'pt-1 pl-0' 
                : ''
            }
        `}>
            <Button className={`flex flex-col items-center py-4 px-4 w-full h-full `}
                disableTouchRipple
                sx={{
                    "& .MuiTouchRipple-child" : {
                        'background-color': '#ffffff'
                    }
                }}
                href={route}
            >
                <Icons type={icon} size={iconSize} />
                <p className='text-xs font-bold pt-2 capitalize text-white'>
                    {title}
                </p>
            </Button>
        </li>
    )
}

export default NavItem;